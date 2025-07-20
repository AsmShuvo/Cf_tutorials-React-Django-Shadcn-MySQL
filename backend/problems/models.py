from django.db import models

# Create your models here.
class Problems(models.Model):
    contestId = models.IntegerField()
    index = models.CharField(max_length=3)
    name = models.CharField(max_length=50) 
    rating = models.IntegerField(null=True, blank=True)
    tags = models.JSONField()
    
    def __str__(self):
        return f"{self.contestId}{self.index}: {self.name}"