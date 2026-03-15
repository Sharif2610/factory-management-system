from django.shortcuts import render,get_object_or_404
from . models import Factory
from . serializers import FactorySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,\
HTTP_204_NO_CONTENT
from django.contrib.auth import authenticate
from rest_framework.pagination import PageNumberPagination
# Create your views here.
"""{
"username" : "M bharat",
"password" : "mbharat"
}"""
@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username,password=password)
    if user is not None:
        return Response({'message': 'Login Successfull!'})
    else:
        return Response({'error': 'Invalid username or password.'},status=400)
@api_view(['GET','POST'])
def factory_list(request):
    if request.method == 'GET':
        """factory = Factory.objects.all()
        serializer = FactorySerializer(factory,many=True)
        return Response(serializer.data)"""
        paginator = PageNumberPagination()
        paginator.page_size = 4
        factory = paginator.paginate_queryset(Factory.objects.all(),request)
        return paginator.get_paginated_response(FactorySerializer(factory,many=True).data)
    elif request.method == 'POST':
        serializer = FactorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=HTTP_201_CREATED)
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
@api_view(['GET','PUT','DELETE'])
def update_fact(request,id):
    factory = get_object_or_404(Factory,id=id)
    if request.method == 'GET':
        serializer = FactorySerializer(factory)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FactorySerializer(factory,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=HTTP_201_CREATED)
        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        factory.delete()
        return Response(status=HTTP_204_NO_CONTENT)
