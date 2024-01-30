from rest_framework import viewsets
from .serializers import EventSerializer, OrganizerSerializer, ParticipantSerializer, RegistrationSerializer,SpeakerSerializer
from .models import Event, Organizer, Participant, Registration, Speaker

# Create your views here.
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class OrganizerView(viewsets.ModelViewSet):
    serializer_class = OrganizerSerializer
    queryset = Organizer.objects.all()
    
class ParticipantView(viewsets.ModelViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()
    
class RegistrationView(viewsets.ModelViewSet):
    serializer_class = RegistrationSerializer
    queryset = Registration.objects.all()
    
    
class SpeakerView(viewsets.ModelViewSet):
    serializer_class = SpeakerSerializer
    queryset = Speaker.objects.all()
    