from django.urls import path
from .views import StoryCreateView,StoryListView,ContributionCreateView,StoryDetailView

urlpatterns = [
    path('stories/',StoryListView.as_view(), name='story_list'),
    path('stories/create/',StoryCreateView.as_view(), name='story_create'),
    path('stories/<int:pk>/', StoryDetailView.as_view(), name='story_detail'),
    path('stories/<int:story_id>/contribute/',ContributionCreateView.as_view(), name='add_contribution'),
]