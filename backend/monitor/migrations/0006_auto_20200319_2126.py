# Generated by Django 3.0.2 on 2020-03-19 19:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0005_technicien_cin'),
    ]

    operations = [
        migrations.RenameField(
            model_name='technicien',
            old_name='name',
            new_name='nom',
        ),
    ]
