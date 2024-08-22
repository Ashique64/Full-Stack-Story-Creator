# Generated by Django 5.1 on 2024-08-22 08:17

import story_creator.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story_creator', '0004_story_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='image',
            field=models.ImageField(upload_to='stories/images/', validators=[story_creator.models.validate_image_size, story_creator.models.validate_image_extension]),
        ),
    ]
