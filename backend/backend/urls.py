from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView # new
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here


urlpatterns = [

    path('admin/', admin.site.urls),
    path('equips/', include('monitor.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),  # new
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # <-- And here

]