from django.conf.urls import url
from coffeerun.users import views as user_view

urlpatterns = [
  url(r'^signup/', user_view.signup, name='signup'),
]
