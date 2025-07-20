from django.contrib import admin
from .models import Problems

class ProblemsAdmin(admin.ModelAdmin):
    list_display = ('contestId', 'index', 'name', 'rating', 'tags')

admin.site.register(Problems, ProblemsAdmin)
