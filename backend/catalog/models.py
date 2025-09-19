from django.db import models
from django.utils.text import slugify

# Create your models here.


class Artwork(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=280, unique=True, blank=True)
    width_cm = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    height_cm = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sold_out = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    hero_image = models.ImageField(
        upload_to="artworks/", null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ArtworkImage(models.Model):
    artwork = models.ForeignKey(
        Artwork, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="artworks/")
    alt_text = models.CharField(max_length=140, blank=True)

    def __str__(self):
        return f"Image for {self.artwork.title} #{self.id}"
