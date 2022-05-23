
from django.urls import path
from app1.views import *

urlpatterns = [
    path('', home, name="homel"),
    path('home/', home, name="homel"),
    path('courses/', courses, name="coursesl"),
    path('branches/', branches, name="branchesl"),
    path('contact/', contact, name="contactl"),
    path('students', students, name="studentsl"),
    path('signup/', signup, name="signupl"),
    path('signin/', signin, name="signinl"),

]
