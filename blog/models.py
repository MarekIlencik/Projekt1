from django.db import models
from django.utils import timezone


class Post(models.Model):
# Tento řádek definuje náš model (Jedná se o objekt).
# class je speciální klíčové slovo, které říká, že definujeme objekt.
# Post je jméno našeho modelu, můžeme mu dát jiné jméno (ale musíme se
# vyvarovat speciálních znaků a bílých znaků). Název třídy by vždy měl začínat
# velkým písmenem.
# models. Model znamená, že Post je Django Model, takže Django ví, že by to #mělo být uloženo v databázi.
# Nyní definujeme vlastnosti – pole v taulce a jejich datové typy
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField() # ideální pro blog, jakkoliv dlouhý text
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
