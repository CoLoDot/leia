from leia_backend.settings.development import DEBUG, ALLOWED_HOSTS, DATABASES
from leia_backend.settings.production import INSTALLED_APPS, DEBUG as prod_debug
from leia_api.apps import LeiaApiConfig
from django.test import TestCase

class AppSettingsTestCase(TestCase):

    def test_dev_settings(self):
        assert DEBUG == True
        assert ALLOWED_HOSTS == ['backend', '0.0.0.0', '127.0.0.1']
        assert DATABASES == {
            'default': {
                'ENGINE': 'django.db.backends.postgresql',
                'NAME': 'postgres',
                'USER': 'postgres',
                'HOST': 'db',
                'PORT': 5432,
            }
        }

    def test_prod_settings(self):
        assert ("whitenoise.runserver_nostatic" in INSTALLED_APPS) == True
        assert prod_debug == False

    def test_api_name_config(self):
        assert LeiaApiConfig.name == 'leia_api'
    