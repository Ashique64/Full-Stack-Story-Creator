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
    
class StoryDetailView(generics.RetrieveDestroyAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    
class CompletedStoriesListView(generics.ListAPIView):
    serializer_class = StorySerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        return Story.objects.filter(is_completed = True).order_by('-created_at')
    
class OnGoingStoriesListView(generics.ListAPIView):
    serializer_class = StorySerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        return Story.objects.filter(is_completed = False).order_by('-created_at')
    
    
class ContributionCreateView(generics.CreateAPIView):
    queryset = Contribution.objects.all()
    serializer_class = ContributionCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        story = Story.objects.get(id=self.kwargs['story_id'])
        if story.contributions.count() >= 9:
            raise ValidationError("This story has reached the maximum number of contributions.")
        serializer.save(author=self.request.user, story=story)
    

    