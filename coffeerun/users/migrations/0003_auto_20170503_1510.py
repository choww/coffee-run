# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-03 22:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20170502_1603'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coffeeshop',
            name='users',
        ),
        migrations.RemoveField(
            model_name='visit',
            name='coffee_shop',
        ),
        migrations.RemoveField(
            model_name='visit',
            name='user',
        ),
        migrations.DeleteModel(
            name='CoffeeShop',
        ),
        migrations.DeleteModel(
            name='Visit',
        ),
    ]