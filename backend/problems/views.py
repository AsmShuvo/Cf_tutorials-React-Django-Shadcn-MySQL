from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProblemsSerializer
from .models import Problems

class ProblemsView(viewsets.ModelViewSet):
    serializer_class = ProblemsSerializer
    queryset = Problems.objects.all()