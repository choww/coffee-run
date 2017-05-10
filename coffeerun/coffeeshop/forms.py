from django import forms

class CoffeeShopForm(forms.Form):
  name = forms.CharField(label='Name', max_length=255)
  visit_date = forms.DateField(label='Date visited')
