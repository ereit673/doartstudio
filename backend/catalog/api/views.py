from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination

from catalog.models import Artwork
from .serializers import ArtworkSerializer

# Create your views here.


class SmallPagination(PageNumberPagination):
    page_size = 12


class ArtworkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = SmallPagination
