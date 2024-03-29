const PLACES_DATA = [
    {
      title: "House in Fruitland",
      description: "Where it all began. Downsized a lot of our stuff, sold our house and bought a truck and a travel trailer.",
      position: {
        lat: 44.00509849151154,
        lng: -116.9263177425554
      }
    },
    {
      title: "Family in Boise, Idaho",
      description: "Stayed for a week or so.",
      position: {
        lat: 43.63911174529648,
        lng: -116.3202078229578
      },
      id: 2
    },
    {
      title: "Family in Meridian, Idaho",
      description: "Stayed for a week or so.",
      position: {
        lat: 43.630560982196236,
        lng: -116.37941943369064
      },
      id: 3
    },
    {
      title: "Grayback Gulch",
      description: "Our first foray into the wild! Only stayed for only a night or two.",
      position: {
        lat: 43.807102568269464,
        lng: -115.86627890376614
      },
      id: 4
    },
    {
      title: "Midvale Rest Area",
      description: "Stayed here for the night to wait out the storm. Our first stay at a rest stop.",
      position: {
        lat: 44.44529891071935,
        lng: -116.80051431679881
      },
      id: 5
    },
    {
      title: "Northwest Passage Campground",
      description: "Stayed here for about a week. Played in the river and taught our dog how to swim!",
      position: {
        lat: 45.007169792402046,
        lng: -116.06220889966332
      },
      id: 6
    },
    {
      title: "Union Creek Campground",
      description: "Stayed here for several weeks, including over 4th of July. Family got sick. Lake was really low and water cloudy.",
      position: {
        lat: 44.68701707567028,
        lng: -118.02924229725718
      },
      id: 7
    },
    {
      title: "Emigrant Springs",
      description: "Stayed here for a couple weeks. Really awesome hiking trails, but the campground was right next to the freeway.",
      position: {
        lat: 45.53977621804201,
        lng: -118.46062594475045
      },
      id: 8
    },
    {
      title: "Winchester Lake",
      description: "Stayed here for several days on two occasions. Water was really murky and while trying to swim, our oldest cut her leg on a rock badly enough to need stitches.",
      position: {
        lat: 46.23571369432702,
        lng: -116.62462277675628
      },
      id: 9
    },
    {
      title: "Huckleberry Campground",
      description: "Stayed here for a couple of weeks. Cliff-jumping and playing in the river (very clear).",
      position: {
        lat: 47.268679345284966,
        lng: -116.08602271230386
      },
      id: 10
    },
    {
      title: "Homestake",
      description: "Stayed here for a couple of weeks. Really large rock formations and awesome off-grid potential. Our first site was practically carpeted with nails, which we tried to clean up with magnets. Second site had a herd of cows wander through, until the dog helped chase them off. Good boy :)",
      position: {
        lat: 45.92142455615054,
        lng: -112.38123315381695
      },
      id: 11
    },
    {
      title: "Farewell Bend",
      description: "Stayed here for entirely too long, waiting for our youngest son to have a medical procedure. River level was low and water was cloudy. Kids caught some toads and a snake.",
      position: {
        lat: 44.30802421399651,
        lng: -117.22274740550698
      },
      id: 12
    },
    {
      title: "Bully Creek Reservoir",
      description: "Stayed here for a few days, in-between stays at Farewell Bend. Lots of dead fish, less-than-tidy bathrooms.",
      position: {
        lat: 44.02411920424808,
        lng: -117.40291849408618
      },
      id: 13
    },
    {
      title: "Viento State Park",
      description: "Stayed for three nights. Went out and visited waterfalls, a fish hatchery, and watched people kite surfing.",
      position: {
        lat: 45.6980324077833,
        lng: -121.66620388745987
      },
      id: 14
    },
    {
      title: "Hudson Parcher County Parker",
      description: "Stayed about a week. Really cool campsite, but the bathrooms were rather sketchy.",
      position: {
        lat: 46.09119145784024,
        lng: -122.99723152789784
      },
      id: 15
    },
    {
      title: "Boiler Bay State Scenic Viewpoint",
      description: "First night on the coast. Wind shook the trailer the entire night and we were worried about getting kicked out (signs said no overnight). Next morning there were at least a dozen other vehicles parked there with us.",
      position: {
        lat: 44.82886202812276,
        lng: -124.0653124134727
      },
      id: 16
    },
    {
      title: "Bullards Beach Campground",
      description: "Stayed here for a week or so. Beach was really cool, but not very close. Had to either drive or take a really long walk down a very sandy trail. Restrooms were surrounded by a maze of thickets.",
      position: {
        lat: 43.155287924960646,
        lng: -124.39784503560789
      },
      id: 17
    },
    {
      title: "Grassy Flat Free Camping",
      description: "Stayed here one night. Large open area situated above the valley.",
      position: {
        lat: 41.8558102570391,
        lng: -123.88791193416847
      },
      id: 18
    },
    {
      title: "Valley of the Rogue State Park",
      description: "Stayed here a week or so. Really awesome trails along the river, but the camp sites tended to be a bit on the narrow side.",
      position: {
        lat: 42.40806564689148,
        lng: -123.14355675831095
      },
      id: 19
    },
    {
      title: "Donner Pass Rest Area",
      description: "Stayed here one night.",
      position: {
        lat: 39.341177028744625,
        lng: -120.33989878791249
      },
      id: 20
    },
    {
      title: "Water Canyon",
      description: "Stayed four nights.",
      position: {
        lat: 40.92428959883485,
        lng: -117.66368082118387
      },
      id: 21
    },
    {
      title: "Travertine Hot Springs",
      description: "Stayed here one night.",
      position: {
        lat: 38.254410965667844,
        lng: -119.21018528071916
      },
      id: 22
    },
    {
      id: 23,
      title: "Lovell Canyon",
      description: "First foray into the desert! Stayed for two weeks. Hiked to the top of a nearby plateau.",
      position: {
        lat: 36.05933855378444,
        lng: -115.56019838263089
      }
    },
    {
      id: 24,
      title: "Hurricane BLM",
      description: "Stayed here on a couple of occasions. Really cool slot canyons closer to the river.",
      position: {
        lat: 37.20605916758212,
        lng: -113.24054369268012
      }
    },
    {
      id: 25,
      title: "Hurricane BLM Part 2",
      description: "Stayed around here on several occasions. Hiked up and down canyons, explored all around.",
      position: {
        lat: 37.186704304465316,
        lng: -113.22407530974898
      }
    },
    {
      id: 26,
      title: "Gooseberry Mesa",
      description: "One of our most adventurous locations. Road was rough, really hard to get trailer parked where we wanted it, but the views were AMAZING. Hiked 4 or 5 miles to the westernmost point of the mesa.",
      position: {
        lat: 37.155348921360435,
        lng: -113.16897861258387
      }
    },
    {
      id: 27,
      title: "Snaggletooth Rocks",
      description: "Stayed here on multiple occasions. Nice off-grid camping, spent a lot of time exploring the rocks.",
      position: {
        lat: 34.59229698276054,
        lng: -114.63747668493534
      }
    },
    {
      id: 28,
      title: "Lake Havasu Arizona Trust",
      description: "Stayed here for a few days. Really rocky, not a lot to do.",
      position: {
        lat: 34.33479181118074,
        lng: -114.13615654242652
      }
    },
    {
      id: 29,
      title: "Cattail Cove State Park",
      description: "Stayed here on several occasions. Really nice campground, cool trails, nice beach, really cool dog park/beach (with a stick-lending-library!)",
      position: {
        lat: 34.35249947165182,
        lng: -114.16878309679062
      }
    },
    {
      id: 30,
      title: "Williams Forest Service",
      description: "Stayed here for a couple weeks. Fairly remote, lots of firewood.",
      position: {
        lat: 35.20163020787149,
        lng: -112.26629673001624
      }
    },
    {
      id: 31,
      title: "Free Camping Outside of Grand Canyon",
      description: "Stayed here for less than a week. Very cold. Burnt chicken.",
      position: {
        lat: 35.9524238000561,
        lng: -111.95532348141064
      }
    },
    {
      id: 32,
      title: "Picacho Peak State Park",
      description: "Stayed here for two nights. Interesting playground, didn't get a chance to hike the peak.",
      position: {
        lat: 32.65387298440808,
        lng: -111.41829878956536
      }
    },
    {
      id: 33,
      title: "Indian Bread Rocks",
      description: "Rocks were really interesting, lots of cool caves etc. Came across a big rattlesnake and decided to leave.",
      position: {
        lat: 32.24356646746465,
        lng: -109.51320845975981
      }
    },
    {
      id: 34,
      title: "Pancho Villa State Park",
      description: "Stayed here two nights. Interesting history but not a lot to do.",
      position: {
        lat: 31.824457778293784,
        lng: -107.64044700319059
      }
    },
    {
      id: 35,
      title: "Elephant Butte Lake State Park",
      description: "Stayed here for less than a week. Not very warm. Found an abandoned dog on the beach.",
      position: {
        lat: 33.193689539066945,
        lng: -107.20545476277857
      }
    },
    {
      id: 36,
      title: "Baca Campground",
      description: "Stayed here one night. Very cold.",
      position: {
        lat: 33.539495206446716,
        lng: -105.35924712459932
      }
    },
    {
      id: 37,
      title: "Lake Colorado City",
      description: "Stayed here for several nights. Lots of thorns in the grass. Algae blooms in the lake.",
      position: {
        lat: 32.32268163938761,
        lng: -100.93111231423994
      }
    },
    {
      id: 38,
      title: "Choke Canyon State Park",
      description: "Only stayed here one night. Sign that read \"Alligators Exist In This Park.\"",
      position: {
        lat: 28.489385369712554,
        lng: -98.34380199908794
      }
    },
    {
      id: 39,
      title: "Magnolia Beach RV Resort",
      description: "Stayed here for a couple of weeks. Went to the beach (when it wasn't raining). Empty lot behind flooded during ice-storm, water came within ten feet of trailer.",
      position: {
        lat: 28.55274941247859,
        lng: -96.54501595488505
      }
    },
    {
      id: 40,
      title: "Rockdale Walmart",
      description: "Stayed here for a night. Played frisbee with dog on the lawn.",
      position: {
        lat: 30.64312051057803,
        lng: -97.0333112652354
      }
    },
    {
      id: 41,
      title: "Cedar Hill State Park",
      description: "Stayed here a couple of weeks. Awesome camp ground. Cool hiking trails. Went kayaking on the lake but it was really windy.",
      position: {
        lat: 32.636326588044106,
        lng: -96.97628045200463
      }
    },
    {
      id: 42,
      title: "Ray Roberts Lake State Park",
      description: "Stayed here a couple of weeks. Hiked all over. Went kayaking in the lake. Awesome campground, really nice facilities.",
      position: {
        lat: 33.386133155774644,
        lng: -97.02705964940849
      }
    },
    {
      id: 43,
      title: "Lake Mineral Wells State Park",
      description: "Stayed here for a week. Went kayaking out on the lake and explored all around.",
      position: {
        lat: 32.827695683672225,
        lng: -98.03586103520085
      }
    },
    {
      id: 44,
      title: "Family in Tooele",
      description: "Stayed with family for about 8 months. Bought and converted a 40 ft school bus, in between working on farm and helping to re-roof house. Raised chickens, rode horses, did farm stuff.",
      position: {
        lat: 40.51875384550375,
        lng: -112.31190371993169
      }
    },
    {
      id: 45,
      title: "Balanced Rock Park",
      description: "Stayed here for a week. Took our kayaks way up the stream. Really cool place, if you have watercraft. Grassy lawn and fresh water, lots of mosquitoes.",
      position: {
        lat: 42.53905250242965,
        lng: -114.95174892781662
      }
    },
    {
      id: 46,
      title: "Littlefield BLM",
      description: "Stayed here for a couple weeks. Not a lot to do, but had the whole place mostly to ourselves. Lot of spent bullet casings, clay pidgins, etc. Found an old bayonet in the dirt.",
      position: {
        lat: 36.96028385584031,
        lng: -113.63005774928416
      }
    },
    {
      id: 47,
      title: "BLM Near Mesquite NV",
      description: "Stayed here a week or so. Really awesome view, but hard to get down to the river. Really rocky ground (hard for dog to run).",
      position: {
        lat: 36.82543673275529,
        lng: -113.99429542051058
      }
    }
  ]

  export default PLACES_DATA;