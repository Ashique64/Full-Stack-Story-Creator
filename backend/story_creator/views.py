from django.shortcuts import render
from rest_framework import generics,permissions
from .models import Story,Contribution
from .serializers import StorySerializer,StoryCreateSerializer,ContributionCreateSerializer
from rest_framework.exceptions import ValidationError

# Create your views here.



class StoryCreateView(generics.CreateAPIView):
    queryset = Story.objects.all()
    serializer_class = StoryCreateSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self,serializer):
        serializer.save(created_by=self.request.user)
        

class StoryListView(generics.ListAPIView):
    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Story.objects.filter(created_by=self.request.user).order_by('-created_at')
    
    
class ContributionCreateView(generics.CreateAPIView):
    queryset = Contribution.objects.all()
    serializer_class = ContributionCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        story = Story.objects.get(id=self.kwargs['story_id'])
        if story.contributions.count() >= 10:
            raise ValidationError("This story has reached the maximum number of contributions.")
        serializer.save(user=self.request.user, story=story)
    
    

        

    