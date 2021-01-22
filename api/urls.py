from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('api/users/', views.UserView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)