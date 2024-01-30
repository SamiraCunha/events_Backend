from django.contrib import admin
from .models  import Event, Participant, Registration,Organizer,Speaker

# Register your models here.
admin.site.register(Event)
admin.site.register(Participant)
admin.site.register(Registration)
admin.site.register(Organizer)

admin.site.register(Speaker)
