from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render
from .serializers import EventSerializer, OrganizerSerializer, ParticipantSerializer, RegistrationSerializer
from .models import Event, Organizer, Participant, Registration

# Create your views here.
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    
    @api_view(['GET'])
    def showSingleEvent(request, pk):

     event = Event.objects.get(id=pk)
     serilizer = EventSerializer(event, many=False)
     return Response(serilizer.data)


class OrganizerView(viewsets.ModelViewSet):
    serializer_class = OrganizerSerializer
    queryset = Organizer.objects.all()
    
class ParticipantView(viewsets.ModelViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()
    
class RegistrationView(viewsets.ModelViewSet):
    serializer_class = RegistrationSerializer
    queryset = Registration.objects.all()
    
 