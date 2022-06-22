const rawPlayers = [
    {
        "name": "Shohei Ohtani",
        "id": "0000",
        "mlb": "LAA",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Juan Soto",
        "id": "0001",
        "mlb": "WSH",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Aaron Judge",
        "id": "0002",
        "mlb": "NYY",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Mike Trout",
        "id": "0003",
        "mlb": "LAA",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Vladimir Guerrero Jr",
        "id": "0004",
        "mlb": "TOR",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Gerrit Cole",
        "id": "0005",
        "mlb": "NYY",
        "pos": "P",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Mookie Betts",
        "id": "0006",
        "mlb": "LAD",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Bryce Harper",
        "id": "0007",
        "mlb": "PHI",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Trea Turner",
        "id": "0008",
        "mlb": "LAD",
        "pos": "IF",
        "mvp": true,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Max Scherzer",
        "id": "0009",
        "mlb": "NYM",
        "pos": "P",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Matt Olson",
        "id": "0010",
        "mlb": "ATL",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Jose Ramirez",
        "id": "0011",
        "mlb": "CLE",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Manny Machado",
        "id": "0012",
        "mlb": "SD",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Shane Bieber",
        "id": "0013",
        "mlb": "CLE",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Walker Buehler",
        "id": "0014",
        "mlb": "LAD",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Ronald Acuna Jr",
        "id": "0015",
        "mlb": "ATL",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Robbie Ray",
        "id": "0016",
        "mlb": "SEA",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Corbin Burnes",
        "id": "0017",
        "mlb": "MIL",
        "pos": "P",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Yordan Alvarez",
        "id": "0018",
        "mlb": "HOU",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Kyle Tucker",
        "id": "0019",
        "mlb": "HOU",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Luis Robert",
        "id": "0020",
        "mlb": "CWS",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Freddie Freeman",
        "id": "0021",
        "mlb": "LAD",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Wander Franco",
        "id": "0022",
        "mlb": "TB",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Slim Aliens"
    },
    {
        "name": "Zack Wheeler",
        "id": "0023",
        "mlb": "PHI",
        "pos": "P",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Bo Bichette",
        "id": "0024",
        "mlb": "TOR",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Paul Goldschmidt",
        "id": "0025",
        "mlb": "STL",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Giancarlo Stanton",
        "id": "0026",
        "mlb": "NYY",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Anthony Rendon",
        "id": "0027",
        "mlb": "LAA",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Magic Manatees"
    },
    {
        "name": "Christian Yelich",
        "id": "0028",
        "mlb": "MIL",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "George Springer",
        "id": "0029",
        "mlb": "TOR",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Brandon Woodruff",
        "id": "0030",
        "mlb": "MIL",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": true,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Trevor Story",
        "id": "0031",
        "mlb": "BOS",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Sandy Alcantara",
        "id": "0032",
        "mlb": "MIA",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Lucas Giolito",
        "id": "0033",
        "mlb": "CWS",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Liam Hendriks",
        "id": "0034",
        "mlb": "CWS",
        "pos": "RP",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": true,
        "inj": true,
        "otter": "Slim Aliens"
    },
    {
        "name": "Starling Marte",
        "id": "0035",
        "mlb": "NYM",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Francisco Lindor",
        "id": "0036",
        "mlb": "NYM",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Whit Merrifield",
        "id": "0037",
        "mlb": "KC",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Kris Bryant",
        "id": "0038",
        "mlb": "COL",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Corey Seager",
        "id": "0039",
        "mlb": "TEX",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Jose Altuve",
        "id": "0040",
        "mlb": "HOU",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Nolan Arenado",
        "id": "0041",
        "mlb": "STL",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Alex Bregman",
        "id": "0042",
        "mlb": "HOU",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Aaron Nola",
        "id": "0043",
        "mlb": "PHI",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Tyler O'Neill",
        "id": "0044",
        "mlb": "STL",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Magic Manatees"
    },
    {
        "name": "J.D Martinez",
        "id": "0045",
        "mlb": "BOS",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Nick Castellanos",
        "id": "0046",
        "mlb": "PHI",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Julio Urias",
        "id": "0047",
        "mlb": "LAD",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Marcus Semien",
        "id": "0048",
        "mlb": "TEX",
        "pos": "IF",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Nathan Eovaldi",
        "id": "0049",
        "mlb": "BOS",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": true,
        "otter": "Slim Aliens"
    },
    {
        "name": "Carlos Correa",
        "id": "0050",
        "mlb": "MIN",
        "pos": "IF",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Kevin Gausman",
        "id": "0051",
        "mlb": "TOR",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Bryan Reynolds",
        "id": "0052",
        "mlb": "PIT",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Raisel Iglesias",
        "id": "0053",
        "mlb": "LAA",
        "pos": "RP",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": true,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Ketel Marte",
        "id": "0054",
        "mlb": "ARI",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Joey Votto",
        "id": "0055",
        "mlb": "CIN",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Teoscar Hernandez",
        "id": "0056",
        "mlb": "TOR",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Josh Hader",
        "id": "0057",
        "mlb": "MIL",
        "pos": "RP",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Randy Arozarena",
        "id": "0058",
        "mlb": "TB",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Franmil Reyes",
        "id": "0059",
        "mlb": "CLE",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Joey Gallo",
        "id": "0060",
        "mlb": "NYY",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Yu Darvish",
        "id": "0061",
        "mlb": "SD",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Ozzie Albies",
        "id": "0062",
        "mlb": "ATL",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Jose Berrios",
        "id": "0063",
        "mlb": "TOR",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Brandon Lowe",
        "id": "0064",
        "mlb": "TB",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Rafael Devers",
        "id": "0065",
        "mlb": "BOS",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Nelson Cruz",
        "id": "0066",
        "mlb": "WSH",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Frankie Montas",
        "id": "0067",
        "mlb": "OAK",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Tim Anderson",
        "id": "0068",
        "mlb": "CWS",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Magic Manatees"
    },
    {
        "name": "Aroldis Chapman",
        "id": "0069",
        "mlb": "NYY",
        "pos": "RP",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Max Muncy",
        "id": "0070",
        "mlb": "LAD",
        "pos": "IF",
        "mvp": true,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Joe Musgrove",
        "id": "0071",
        "mlb": "SD",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Kyle Schwarber",
        "id": "0072",
        "mlb": "PHI",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Tommy Pham",
        "id": "0073",
        "mlb": "CIN",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Cody Bellinger",
        "id": "0074",
        "mlb": "LAD",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Jose Abreu",
        "id": "0075",
        "mlb": "CWS",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Salvador Perez",
        "id": "0076",
        "mlb": "KC",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Jazz Chisholm Jr",
        "id": "0077",
        "mlb": "MIA",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Pete Alonso",
        "id": "0078",
        "mlb": "NYM",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "German Marquez",
        "id": "0079",
        "mlb": "COL",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Logan Webb",
        "id": "0080",
        "mlb": "SF",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Magic Manatees"
    },
    {
        "name": "Xander Bogaerts",
        "id": "0081",
        "mlb": "BOS",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Sonny Gray",
        "id": "0082",
        "mlb": "MIN",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Slim Aliens"
    },
    {
        "name": "Justin Verlander",
        "id": "0083",
        "mlb": "HOU",
        "pos": "P",
        "mvp": true,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Tyler Mahle",
        "id": "0084",
        "mlb": "CIN",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "J.P. Crawford",
        "id": "0085",
        "mlb": "SEA",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Slim Aliens"
    },
    {
        "name": "Cedric Mullins",
        "id": "0086",
        "mlb": "BAL",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Clayton Kershaw",
        "id": "0087",
        "mlb": "LAD",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Pablo López",
        "id": "0088",
        "mlb": "MIA",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Edwin Diaz",
        "id": "0089",
        "mlb": "NYM",
        "pos": "RP",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Shohei Ohtani",
        "id": "0090",
        "mlb": "LAA",
        "pos": "P",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Byron Buxton",
        "id": "0091",
        "mlb": "MIN",
        "pos": "OF",
        "mvp": true,
        "hr": true,
        "spd": true,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Noah Syndergaard",
        "id": "0092",
        "mlb": "LAA",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Seiya Suzuki",
        "id": "0093",
        "mlb": "CHC",
        "pos": "OF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Magic Manatees"
    },
    {
        "name": "Zack Greinke",
        "id": "0094",
        "mlb": "KC",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Slim Aliens"
    },
    {
        "name": "Owen Miller",
        "id": "0095",
        "mlb": "CLE",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Lunar Doodles"
    },
    {
        "name": "Anthony Rizzo",
        "id": "0096",
        "mlb": "NYY",
        "pos": "IF",
        "mvp": false,
        "hr": true,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Carlos Rodon",
        "id": "0097",
        "mlb": "SF",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "C.J. Cron",
        "id": "0098",
        "mlb": "COL",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Nestor Cortes",
        "id": "0099",
        "mlb": "NYY",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Joc Pederson",
        "id": "0100",
        "mlb": "SF",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": true,
        "otter": "Mighty Megabytes"
    },
    {
        "name": "Adley Rutschman",
        "id": "0101",
        "mlb": "BAL",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Ty France",
        "id": "0102",
        "mlb": "SEA",
        "pos": "IF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Magic Manatees"
    },
    {
        "name": "Martin Perez",
        "id": "0103",
        "mlb": "TEX",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Frozen Acorns"
    },
    {
        "name": "Julio Rodriguez",
        "id": "0104",
        "mlb": "SEA",
        "pos": "OF",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": false,
        "lock": false,
        "inj": false,
        "otter": "Mindful Freaks"
    },
    {
        "name": "Shane McClanahan",
        "id": "0105",
        "mlb": "TB",
        "pos": "P",
        "mvp": false,
        "hr": false,
        "spd": false,
        "ace": true,
        "lock": false,
        "inj": false,
        "otter": "Mighty Megabytes"
    }
];



export default rawPlayers;