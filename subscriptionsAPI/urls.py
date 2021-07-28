from rest_framework import routers
from .api import SubscriptionViewSet

router = routers.DefaultRouter()
router.register('api/subscriptions',SubscriptionViewSet,'subscriptions')

urlpatterns = router.urls