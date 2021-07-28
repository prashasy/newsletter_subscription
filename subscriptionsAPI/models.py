from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)