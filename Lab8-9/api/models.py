from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255) 

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255) 
    price = models.FloatField(default=0) 
    description = models.TextField(blank=True) 
    count = models.IntegerField(default=0) 
    is_active = models.BooleanField(default=True) 
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products') 
    
    # из 5 лабы поля тоже 
    rating = models.FloatField(default=0)
    likes = models.IntegerField(default=0)
    image = models.TextField(blank=True)
    link = models.TextField(blank=True)  



    # Для 8 лабы 
    
    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'price': self.price,
    #         'description': self.description,
    #         'count': self.count,
    #         'is_active': self.is_active,
    #         'rating': self.rating,
    #         'likes': self.likes,
    #         'image': self.image,
    #         'link': self.link
    #     }

    def __str__(self):
        return self.name