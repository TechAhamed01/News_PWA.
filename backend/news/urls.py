from django.urls import path
from . import views

urlpatterns = [
    path('api/news/', views.get_news, name='get_news'),
    path('api/news/category/<str:category>/', views.get_news_by_category, name='get_news_by_category'),
    path('api/news/create/', views.create_news, name='create_news'),
]