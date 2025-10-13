from django.db import models
from django.utils import timezone

class NewsArticle(models.Model):
    CATEGORY_CHOICES = [
        ('technology', 'Technology'),
        ('business', 'Business'),
        ('science', 'Science'),
        ('sports', 'Sports'),
        ('environment', 'Environment'),
        ('culture', 'Culture'),
        ('politics', 'Politics'),
        ('health', 'Health'),
    ]
    
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    date = models.DateTimeField(default=timezone.now)
    read_time = models.CharField(max_length=20, default="5 min read")
    image_url = models.URLField(max_length=500, blank=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-date']