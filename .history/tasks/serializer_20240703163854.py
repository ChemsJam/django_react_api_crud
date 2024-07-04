from rest_framework import models
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields('id','title','description', 'done')
        fields = '__all__'
