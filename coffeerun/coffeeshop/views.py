# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .forms import CoffeeShopForm

def dashboard(request):
  if request.method == 'POST': 
    form = CoffeeShopForm(request.POST)
    if form.is_valid():
      form.save()
      name = form.cleaned_data.get('name')
      visit_date = form.cleaned_data.get('visit_date') 
      CoffeeShop.objects.create(name=name)
  else:
    form = CoffeeShopForm()
  return render(request, 'dashboard.html', {'form': form})
