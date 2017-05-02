from django.db import models

class User(models.Model):
  username = models.CharField(max_length=50)
  email = models.EmailField(max_length=255)
  signup_date = models.DateTimeField(auto_now_add=True)

class CoffeeShop(models.Model):
  users = models.ManyToManyField(User, through='Visit')
  name = models.CharField(max_length=255)
  neighborhood = models.CharField(max_length=200)
  address = models.CharField(max_length=255)
  city = models.CharField(max_length=255)
  
class Visit(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  coffee_shop = models.ForeignKey(CoffeeShop, on_delete=models.CASCADE)
  status = models.CharField(max_length=50)
  date = models.DateTimeField()
