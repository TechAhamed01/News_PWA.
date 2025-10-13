from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from django.core import serializers
from .models import NewsArticle
import json

def get_news(request):
    """
    API endpoint to get all news articles
    """
    if request.method == 'GET':
        articles = NewsArticle.objects.all()
        articles_data = []
        
        for article in articles:
            articles_data.append({
                'id': article.id,
                'title': article.title,
                'excerpt': article.excerpt,
                'category': article.category,
                'date': article.date.strftime('%Y-%m-%d'),
                'readTime': article.read_time,
                'image': article.image_url
            })
        
        return JsonResponse({'articles': articles_data}, safe=False)

def get_news_by_category(request, category):
    """
    API endpoint to get news articles by category
    """
    if request.method == 'GET':
        articles = NewsArticle.objects.filter(category=category)
        articles_data = []
        
        for article in articles:
            articles_data.append({
                'id': article.id,
                'title': article.title,
                'excerpt': article.excerpt,
                'category': article.category,
                'date': article.date.strftime('%Y-%m-%d'),
                'readTime': article.read_time,
                'image': article.image_url
            })
        
        return JsonResponse({'articles': articles_data}, safe=False)

@csrf_exempt
def create_news(request):
    """
    API endpoint to create a new news article
    """
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            article = NewsArticle.objects.create(
                title=data['title'],
                excerpt=data['excerpt'],
                content=data['content'],
                category=data['category'],
                read_time=data.get('readTime', '5 min read'),
                image_url=data.get('image', '')
            )
            return JsonResponse({'message': 'Article created successfully', 'id': article.id}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)