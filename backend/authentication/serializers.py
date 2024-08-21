from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        extra_kwargs = {'password':{'write_only':True}}
        
        
    def create(self,validate_data):
        user = User.objects.create_user(
            username=validate_data['username'],
            password=validate_data['password']
        )
        return user
    
class LogInSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    class Meta:
        model = User
        fields = ['username','password']
        extra_kwargs = {'password':{'write_only':True}}
    
    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Invalid Credentials')
    