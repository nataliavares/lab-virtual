from django.urls import path

from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('activities/',views.taskList, name='task-list'),
    path('atividade0/', views.memoryGame, name='memory-game'),
    path('atividade1/', views.atividade1, name='atividade1'),
    path('atividade2/', views.atividade2, name='atividade2'),
    path('atividade3/', views.atividade3, name='atividade3'),
    path('atividade4/', views.atividade4, name='atividade4')
]
