import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin=auto["vin"],
            defaults={"vin": auto["vin"]},
        )

def poll(repeat = True):
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here
            get_automobiles()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        if (not repeat):
            break
        time.sleep(2)


if __name__ == "__main__":
    poll()
