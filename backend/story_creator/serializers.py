from rest_framework import serializers
from .models import Story, Contribution


class ContributionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contribution
        fields = '__all__'


class StorySerializer(serializers.ModelSerializer):

    contributions = ContributionSerializer(many=True, read_only=True)

    class Meta:
        model = Story
        fields = '__all__'
        
class StoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ['title', 'image', 'first_line']

class ContributionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contribution
        fields = ['content']
