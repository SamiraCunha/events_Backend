from django.urls import path, include

from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from events import views


router = routers.DefaultRouter()
router.register(r"event",views.EventView,"events")
router.register(r"organizer",views.OrganizerView,"events")
router.register(r"participant",views.ParticipantView,"events")
router.register(r"registration",views.RegistrationView,"events")
router.register(r"speakers",views.SpeakerView,"events")

urlpatterns = [
    path('api/v2/', include(router.urls)),
    path('doc/',include_docs_urls(title="Events_API"))
]
