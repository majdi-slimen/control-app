from django import forms
from .models import Equipement, Panne, Technicien
class EquipementForm(forms.ModelForm):
    class Meta:
        model = Equipement
        fields = '__all__'
class PanneForm(forms.ModelForm):
    class Meta:
        model = Panne
        fields = '__all__'

class TechnicienForm(forms.ModelForm):
    class Meta:
        model = Technicien
        fields = '__all__'