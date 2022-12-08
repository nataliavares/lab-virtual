from django.db import models

class Task(models.Model):

    STATUS = (
        ('jogou','Jogou'),
        ('nao jogou','Nao Jogou'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    done = models.CharField(
        max_length = 9,
        choices=STATUS,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
