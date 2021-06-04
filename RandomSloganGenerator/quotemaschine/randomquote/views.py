from django.shortcuts import render
from django.utils import timezone
from .models import Quote
import random




def fortune(request):
    #posts = Quote.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    #posts = Quote.objects.order_by('?').first()
    random_idx = random.randint(0, Quote.objects.count() - 1)
    posts = Quote.objects.all()[random_idx]
    return render(request, "randomquote/quotes.html",{'posts': posts})