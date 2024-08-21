from django.urls import path
from .views import StoryList,StoryDetailView,ContibutionCreateView,ContibutionListView

urlpatterns = [
    path('stories/',StoryList.as_view(), name='story_list'),
    path('stories/<int:pk>/',StoryDetailView.as_view(), name='story_details'),
    path('stories/<int:story_id>/contributions/',ContibutionListView.as_view(), name='contribution_list'),
    path('stories/<int:story_id>/contribute/',ContibutionCreateView.as_view(), name='contribution_create'),
]