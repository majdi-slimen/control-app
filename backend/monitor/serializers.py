from rest_framework import serializers
from .models import Equipement , Panne, Technicien


class EquipementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Equipement
        fields = ( 'id',
                   'ip_add',
                   'nom',
                   'emplacement',
                   'mac_add',
                   'etat',
                   'aeroport',
                   'switch',
                   'num_port',
                   'nbre_port',
        )

class PanneSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Panne
        fields = ( 'id',
                   'ip',
                   'nature',
                   'date_panne',
                   'date_reparation',
                   'technicien',
                   'remarque',

        )

class TechnicienSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Technicien
        fields = ( 'id',
                   'nom',



        )