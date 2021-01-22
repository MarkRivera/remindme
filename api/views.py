# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from api.models import User
from api.serializers import UserSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here
# @api_view(["GET", "POST", "PUT", "DELETE"])
# def user_endpoint(request, pk):
#   try:
#     user = User.objects.get(pk=pk)
#   except User.DoesNotExist:
#     return Response(status=status.HTTP_404_NOT_FOUND)

#   if request.method == "GET":
#     serializer = UserSerializer(user)
#     return Response(serializer.data)

#   elif request.method == "POST":
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
#   elif request.method == "PUT":
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(serializer.data, status=status.HTTP_200_OK)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      
#   elif request.method == "DELETE":
#     user.delete()
#     return Response(status=status.HTTP_204_NO_CONTENT)

class UserView(APIView):
  def get_user(self, email):
    try:
      return User.objects.get(email=email)
    except User.DoesNotExist:
      raise Http404
  
  def get(self, request, format=None):
    email = request.query_params['email']
    user = self.get_user(email)
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
  def post(self, request, format=None):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def put(self, request, format=None):
    email = request.query_params['email']
    user = self.get_user(email)
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, format=None):
    email = request.query_params['email']
    user = self.get_user(email)
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    
