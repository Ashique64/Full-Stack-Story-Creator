# Generated by Django 5.1 on 2024-08-25 08:10

import story_creator.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story_creator', '0005_alter_story_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='first_line',
            field=models.TextField(default=1, validators=[story_creator.models.validate_max_words]),
            preserve_default=False,
        ),
    ]
