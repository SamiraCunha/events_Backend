from django.db import models
from django.contrib.auth.models import User
#Atencao mudar shaper=modelador para moderator=moderador
class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Organizer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    events = models.ManyToManyField('Event', related_name='organizers')

    def __str__(self):
        return self.user.username  
    
class Participant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    registered_events = models.ManyToManyField('Event', related_name='participants')

    def __str__(self):
        return self.user.username
       
class Registration(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    participant = models.ForeignKey('Participant', on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.participant.name} inscrito em {self.event.title}'
    

