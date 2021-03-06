from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView
from .users import urls as user_urls
from .coffeeshop import urls as shop_urls

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^', include(user_urls)),
  url(r'^', include(shop_urls)),
  url(r'^', include('django.contrib.auth.urls')),
  url(r'^$', TemplateView.as_view(template_name='index.html')),
] 
