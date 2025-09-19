from django.contrib import admin
from django.utils.html import mark_safe

from .models import Artwork, ArtworkImage

# Register your models here.


class ArtworkImageInline(admin.TabularInline):
    model = ArtworkImage
    extra = 1
    fields = ("image", "alt_text", "preview")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="height:80px;border-radius:6px;" />')
        return "—"
    preview.short_description = "Preview"


@admin.register(Artwork)
class ArtworkAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "sold_out",
                    "created_at", "thumb")
    list_filter = ("sold_out", "created_at")
    search_fields = ("title", "description", "slug")
    readonly_fields = ("created_at", "thumb")
    inlines = [ArtworkImageInline]
    fieldsets = (
        (None, {
            "fields": ("title", "slug", "description")
        }),
        ("Media", {
            "fields": ("hero_image", "thumb")
        }),
        ("Details", {
            "fields": (("width_cm", "height_cm"), "price", "sold_out")
        }),
        ("Meta", {
            "fields": ("created_at",),
        }),
    )

    def thumb(self, obj):
        if obj.hero_image:
            return mark_safe(f'<img src="{obj.hero_image.url}" style="height:80px;border-radius:6px;" />')
        return "—"
    thumb.short_description = "Thumbnail"


@admin.register(ArtworkImage)
class ArtworkImageAdmin(admin.ModelAdmin):
    list_display = ("artwork", "alt_text", "preview", "id")
    search_fields = ("artwork__title", "alt_text")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="height:80px;border-radius:6px;" />')
        return "—"
    preview.short_description = "Preview"
