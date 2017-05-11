# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .forms import CoffeeShopForm
import json

def dashboard(request):
  if request.method == 'POST': 
    params = json.loads( unicode(request.body) )
  return render(request, 'dashboard.html')
