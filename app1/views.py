from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def branches(request):
    return render(request, 'branches.html')

def contact(request):
    return render(request, 'contact.html')

def courses(request):
    return render(request, 'courses.html')

def signin(request):
    return render(request, 'Signin.html')

def students(request):
    return render(request, 'student.html')

def signup(request):
    return render(request, 'signup.html')
