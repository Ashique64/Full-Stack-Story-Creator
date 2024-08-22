from rest_framework import generics,status
from .serializers import UserSerialzer
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.db import IntegrityError
from rest_framework.views import APIView
from django.contrib.auth import authenticate,login,logout
from rest_framework_simplejwt.tokens import RefreshToken



# Create your views here.


class SignUpView(generics.CreateAPIView):
    
    def post(self,request):
        serializer = UserSerialzer(data = request.data)
        if serializer.is_valid():
            try:
                userName = serializer.validated_data.get('username')
                email = serializer.validated_data.get('email')
                
                if User.objects.filter(username = userName).exists():
                    return Response({
                        "error":"Username is Already Exist"
                    },status=status.HTTP_406_NOT_ACCEPTABLE)
                if User.objects.filter(email = email).exists():
                    return Response({
                        "error":"Email is Already Exist"
                    },status=status.HTTP_406_NOT_ACCEPTABLE)
                serializer.save()
                return Response({
                    "status":"success",
                    "message":"User Registered Successfully",
                    "user":serializer.data
                },status=status.HTTP_201_CREATED)
            except IntegrityError as e:
                return Response({
                    "error":"An error occuared. Please try again later"
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response (serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
                
                
                
class LogInView(APIView):
    
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if username and password:
            user = authenticate(username=username,password=password)
            
            if user is not None:
                login(request,user)
                refresh = RefreshToken.for_user(user)
                serializer = UserSerialzer(user)
                return Response ({
                    "status":"success",
                    "message":"Login Successful",
                    "user":serializer.data,
                    "refresh": str(refresh),
                    "access":str(refresh.access_token)
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "error":"Invaldi Username and Password"
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                "error":"Username and Password required"
            }, status=status.HTTP_401_UNAUTHORIZED)