from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    @action(detail=False, methods=['GET'])
    def by_tech(self, request):
        tech = request.query_params.get('tech', '')
        if tech:
            # Filter projects that have the specified tech in their tech_stack
            projects = Project.objects.filter(tech_stack__contains=[tech])
        else:
            projects = Project.objects.all()
        
        serializer = self.get_serializer(projects, many=True)
        return Response(serializer.data)
