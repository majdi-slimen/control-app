import subprocess
import platform
import datetime
from time import gmtime, strftime

#from sys import platform
import paramiko
from django.http import JsonResponse,HttpResponse
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import os
from .models import Equipement, Panne, Technicien
from .forms import EquipementForm, PanneForm , TechnicienForm
from .serializers import EquipementSerializer ,PanneSerializer, TechnicienSerializer
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.utils import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.



def default_map(request):
    # TODO: move this token to Django settings from an environment variable
    # found in the Mapbox account settings and getting started instructions
    # see https://www.mapbox.com/account/ under the "Access tokens" section
    mapbox_access_token = 'pk.my_mapbox_access_token'
    return render(request, 'default.html',
                  { 'mapbox_access_token': mapbox_access_token })
def equip(request):
    if request.method == "POST":
        form = EquipementForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('/equips/show')
            except:
                pass
    else:
        form = EquipementForm()
    return render(request,'index.html',{'form':form})

def show(request):
   equipements = Equipement.objects.all()
   return render(request,"show.html",{'equipements': equipements})

def update(request, id):
    equipement = Equipement.objects.get(id=id)
    form = EquipementForm(request.POST, instance = equipement)
    if form.is_valid():
        form.save()
        return redirect("/equips/show")
    return render(request, 'edit.html', {'equipement': equipement})

def destroy( request, id):
    equipement = Equipement.objects.get(id=id)
    equipement.delete()
    return redirect("/equips/show")

# class panne---------------------------------------------------------------------------------------------------------
def panne(request):
    if request.method == "POST":
        form = PanneForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('/equips/show_panne')
            except:
                pass
    else:
        form = PanneForm()
    return render(request,'panne_index.html',{'form':form})

def show_panne(request):
    pannes = Panne.objects.all()
    return render(request,"show_panne.html",{'pannes': pannes})

def update_panne(request, id):
    panne = Panne.objects.get(id=id)
    form = PanneForm(request.POST, instance = panne)
    if form.is_valid():
        form.save()
        return redirect("/equips/show_panne")
    return render(request, 'edit_panne.html', {'panne': panne})

def destroy_panne(request, id):
    panne = Panne.objects.get(id=id)
    panne.delete()
    return redirect("/equips/show_panne")

#class technicien -----------------------------------------------------------------------------------------------------

def technicien(request):
    if request.method == "POST":
        form = TechnicienForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('/equips/show_technicien')
            except:
                pass
    else:
        form = TechnicienForm()
    return render(request,'technicien_index.html',{'form':form})

def show_technicien(request):
    techniciens = Technicien.objects.all()
    return render(request,"show_technicien.html",{'techniciens': techniciens})
def update_technicien(request, id):
    technicien = Technicien.objects.get(id=id)
    form = TechnicienForm(request.POST, instance = technicien)
    if form.is_valid():
        form.save()
        return redirect("/equips/show_technicien")
    return render(request, 'edit_technicien.html', {'technicien': technicien})

def destroy_technicien(request,id):
    technicien = Technicien.objects.get(id=id)
    technicien.delete()
    return redirect("/equips/show_technicien")


def shut(request):
    hosts = Equipement.objects.all()
    ip = hosts

    for ip in hosts:


         if platform.system() == 'windows':
             ip = "\\" + ip.ip_add
             os.system("shutdown -s -f -t 40 -m \\" + ip)
         else:
            hostname = ip.ip_add
            username = "useradm"
            password = "123"
            cmd = 'echo 123 | sudo -S  reboot '
            print(hostname)
         try:
            ssh = paramiko.SSHClient()
            ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            ssh.connect(hostname, username=username, password=password)
            print("Connected to %s" % hostname)
         except paramiko.AuthenticationException:
            print("Failed to connect to %s due to wrong username/password" % hostname)
            exit(1)
         # except Exception as e:
         #    print(e.message)
         #    exit(2)
         try:
            stdin, stdout, stderr = ssh.exec_command(cmd)
         except Exception as e:
            print(e.message)

            err = ''.join(stderr.readlines())
            out = ''.join(stdout.readlines())
            final_output = str(out) + str(err)
            print(final_output)
         break
    #return redirect('shut.html')
    #return render(request,'shut.html')


    #return redirect("/equips/show_technicien")
#-------------------------------
def id_get(self):
    return self.id
@api_view(['POST'])
def shutdown(x1):
    x = json.loads(x1.body)
    y = str(x * 100)
    hosts = Equipement.objects.all()
    ip = hosts

    for ip in hosts:
      #  print('')

        # reponse = os.system('ping ' + ip)
       # result = subprocess.call(['ping', '-n', '2', '-w', '300', ip.ip_add])
       #  if not result:
       #      if platform.system() == 'windows':
       #          ip = "\\" + ip.ip_add
       #          os.system("shutdown -s -f -t 30 -m \\" + ip)
        if 0==0:
            hostname = ip.ip_add
            username = "useradm"
            password = "123"
            cmd = 'echo 123 | sudo -S  reboot '
            print(hostname)
        try:
            ssh = paramiko.SSHClient()
            ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            ssh.connect(hostname, username=username, password=password)
            print("Connected to %s" % hostname)
        except paramiko.AuthenticationException:
            print("Failed to connect to %s due to wrong username/password" % hostname)
            exit(1)
        # except Exception as e:
        #     print(e.message)
        #     exit(2)
        try:
            stdin, stdout, stderr = ssh.exec_command(cmd)
        except Exception as e:
            print(e.message)

        err = ''.join(stderr.readlines())
        out = ''.join(stdout.readlines())
        final_output = str(out) + str(err)
        print(final_output)
        break
    return JsonResponse('' + y, safe=False)


#-------------------------------


@api_view(['POST'])
def ping(x1):
    x = json.loads(x1.body)
    y = str(x*100)
    hosts = Equipement.objects.all()
    offline = []
    ch = ''
    for ip in hosts:
        result = subprocess.call(['ping', '-c', '3', '-n',ip.ip_add])
        if (result):
            offline.append(ip.ip_add)

            ip.etat = 'not active'
            ip.save()
            print(ip, 'offline')
            ch = ch  + ip.ip_add + '||||'


        else:
            ip.etat = 'active'
            ip.save()

    import smtplib  ## Importation du module
    serveur = smtplib.SMTP('smtp.gmail.com',
                           587)  ## Connexion au serveur sortant (en précisant son nom et son port)
    serveur.starttls()  ## Spécification de la sécurisation
    serveur.login("fathitav44@gmail.com", "fathiachouradmin")  ## Authentification
    message = ch   + '  are down'  ## Message à envoyer
    serveur.sendmail("fathitav44@gmail.com", "fathitav44@gmail.com", message)  ## Envoie du message
    serveur.quit()  ## Déconnexion du serveur

    return JsonResponse('rsult'+y, safe=False)
def ping2(request):
    hosts = Equipement.objects.all()
    offline = []
    ch = ''
    for ip in hosts:
        result = subprocess.call(['ping', '-c', '3', '-n', ip.ip_add])
        if (result):
            offline.append(ip.ip_add)

            ip.etat = 'not active'
            ip.save()
            print(ip, 'offline')
            ch = ch  + ip.ip_add + '||||'


        else:
            ip.etat = 'active'
            ip.save()

    import smtplib  ## Importation du module
    serveur = smtplib.SMTP('smtp.gmail.com',
                           587)  ## Connexion au serveur sortant (en précisant son nom et son port)
    serveur.starttls()  ## Spécification de la sécurisation
    serveur.login("fathitav44@gmail.com", "fathiachouradmin")  ## Authentification
    message = ch   + '  are down'  ## Message à envoyer
    serveur.sendmail("fathitav44@gmail.com", "fathitav44@gmail.com", message)  ## Envoie du message
    serveur.quit()  ## Déconnexion du serveur

    return render(request,'ping.html',{'offline': offline})

#------------------------------

class EquipementViewSet(viewsets.ModelViewSet):
    queryset = Equipement.objects.all()
    serializer_class = EquipementSerializer

class PanneViewSet(viewsets.ModelViewSet):
    queryset = Panne.objects.all()
    serializer_class = PanneSerializer

class TechnicienViewSet(viewsets.ModelViewSet):
    queryset = Technicien.objects.all()
    serializer_class = TechnicienSerializer
@csrf_exempt
def equip_list(request):
    #get all
    if request.method == 'GET':
        equips = Equipement.objects.all()
        equips_serializer = EquipementSerializer(equips,many=True)
        return JsonResponse(equips_serializer.data,safe=False)
    #ADD ONE
    if request.method == 'POST':
        equip_data = JSONParser().parse(request)
        equip_serializer = EquipementSerializer(data=equip_data)
        if equip_serializer.is_valid():
            equip_serializer.save()
            return JsonResponse(equip_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(equip_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #DELETE ALL
    if request.method == 'DELETE':
        Equipement.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def equip_detail(request,pk):
    try:
        equip = Equipement.objects.get(pk=pk)
    except Equipement.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    #retrive one equipement
    if request.method == 'GET':
            equip_serializer = EquipementSerializer(equip)
            return JsonResponse(equip_serializer.data)
    #update one equipement
    if request.method == 'PUT':
            equip_data = JSONParser().parse(request)
            equip_serializer = EquipementSerializer(equip,data=equip_data)
            if equip_serializer.is_valid():
                equip_serializer.save()
                return  JsonResponse(equip_serializer.data)
            return JsonResponse(equip_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #delete one equipement
    if request.method == 'DELETE':
            equip.delete()
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def technicien_list(request):
    #get all
    if request.method == 'GET':
        techniciens = Technicien.objects.all()
        techniciens_serializer = TechnicienSerializer(techniciens,many=True)
        return JsonResponse(techniciens_serializer.data,safe=False)
    #ADD ONE
    if request.method == 'POST':
        technicien_data = JSONParser().parse(request)
        technicien_serializer = TechnicienSerializer(data=technicien_data)
        if technicien_serializer.is_valid():
            technicien_serializer.save()
            return JsonResponse(technicien_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(technicien_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #DELETE ALL
    if request.method == 'DELETE':
        Technicien.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def technicien_detail(request,pk):
    try:
        technicien = Technicien.objects.get(pk=pk)
    except Technicien.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    #retrive one technicien
    if request.method == 'GET':
            technicien_serializer = TechnicienSerializer(technicien)
            return JsonResponse(technicien_serializer.data)
    #update one technicien
    if request.method == 'PUT':
            technicien_data = JSONParser().parse(request)
            technicien_serializer = TechnicienSerializer(technicien,data=technicien_data)
            if technicien_serializer.is_valid():
                technicien_serializer.save()
                return  JsonResponse(technicien_serializer.data)
            return JsonResponse(technicien_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #delete one technicien
    if request.method == 'DELETE':
            technicien.delete()
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def panne_list(request):
    #get all
    if request.method == 'GET':
        pannes = Panne.objects.all()
        pannes_serializer = PanneSerializer(pannes,many=True)
        return JsonResponse(pannes_serializer.data,safe=False)
    #ADD ONE
    if request.method == 'POST':
        panne_data = JSONParser().parse(request)
        panne_serializer = PanneSerializer(data=panne_data)
        if panne_serializer.is_valid():
            panne_serializer.save()
            return JsonResponse(panne_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(panne_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #DELETE ALL
    if request.method == 'DELETE':
        Panne.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def panne_detail(request,pk):
    try:
        panne = Panne.objects.get(pk=pk)
    except Panne.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    #retrive one panne
    if request.method == 'GET':
            panne_serializer = PanneSerializer(panne)
            return JsonResponse(panne_serializer.data)
    #update one panne
    if request.method == 'PUT':
            panne_data = JSONParser().parse(request)
            panne_serializer = PanneSerializer(panne,data=panne_data)
            if panne_serializer.is_valid():
                panne_serializer.save()
                return JsonResponse(panne_serializer.data)
            return JsonResponse(panne_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #delete one panne
    if request.method == 'DELETE':
            panne.delete()
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)


# class ExampleView(APIView):
#     authentication_classes = [SessionAuthentication, BasicAuthentication]
#     permission_classes = [IsAuthenticated]
#
#     def get(self, request, format=None):
#         content = {
#             'user': unicode(request.user),  # `django.contrib.auth.User` instance.
#             'auth': unicode(request.auth),  # None
#         }
#         return Response(content)