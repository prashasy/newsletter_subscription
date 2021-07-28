from rest_framework import serializers
from subscriptionsAPI.models import Subscription

#Subscription Serializer
class SubscriptionSerializer(serializers.ModelSerializer):
  class Meta:
    model =  Subscription
    fields = '__all__'