const veiculos = [
  {
    nome: "Admiral",
    preco: "$50.00",
    imagem: "admiral.jpg"
  },
  {
    nome: "Alpha",
    preco: "$50.00",
    imagem: "alpha.jpg"
  },
  {
    nome: "Banshee",
    preco: "$50.00",
    imagem: "banshee.jpg"
  },
  {
    nome: "Blista Compact",
    preco: "$50.00",
    imagem: "blista_compact.jpg"
  },
  {
    "nome": "Bravura",
    "preco": "$50.00",
    "imagem": "bravura.jpg"
  },
  {
    "nome": "Broadway",
    "preco": "$50.00",
    "imagem": "broadway.jpg"
  },
  {
    "nome": "Buccaneer",
    "preco": "$50.00",
    "imagem": "buccaneer.jpg"
  },
  {
    "nome": "Buffalo",
    "preco": "$50.00",
    "imagem": "buffalo.jpg"
  },
  {
    "nome": "Bullet",
    "preco": "$50.00",
    "imagem": "bullet.jpg"
  },
  {
    "nome": "Cadrona",
    "preco": "$50.00",
    "imagem": "cadrona.jpg"
  },
  {
    "nome": "Cheetah",
    "preco": "$50.00",
    "imagem": "cheetah.jpg"
  },
  {
    "nome": "Clover",
    "preco": "$50.00",
    "imagem": "clover.jpg"
  },
  {
    "nome": "Club",
    "preco": "$50.00",
    "imagem": "club.jpg"
  },
  {
    "nome": "Comet",
    "preco": "$50.00",
    "imagem": "comet.jpg"
  },
  {
    "nome": "Elegant",
    "preco": "$50.00",
    "imagem": "elegant.jpg"
  },
  {
    "nome": "Elegy",
    "preco": "$50.00",
    "imagem": "elegy.jpg"
  },
  {
    "nome": "Emperor",
    "preco": "$50.00",
    "imagem": "emperor.jpg"
  },
  {
    "nome": "Esperanto",
    "preco": "$50.00",
    "imagem": "esperanto.jpg"
  },
  {
    "nome": "Euros",
    "preco": "$50.00",
    "imagem": "euros.jpg"
  },
  {
    "nome": "Flash",
    "preco": "$50.00",
    "imagem": "flash.jpg"
  },
  {
    "nome": "Fortune",
    "preco": "$50.00",
    "imagem": "fortune.jpg"
  },
  {
    "nome": "Glendale",
    "preco": "$50.00",
    "imagem": "glendale.jpg"
  },
  {
    "nome": "Greenwood",
    "preco": "$50.00",
    "imagem": "greenwood.jpg"
  },
  {
    "nome": "Hermes",
    "preco": "$50.00",
    "imagem": "hermes.jpg"
  },
  {
    "nome": "Hotknife",
    "preco": "$50.00",
    "imagem": "hotknife.jpg"
  },
  {
    "nome": "Hotring Racer",
    "preco": "$50.00",
    "imagem": "hotring_racer.jpg"
  },
  {
    "nome": "Hotring Racer A",
    "preco": "$50.00",
    "imagem": "hotring_racer_a.jpg"
  },
  {
    "nome": "Hotring Racer B",
    "preco": "$50.00",
    "imagem": "hotring_racer_b.jpg"
  },
  {
    "nome": "Hustler",
    "preco": "$50.00",
    "imagem": "hustler.jpg"
  },
  {
    "nome": "Infernus",
    "preco": "$50.00",
    "imagem": "infernus.jpg"
  },
  {
    "nome": "Intruder",
    "preco": "$50.00",
    "imagem": "intruder.jpg"
  },
  {
    "nome": "Jester",
    "preco": "$50.00",
    "imagem": "jester.jpg"
  },
  {
    "nome": "Landyalker",
    "preco": "$50.00",
    "imagem": "landyalker.jpg"
  },
  {
    "nome": "Majestic",
    "preco": "$50.00",
    "imagem": "majestic.jpg"
  },
  {
    "nome": "Manana",
    "preco": "$50.00",
    "imagem": "manana.jpg"
  },
  {
    "nome": "Merit",
    "preco": "$50.00",
    "imagem": "merit.jpg"
  },
  {
    "nome": "Mesa",
    "preco": "$50.00",
    "imagem": "mesa.jpg"
  },
  {
    "nome": "Nebula",
    "preco": "$50.00",
    "imagem": "nebula.jpg"
  },
  {
    "nome": "Oceanic",
    "preco": "$50.00",
    "imagem": "oceanic.jpg"
  },
  {
    "nome": "Perennial",
    "preco": "$50.00",
    "imagem": "perennial.jpg"
  },
  {
    "nome": "Phoenix",
    "preco": "$50.00",
    "imagem": "phoenix.jpg"
  },
  {
    "nome": "Picador",
    "preco": "$50.00",
    "imagem": "picador.jpg"
  },
  {
    "nome": "Premier",
    "preco": "$50.00",
    "imagem": "premier.jpg"
  },
  {
    "nome": "Previon",
    "preco": "$50.00",
    "imagem": "previon.jpg"
  },
  {
    "nome": "Primo",
    "preco": "$50.00",
    "imagem": "primo.jpg"
  },
  {
    "nome": "Regina",
    "preco": "$50.00",
    "imagem": "regina.jpg"
  },
  {
    "nome": "Remington",
    "preco": "$50.00",
    "imagem": "remington.jpg"
  },
  {
    "nome": "Romero",
    "preco": "$50.00",
    "imagem": "romero.jpg"
  },
  {
    "nome": "Sabre",
    "preco": "$50.00",
    "imagem": "sabre.jpg"
  },
  {
    "nome": "Savanna",
    "preco": "$50.00",
    "imagem": "savanna.jpg"
  },
  {
    "nome": "Sentinel",
    "preco": "$50.00",
    "imagem": "sentinel.jpg"
  },
  {
    "nome": "Slamvan",
    "preco": "$50.00",
    "imagem": "slamvan.jpg"
  },
  {
    "nome": "Solair",
    "preco": "$50.00",
    "imagem": "solair.jpg"
  },
  {
    "nome": "Stafford",
    "preco": "$50.00",
    "imagem": "stafford.jpg"
  },
  {
    "nome": "Stallion",
    "preco": "$50.00",
    "imagem": "stallion.jpg"
  },
  {
    "nome": "Stratum",
    "preco": "$50.00",
    "imagem": "stratum.jpg"
  },
  {
    "nome": "Stretch",
    "preco": "$50.00",
    "imagem": "stretch.jpg"
  },
  {
    "nome": "Sultan",
    "preco": "$50.00",
    "imagem": "sultan.jpg"
  },
  {
    "nome": "Sunrise",
    "preco": "$50.00",
    "imagem": "sunrise.jpg"
  },
  {
    "nome": "Super GT",
    "preco": "$50.00",
    "imagem": "super_gt.jpg"
  },
  {
    "nome": "Tahoma",
    "preco": "$50.00",
    "imagem": "tahoma.jpg"
  },
  {
    "nome": "Tampa",
    "preco": "$50.00",
    "imagem": "tampa.jpg"
  },
  {
    "nome": "Turismo",
    "preco": "$50.00",
    "imagem": "turismo.jpg"
  },
  {
    "nome": "Vincent",
    "preco": "$50.00",
    "imagem": "vincent.jpg"
  },
  {
    "nome": "Virgo",
    "preco": "$50.00",
    "imagem": "virgo.jpg"
  },
  {
    "nome": "Voodoo",
    "preco": "$50.00",
    "imagem": "voodoo.jpg"
  },
  {
    "nome": "Washington",
    "preco": "$50.00",
    "imagem": "washington.jpg"
  },
  {
    "nome": "Willard",
    "preco": "$50.00",
    "imagem": "willard.jpg"
  },
  {
    "nome": "Windsor",
    "preco": "$50.00",
    "imagem": "windsor.jpg"
  },
  {
    "nome": "Zr-350",
    "preco": "$50.00",
    "imagem": "zr_350.jpg"
  },
  {
    "nome": "Bobcat",
    "preco": "$50.00",
    "imagem": "bobcat.jpg"
  },
  {
    "nome": "Huntley",
    "preco": "$50.00",
    "imagem": "huntley.jpg"
  },
  {
    "nome": "Monster",
    "preco": "$50.00",
    "imagem": "monster.jpg"
  },
  {
    "nome": "Monster A",
    "preco": "$50.00",
    "imagem": "monster_a.jpg"
  },
  {
    "nome": "Monster B",
    "preco": "$50.00",
    "imagem": "monster_b.jpg"
  },
  {
    "nome": "Patriot",
    "preco": "$50.00",
    "imagem": "patriot.jpg"
  },
  {
    "nome": "Rancher",
    "preco": "$50.00",
    "imagem": "rancher.jpg"
  },
  {
    "nome": "Rancher Lure",
    "preco": "$50.00",
    "imagem": "rancher_lure.jpg"
  },
  {
    "nome": "Sandking",
    "preco": "$50.00",
    "imagem": "sandking.jpg"
  },
  {
    "nome": "Yosemite",
    "preco": "$50.00",
    "imagem": "yosemite.jpg"
  },
  {
    "nome": "BF-400",
    "preco": "$50.00",
    "imagem": "bf_400.jpg"
  },
  {
    "nome": "Bike",
    "preco": "$50.00",
    "imagem": "bike.jpg"
  },
  {
    "nome": "BMX",
    "preco": "$50.00",
    "imagem": "bmx.jpg"
  },
  {
    "nome": "Faggio",
    "preco": "$50.00",
    "imagem": "faggio.jpg"
  },
  {
    "nome": "FCR-900",
    "preco": "$50.00",
    "imagem": "fcr_900.jpg"
  },
  {
    "nome": "Freeway",
    "preco": "$50.00",
    "imagem": "freeway.jpg"
  },
  {
    "nome": "Mountain Bike",
    "preco": "$50.00",
    "imagem": "mountain_bike.jpg"
  },
  {
    "nome": "NRG-500",
    "preco": "$50.00",
    "imagem": "nrg_500.jpg"
  },
  {
    "nome": "PCJ-600",
    "preco": "$50.00",
    "imagem": "pcj_600.jpg"
  },
  {
    "nome": "Pizzaboy",
    "preco": "$50.00",
    "imagem": "pizzaboy.jpg"
  },
  {
    "nome": "Quad",
    "preco": "$50.00",
    "imagem": "quad.jpg"
  },
  {
    "nome": "Sanchez",
    "preco": "$50.00",
    "imagem": "sanchez.jpg"
  },
  {
    "nome": "Wayfarer",
    "preco": "$50.00",
    "imagem": "wayfarer.jpg"
  },
  {
    "nome": "Benson",
    "preco": "$50.00",
    "imagem": "benson.jpg"
  },
  {
    "nome": "Boxville",
    "preco": "$50.00",
    "imagem": "boxville.jpg"
  },
  {
    "nome": "Boxville Mission",
    "preco": "$50.00",
    "imagem": "boxville_mission.jpg"
  },
  {
    "nome": "Burrito",
    "preco": "$50.00",
    "imagem": "burrito.jpg"
  },
  {
    "nome": "Bus",
    "preco": "$50.00",
    "imagem": "bus.jpg"
  },
  {
    "nome": "Cabbie",
    "preco": "$50.00",
    "imagem": "cabbie.jpg"
  },
  {
    "nome": "Cement Truck",
    "preco": "$50.00",
    "imagem": "cement_truck.jpg"
  },
  {
    "nome": "Coach",
    "preco": "$50.00",
    "imagem": "coach.jpg"
  },
  {
    "nome": "DFT-30",
    "preco": "$50.00",
    "imagem": "dft_30.jpg"
  },
  {
    "nome": "Dozer",
    "preco": "$50.00",
    "imagem": "dozer.jpg"
  },
  {
    "nome": "Dumper",
    "preco": "$50.00",
    "imagem": "dumper.jpg"
  },
  {
    "nome": "Dune",
    "preco": "$50.00",
    "imagem": "dune.jpg"
  },
  {
    "nome": "Flatbed",
    "preco": "$50.00",
    "imagem": "flatbed.jpg"
  },
  {
    "nome": "Forklift",
    "preco": "$50.00",
    "imagem": "forklift.jpg"
  },
  {
    "nome": "Journey",
    "preco": "$50.00",
    "imagem": "journey.jpg"
  },
  {
    "nome": "Linerunner",
    "preco": "$50.00",
    "imagem": "linerunner.jpg"
  },
  {
    "nome": "Moonbeam",
    "preco": "$50.00",
    "imagem": "moonbeam.jpg"
  },
  {
    "nome": "Mr Whoopee",
    "preco": "$50.00",
    "imagem": "mr_whoopee.jpg"
  },
  {
    "nome": "Mule",
    "preco": "$50.00",
    "imagem": "mule.jpg"
  },
  {
    "nome": "Newsvan",
    "preco": "$50.00",
    "imagem": "newsvan.jpg"
  },
  {
    "nome": "Packer",
    "preco": "$50.00",
    "imagem": "packer.jpg"
  },
  {
    "nome": "Pony",
    "preco": "$50.00",
    "imagem": "pony.jpg"
  },
  {
    "nome": "Roadtrain",
    "preco": "$50.00",
    "imagem": "roadtrain.jpg"
  },
  {
    "nome": "Rumpo",
    "preco": "$50.00",
    "imagem": "rumpo.jpg"
  },
  {
    "nome": "Sadler",
    "preco": "$50.00",
    "imagem": "sadler.jpg"
  },
  {
    "nome": "Sadler Shit",
    "preco": "$50.00",
    "imagem": "sadler_shit.jpg"
  },
  {
    "nome": "Securicar",
    "preco": "$50.00",
    "imagem": "securicar.jpg"
  },
  {
    "nome": "Tanker",
    "preco": "$50.00",
    "imagem": "tanker.jpg"
  },
  {
    "nome": "Taxi",
    "preco": "$50.00",
    "imagem": "taxi.jpg"
  },
  {
    "nome": "Towtruck",
    "preco": "$50.00",
    "imagem": "towtruck.jpg"
  },
  {
    "nome": "Tractor",
    "preco": "$50.00",
    "imagem": "tractor.jpg"
  },
  {
    "nome": "Trashmaster",
    "preco": "$50.00",
    "imagem": "trashmaster.jpg"
  },
  {
    "nome": "Utility Van",
    "preco": "$50.00",
    "imagem": "utility_van.jpg"
  },
  {
    "nome": "Walton",
    "preco": "$50.00",
    "imagem": "walton.jpg"
  },
  {
    "nome": "Yankee",
    "preco": "$50.00",
    "imagem": "yankee.jpg"
  },
  {
    "nome": "Ambulance",
    "preco": "$50.00",
    "imagem": "ambulance.jpg"
  },
  {
    "nome": "Barracks",
    "preco": "$50.00",
    "imagem": "barracks.jpg"
  },
  {
    "nome": "Enforcer",
    "preco": "$50.00",
    "imagem": "enforcer.jpg"
  },
  {
    "nome": "FBI Rancher",
    "preco": "$50.00",
    "imagem": "fbi_rancher.jpg"
  },
  {
    "nome": "FBI Truck",
    "preco": "$50.00",
    "imagem": "fbi_truck.jpg"
  },
  {
    "nome": "Firetruck",
    "preco": "$50.00",
    "imagem": "firetruck.jpg"
  },
  {
    "nome": "Firetruck LA",
    "preco": "$50.00",
    "imagem": "firetruck_la.jpg"
  },
  {
    "nome": "HPV1000",
    "preco": "$50.00",
    "imagem": "hpv1000.jpg"
  },
  {
    "nome": "Police Car (LSPD)",
    "preco": "$50.00",
    "imagem": "police_car_lspd.jpg"
  },
  {
    "nome": "Police Car (SFPD)",
    "preco": "$50.00",
    "imagem": "police_car_sfpd.jpg"
  },
  {
    "nome": "Police Car (LVPD)",
    "preco": "$50.00",
    "imagem": "police_car_lvpd.jpg"
  },
  {
    "nome": "Police Ranger",
    "preco": "$50.00",
    "imagem": "police_ranger.jpg"
  },
  {
    "nome": "Rhino",
    "preco": "$50.00",
    "imagem": "rhino.jpg"
  },
  {
    "nome": "S.W.A.T.",
    "preco": "$50.00",
    "imagem": "swat.jpg"
  },
  {
    "nome": "Andromada",
    "preco": "$50.00",
    "imagem": "andromada.jpg"
  },
  {
    "nome": "AT-400",
    "preco": "$50.00",
    "imagem": "at_400.jpg"
  },
  {
    "nome": "Beagle",
    "preco": "$50.00",
    "imagem": "beagle.jpg"
  },
  {
    "nome": "Cargobob",
    "preco": "$50.00",
    "imagem": "cargobob.jpg"
  },
  {
    "nome": "Cropduster",
    "preco": "$50.00",
    "imagem": "cropduster.jpg"
  },
  {
    "nome": "Dodo",
    "preco": "$50.00",
    "imagem": "dodo.jpg"
  },
  {
    "nome": "Hunter",
    "preco": "$50.00",
    "imagem": "hunter.jpg"
  },
  {
    "nome": "Hydra",
    "preco": "$50.00",
    "imagem": "hydra.jpg"
  },
  {
    "nome": "Leviathan",
    "preco": "$50.00",
    "imagem": "leviathan.jpg"
  },
  {
    "nome": "Maverick",
    "preco": "$50.00",
    "imagem": "maverick.jpg"
  },
  {
    "nome": "Nevada",
    "preco": "$50.00",
    "imagem": "nevada.jpg"
  },
  {
    "nome": "News Maverick",
    "preco": "$50.00",
    "imagem": "news_maverick.jpg"
  },
  {
    "nome": "Police Maverick",
    "preco": "$50.00",
    "imagem": "police_maverick.jpg"
  },
  {
    "nome": "Raindance",
    "preco": "$50.00",
    "imagem": "raindance.jpg"
  },
  {
    "nome": "Rustler",
    "preco": "$50.00",
    "imagem": "rustler.jpg"
  },
  {
    "nome": "Sea Sparrow",
    "preco": "$50.00",
    "imagem": "sea_sparrow.jpg"
  },
  {
    "nome": "Shamal",
    "preco": "$50.00",
    "imagem": "shamal.jpg"
  },
  {
    "nome": "Skimmer",
    "preco": "$50.00",
    "imagem": "skimmer.jpg"
  },
  {
    "nome": "Sparrow",
    "preco": "$50.00",
    "imagem": "sparrow.jpg"
  },
  {
    "nome": "Stuntplane",
    "preco": "$50.00",
    "imagem": "stuntplane.jpg"
  },
  {
    "nome": "Coastguard",
    "preco": "$50.00",
    "imagem": "coastguard.jpg"
  },
  {
    "nome": "Dinghy",
    "preco": "$50.00",
    "imagem": "dinghy.jpg"
  },
  {
    "nome": "Jetmax",
    "preco": "$50.00",
    "imagem": "jetmax.jpg"
  },
  {
    "nome": "Launch",
    "preco": "$50.00",
    "imagem": "launch.jpg"
  },
  {
    "nome": "Marquis",
    "preco": "$50.00",
    "imagem": "marquis.jpg"
  },
  {
    "nome": "Predator",
    "preco": "$50.00",
    "imagem": "predator.jpg"
  },
  {
    "nome": "Reefer",
    "preco": "$50.00",
    "imagem": "reefer.jpg"
  },
  {
    "nome": "Speeder",
    "preco": "$50.00",
    "imagem": "speeder.jpg"
  },
  {
    "nome": "Squalo",
    "preco": "$50.00",
    "imagem": "squalo.jpg"
  },
  {
    "nome": "Tropic",
    "preco": "$50.00",
    "imagem": "tropic.jpg"
  },
  {
    "nome": "Vortex",
    "preco": "$50.00",
    "imagem": "vortex.jpg"
  },
  {
    "nome": "Baggage",
    "preco": "$50.00",
    "imagem": "baggage.jpg"
  },
  {
    "nome": "Bandito",
    "preco": "$50.00",
    "imagem": "bandito.jpg"
  },
  {
    "nome": "BF Injection",
    "preco": "$50.00",
    "imagem": "bf_injection.jpg"
  },
  {
    "nome": "Bloodring Banger",
    "preco": "$50.00",
    "imagem": "bloodring_banger.jpg"
  },
  {
    "nome": "Caddy",
    "preco": "$50.00",
    "imagem": "caddy.jpg"
  },
  {
    "nome": "Combine Harvester",
    "preco": "$50.00",
    "imagem": "combine_harvester.jpg"
  },
  {
    "nome": "Kart",
    "preco": "$50.00",
    "imagem": "kart.jpg"
  },
  {
    "nome": "Mower",
    "preco": "$50.00",
    "imagem": "mower.jpg"
  },
  {
    "nome": "RC Bandit",
    "preco": "$50.00",
    "imagem": "rc_bandit.jpg"
  },
  {
    "nome": "RC Baron",
    "preco": "$50.00",
    "imagem": "rc_baron.jpg"
  },
  {
    "nome": "RC Goblin",
    "preco": "$50.00",
    "imagem": "rc_goblin.jpg"
  },
  {
    "nome": "RC Raider",
    "preco": "$50.00",
    "imagem": "rc_raider.jpg"
  },
  {
    "nome": "RC Tiger",
    "preco": "$50.00",
    "imagem": "rc_tiger.jpg"
  },
  {
    "nome": "Sweeper",
    "preco": "$50.00",
    "imagem": "sweeper.jpg"
  },
  {
    "nome": "Tug",
    "preco": "$50.00",
    "imagem": "tug.jpg"
  },
  {
    "nome": "Tram",
    "preco": "$50.00",
    "imagem": "tram.jpg"
  },
  {
    "nome": "Brown Streak",
    "preco": "$50.00",
    "imagem": "brown_streak.jpg"
  },
  {
    "nome": "Freight",
    "preco": "$50.00",
    "imagem": "freight.jpg"
  },
  {
    nome: "Andromada",
    preco: "$50.00",
    imagem: "andromada.jpg"
  },
  {
    nome: "AT-400",
    preco: "$50.00",
    imagem: "at_400.jpg"
  },
  {
    nome: "Beagle",
    preco: "$50.00",
    imagem: "beagle.jpg"
  },
  {
    nome: "Cargobob",
    preco: "$50.00",
    imagem: "cargobob.jpg"
  },
  {
    nome: "Cropduster",
    preco: "$50.00",
    imagem: "cropduster.jpg"
  },
  {
    nome: "Dodo",
    preco: "$50.00",
    imagem: "dodo.jpg"
  },
  {
    nome: "Hunter",
    preco: "$50.00",
    imagem: "hunter.jpg"
  },
  {
    nome: "Hydra",
    preco: "$50.00",
    imagem: "hydra.jpg"
  },
  {
    nome: "Leviathan",
    preco: "$50.00",
    imagem: "leviathan.jpg"
  },
  {
    nome: "Maverick",
    preco: "$50.00",
    imagem: "maverick.jpg"
  },
  {
    nome: "Nevada",
    preco: "$50.00",
    imagem: "nevada.jpg"
  },
  {
    nome: "News Maverick",
    preco: "$50.00",
    imagem: "news_maverick.jpg"
  },
  {
    nome: "Police Maverick",
    preco: "$50.00",
    imagem: "police_maverick.jpg"
  },
  {
    nome: "Raindance",
    preco: "$50.00",
    imagem: "raindance.jpg"
  },
  {
    nome: "Rustler",
    preco: "$50.00",
    imagem: "rustler.jpg"
  },
  {
    nome: "Sea Sparrow",
    preco: "$50.00",
    imagem: "sea_sparrow.jpg"
  },
  {
    nome: "Shamal",
    preco: "$50.00",
    imagem: "shamal.jpg"
  },
  {
    nome: "Skimmer",
    preco: "$50.00",
    imagem: "skimmer.jpg"
  },
  {
    nome: "Sparrow",
    preco: "$50.00",
    imagem: "sparrow.jpg"
  },
  {
    nome: "Stuntplane",
    preco: "$50.00",
    imagem: "stuntplane.jpg"
  },
  // Pode adicionar todos os outros veículos aqui
];