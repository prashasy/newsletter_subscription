from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('<format>[a-z0-9]', views.index ),
]