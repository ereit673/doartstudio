from rest_framework import serializers

from catalog.models import Artwork, ArtworkImage


class ArtworkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtworkImage
        fields = ['id', 'image', 'alt_text']


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = ["id", "title", "slug", "price", "sold_out",
                  "description", "created_at", "hero_image",
                  "width_cm", "height_cm", "images"]
