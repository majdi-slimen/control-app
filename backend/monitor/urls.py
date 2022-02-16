# from rest_framework import routers
from django.urls import path, include
from django.conf.urls import url
from . import views

urlpatterns = [
    # path('', include(router.urls)),
    # path('admin/', admin.site.urls),
    path('', views.equip_list),
    url(r'^(?P<pk>[0-9]+)$', views.equip_detail),
    path('map/', views.default_map, name="default"),

    path('pannes/', views.panne_list),
    url(r'^pannes/(?P<pk>[0-9]+)$', views.panne_detail),

    path('techniciens/', views.technicien_list),
    url(r'^techniciens/(?P<pk>[0-9]+)$', views.technicien_detail),

    url(r'^ping2/', views.ping2),
    url(r'^shut/', views.shut),

    url(r'^ping/', views.ping),
    path('api/', include('rest_framework.urls', namespace='rest_framework')),

    path('equip/', views.equip),
    path('show/', views.show),
    path('update/<int:id>', views.update),
    path('delete/<int:id>', views.destroy),
    path('ping/', views.ping),
    path('shutdown/', views.shutdown),

    path('panne/', views.panne),
    path('show_panne/', views.show_panne),
    path('update_panne/<int:id>', views.update_panne),
    path('delete_panne/<int:id>', views.destroy_panne),

    path('technicien/', views.technicien),
    path('show_technicien/', views.show_technicien),
    path('update_technicien/<int:id>', views.update_technicien),
    path('delete_technicien/<int:id>', views.destroy_technicien),

    # path(' GET/^(?P<pk>[0-9]+)$', views.equip_detail),

]
