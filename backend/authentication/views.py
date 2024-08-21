from django.shortcuts import render
from rest_framework import generics,status
from .serializers import SignUpSerializer,LogInSerializer,UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User


# Create your views here.


class SignUpView(generics.GenericAPIView):
    serializer_class = SignUpSerializer
    
    def post(self,request,*arg,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            'user':UserSerializer(user).data,
            'message':"User Created Successfully"
        }, status = status.HTTP_201_CREATED)
        
class LogInView(generics.GenericAPIView):
    serializer_class = LogInSerializer
    
    def post(self,request,*arg,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            "user":UserSerializer(user).data,
            "refresh":str(refresh),
            "access":str(refresh.access_token)
        }, status=status.HTTP_200_OK)