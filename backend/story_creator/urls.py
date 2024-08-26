from django.urls import path
from .views import StoryCreateView,StoryListView,ContributionCreateView,StoryDetailView,CompletedStoriesListView,OnGoingStoriesListView

urlpatterns = [
    path('stories/',StoryListView.as_view(), name='story_list'),
    path('stories/create/',StoryCreateView.as_view(), name='story_create'),
    path('stories/<int:pk>/', StoryDetailView.as_view(), name='story_detail'),
    path('stories/completed/', CompletedStoriesListView.as_view(), name='completed_stories'),
    path('stories/ongoing/', OnGoingStoriesListView.as_view(), name='ongoing_stories'),
    path('stories/<int:story_id>/contribute/',ContributionCreateView.as_view(), name='add_contribution'),
]