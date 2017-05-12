# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from datetime import datetime
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
    visit_date = params[u'visit_date']
    pdb.set_trace()
    Visit.objects.create(user=request.user, 
                         coffee_shop=coffee_shop, 
                         status='visited', 
                         date=datetime())
    return HttpResponse( json.dump({'message': 'visit created'}) )
  return render(request, 'dashboard.html')
