from rest_framework import models

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # fields('id','title','description', 'done')
        fields = '__all__'
