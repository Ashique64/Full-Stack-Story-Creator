from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Story(models.Model):
    title = models.CharField(max_length=255)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    is_completed = models.BooleanField(default=True)
    
    
    def __str__(self) :
        return self.title
    
    
class Contribution(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self) :
        return f'Contribution by {self.auther.username} to {self.story.title}'