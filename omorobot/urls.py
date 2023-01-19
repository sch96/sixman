from django.contrib import admin
from django.urls import path, include
from .views import test2, get_user


urlpatterns = [
    path('', test2, name="test2"),
    path("read/", get_user),

]