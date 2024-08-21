from rest_framework import serializers
from .models import Story,Contribution


class StorySerializer(serializers.ModelSerializer):
    
    created_by = serializers.ReadOnlyField(source='created_by.username')
    
    class Meta:
        model = Story
        fields = '__all__'
        
class ContributionSerializer(serializers.ModelSerializer):
    
    author = serializers.ReadOnlyField(source='author.username')
    
    class Meta:
        model = Contribution
        fields = '__all__'