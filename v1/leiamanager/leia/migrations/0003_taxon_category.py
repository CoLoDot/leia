# Generated by Django 3.0.3 on 2020-03-22 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leia', '0002_auto_20200322_1742'),
    ]

    operations = [
        migrations.AddField(
            model_name='taxon',
            name='category',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]