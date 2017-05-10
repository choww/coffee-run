from django.conf.urls import url
from coffeerun.coffeeshop import views as shop_view

urlpatterns = [
  url(r'^dashboard/', shop_view.dashboard, name='dashboard'),
]
