# Generated by Django 3.2.3 on 2021-06-04 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('randomquote', '0002_auto_20210604_1449'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='color',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='quote',
            name='parti',
            field=models.TextField(),
        ),
    ]