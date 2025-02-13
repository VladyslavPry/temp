from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'long_description', 
                'image', 'github_url', 'live_url', 'tech_stack',
                'created_at', 'updated_at']
