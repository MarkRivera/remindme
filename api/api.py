from api.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

# API Viewset
class UserViewset(viewsets.ModelViewSet):
  queryset = User.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = UserSerializer
