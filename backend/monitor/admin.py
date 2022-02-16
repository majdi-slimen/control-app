
# Register your models here.
from django.contrib import admin

from .models import Equipement,Panne,Technicien

@admin.register(Equipement)
class EquipementAdmin(admin.ModelAdmin):
    list_display = ['ip_add','nom','emplacement','mac_add','switch','num_port','nbre_port','etat','aeroport']
    list_filter = ['nom']
    search_fields = ['ip_add']
@admin.register(Panne)
class PanneAdmin(admin.ModelAdmin):
    list_display = ['nature','date_panne','date_reparation','technicien','remarque']
    list_filter = ['nature']
    search_fields = ['date_panne']
@admin.register(Technicien)
class TechnicienAdmin(admin.ModelAdmin):
    list_display = ['nom']
    list_filter = ['nom']
    search_fields = ['nom']

