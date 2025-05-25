from django.shortcuts import render
from django.views import View
import random
from .settings import ROBOT_NAMES, ROBOT_BIOS


class RobotsView(View):
    def get(self, request):
        selected_names = random.sample(ROBOT_NAMES, 10)
        selected_bios = random.sample(ROBOT_BIOS, 10)

        images = [
            {
                "url": f"https://robohash.org/blah-{i}-{name}.png",
                "name": name,
                "bio": bio,
            }
            for i, (name, bio) in enumerate(zip(selected_names, selected_bios))
        ]

        return render(request, "robots/index.html", {"images": images})
