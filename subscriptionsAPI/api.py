from subscriptionsAPI.models import Subscription
from rest_framework import viewsets, permissions
from .serializers import SubscriptionSerializer

class SubscriptionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
