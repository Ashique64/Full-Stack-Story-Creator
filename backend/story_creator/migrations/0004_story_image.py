# Generated by Django 5.1 on 2024-08-22 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story_creator', '0003_alter_contribution_story'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='story_images/'),
        ),
    ]
