# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from coffeerun.users.forms import UserCreateForm

def signup(request):
  if request.method == 'POST':
    form = UserCreateForm(request.POST)
    if form.is_valid():
      form.save()
      username = form.cleaned_data.get('username')
      password = form.cleaned_data.get('password1')
      user = authenticate(username=username, password=password)
      login(request, user)
      return redirect('/')
  else:
    form = UserCreateForm()
  return render(request, 'signup.html', {'form': form})

def dashboard(request):
  return render(request, 'account/dashboard.html')
