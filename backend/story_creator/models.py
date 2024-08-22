from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

# Create your models here.


def validate_image_size(image):
    filesize = image.size
    if filesize > 10485760:
        raise ValidationError("The maximum file size that can be uploaded is 10MB")


def validate_image_extension(image):
    valid_extensions = ['jpg', 'jpeg', 'png']
    extension = image.name.split('.')[-1].lower()
    if extension not in valid_extensions:
        raise ValidationError("Allowed file types are: jpg, jpeg, png")


class Story(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='stories/images/', validators=[validate_image_size, validate_image_extension])
    created_by = models.ForeignKey(User,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    is_completed = models.BooleanField(default=True)
    
    
    def __str__(self) :
        return self.title
    
    
class Contribution(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name='contributions')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def clean(self):
        if self.story.contributions.count() >= 10:
            raise ValidationError("This story has reached the maximum number of contributions.")
    
    
    def __str__(self) :
        return f'Contribution by {self.auther.username} to {self.story.title}'