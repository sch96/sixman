from django.shortcuts import render
from .models import User

# Create your views here.
def test2(request):
  return render(request, "test2.html")

def get_user(request):
  Users = User.objects.all()
  context = {
    "Users" : Users
  }
  return render(request, "test2.html", context)