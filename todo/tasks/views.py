from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'home.html')

@login_required
def taskList(request):
    return render(request, 'tasks/list.html')

@login_required
def memoryGame(request):
    return render(request, 'tasks/memorygame.html')

@login_required
def atividade1(request):
    return render(request, 'tasks/pratica1.html')

@login_required
def atividade2(request):
    return render(request, 'tasks/pratica2.html')

@login_required
def atividade3(request):
    return render(request, 'tasks/pratica3.html')

@login_required
def atividade4(request):
    return render(request, 'tasks/pratica4.html')