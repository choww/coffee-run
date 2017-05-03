from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView
from coffeerun.users import urls as user_urls

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^', include(user_urls)),
  url(r'^', include('django.contrib.auth.urls')),
  url(r'^$', TemplateView.as_view(template_name='index.html')),
] 

if settings.DEBUG:
  import debug_toolbar
  urlpatterns += (url(r'^__debug__/', include(debug_toolbar.urls)),)
