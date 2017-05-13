# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from datetime import datetime
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import CoffeeShop, Visit
from .forms import CoffeeShopForm
import json, pdb

def dashboard(request):
  if request.method == 'POST': 
    params = json.loads(request.body)
    coffee_shop = CoffeeShop.objects.create(
      name=params[u'name'].encode('utf-8'),
      neighborhood=params[u'neighborhood'].encode('utf-8') )
    date_breakdown = params[u'visit_date'].encode('utf-8').split('-')
    date = [int(item) for item in date_breakdown]
    Visit.objects.create(user=request.user, 
                         coffee_shop=coffee_shop, 
                         status='visited',
                         date=datetime(date[0], date[1], date[2]))
    return JsonResponse({'message': 'success'})
  return render(request, 'dashboard.html')
