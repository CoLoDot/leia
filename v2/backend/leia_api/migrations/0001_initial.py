# Generated by Django 3.0.5 on 2020-04-05 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Taxon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_id', models.CharField(default='', max_length=1000)),
                ('binomial_name', models.CharField(default='', max_length=100)),
                ('common_name', models.CharField(default='', max_length=100)),
                ('taxon_superior', models.CharField(default='', max_length=100)),
                ('taxonomic_rank', models.CharField(default='', max_length=100)),
                ('endemic_of', models.CharField(default='', max_length=100)),
                ('picture', models.CharField(default='', max_length=1000)),
            ],
        ),
    ]
