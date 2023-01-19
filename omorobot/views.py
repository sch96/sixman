from django.shortcuts import render

# Create your views here.
def test2(request):
  return render(request, "test2.html")