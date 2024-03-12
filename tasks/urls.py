from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.taskhome, name='task-home'),
    path('insc-cadastro', views.insc_cadastro, name='insc-cadastro'),
]
