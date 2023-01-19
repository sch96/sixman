from django.contrib import admin
from django.urls import path, include
from .views import test2


urlpatterns = [
    path('', test2, name="test2"),
]