from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def taskhome (request):
    return render(request, 'task/wp1_home.html')

def insc_cadastro (request):
    return render(request, 'task/wp2_insc-cadastro.html')