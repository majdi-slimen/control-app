from django.db import models

# Create your models here.
class Equipement(models.Model):
    MONASTIR = 'MONASTIR'
    ENFIDHA = 'ENFIDHA'

    aireport = [
        (MONASTIR, 'monastir'),
        (ENFIDHA, 'enfidha'),
    ]
    ip_add = models.CharField(max_length=20)
    nom = models.CharField(max_length=30)
    emplacement = models.CharField(max_length=30)
    mac_add = models.CharField(max_length=30)
    etat = models.CharField(max_length=30)
    aeroport = models.CharField(max_length=30,choices=aireport,
        default=MONASTIR,)
    switch = models.CharField(max_length=30,default=0,unique=False)
    num_port = models.IntegerField(default=0)
    nbre_port = models.IntegerField(default=0)

    def ip_get(self):
        return self.ip_add

class Panne(models.Model):
    MAJDI = 'MAJDI'
    YASIN = 'YASIN'

    tech_list = [
        (MAJDI, 'majdi'),
        (YASIN, 'yasin'),
    ]
    nature = models.CharField(max_length=20)
    date_panne = models.CharField(max_length=50)
    date_reparation = models.CharField(max_length=50)
    technicien = models.CharField(max_length=30,choices=tech_list,
        default=MAJDI,)
    remarque = models.CharField(max_length=50,null=True)
    ip = models.CharField(max_length=20)
class Technicien(models.Model):
    nom = models.CharField(max_length=30)




#created_at = models.DateTimeField(auto_now_add=True)
    #class Meta: