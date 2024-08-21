from django.shortcuts import render
from rest_framework import generics,permissions
from .models import Story,Contribution
from .serializers import StorySerializer,ContributionSerializer
# Create your views here.


class StoryList(generics.ListCreateAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self,serializer):
        serializer.save(created_by=self.request.user)
        

class StoryDetailView(generics.RetrieveAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_class = [permissions.IsAuthenticated]
    
    
class ContibutionListView(generics.ListAPIView):
    serializer_class = ContributionSerializer
    permission_class = [permissions.IsAuthenticated]
    
    def get_query(self):
        story_id = self.kwarg['story_id']
        return Contribution.objects.filter(story_id=story_id)
    

class ContibutionCreateView(generics.CreateAPIView):
    serializer_class = ContributionSerializer
    permission_class = [permissions.IsAuthenticated]
    
    def perform_create(self,serializer):
        story = Story.objects.get(id=self.kwargs['story_id'])
        if story.contributions.count() >= 4:
            story.is_completed = True
            story.save()
            raise serializer.ValidationError("This story is already completed")
        serializer.save(author=self.request.user, story=story)
        

    