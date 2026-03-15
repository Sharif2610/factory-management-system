from django.urls import path
from . views import login_user
from . import views
urlpatterns=[
    path('login/',login_user,name='login'),
    path('list/',views.factory_list,name='factory_list'),
    path('update_fact/<int:id>/',views.update_fact,name='update'),
]