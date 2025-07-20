from rest_framework import serializers
from .models import Problems

# create a serializer class
class ProblemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Problems
        fields = ['id', 'contestId', 'index', 'name', 'rating', 'tags'] 
