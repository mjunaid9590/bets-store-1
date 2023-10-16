import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollToTop from "./components/ScrolltoTop";
import Casino from "./pages/Casino";
import Sports from "./pages/Sports";
import Leagues from "./pages/Leagues";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MasterAgent from "./pages/MasterAgent";
import MatchDetails from "./pages/MatchDetails";
import SuperAgent from "./pages/SuperAgent";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [scrollableDiv, setScrollableDiv] = useState(0)
  const [scrollableDivTop, setScrollableDivTop] = useState(0)
  const [trigger, setTrigger] = useState(false)

  function handleScroll(event) {
    setScrollableDivTop(event.currentTarget.scrollTop)
    setScrollableDiv(event.currentTarget)
    setTrigger(true)
  }






  // 20231016141918
  // http://66.29.144.76:4000/api/check





  const allSports = [
    {
      "eventType": "1",
      "name": "Soccer",
      "marketCount": 2492,
      "matchesCount": 16,
      "competitions": [
        {
          "id": "59",
          "name": "German Bundesliga",
          "matchesCount": 1,
          "matches": [
            {
              "event": {
                "id": "32682334",
                "name": "Dortmund v Werder Bremen",
                "countryCode": "DE",
                "timezone": "GMT",
                "openDate": "2023-10-20T18:30:00.000Z"
              },
              "marketCount": 7,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 2
            }
          ]
        },
        {
          "id": "12212459",
          "name": "Serbian First League",
          "matchesCount": 3,
          "matches": [
            {
              "event": {
                "id": "32719444",
                "name": "FK Mladost Novi Sad v FK Graficar",
                "countryCode": "CS",
                "timezone": "GMT",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32719445",
                "name": "FK Radnicki Sremska v Tekstilac Odzaci",
                "countryCode": "CS",
                "timezone": "GMT",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32719446",
                "name": "FK Vrsac v RFK Novi Sad",
                "countryCode": "CS",
                "timezone": "GMT",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            }
          ]
        },
        {
          "id": "12237685",
          "name": "UEFA U21 Euro Qualifiers",
          "matchesCount": 2,
          "matches": [
            {
              "event": {
                "id": "32708393",
                "name": "Northern Ireland U21 v Serbia U21",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T18:30:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32708387",
                "name": "Ukraine U21 v England U21",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T16:30:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            }
          ]
        },
        {
          "id": "12205166",
          "name": "Friendlies International",
          "matchesCount": 5,
          "matches": [
            {
              "event": {
                "id": "32712232",
                "name": "Senegal v Cameroon",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T18:30:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 4
            },
            {
              "event": {
                "id": "32712746",
                "name": "Algeria v Egypt",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T16:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 4
            },
            {
              "event": {
                "id": "32719596",
                "name": "Mozambique v Nigeria",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T15:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32721252",
                "name": "Botswana v Eswatini",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T14:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32718874",
                "name": "China v Uzbekistan",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T11:35:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 4
            }
          ]
        },
        {
          "id": "12220428",
          "name": "Friendlies International U20",
          "matchesCount": 2,
          "matches": [
            {
              "event": {
                "id": "32720552",
                "name": "Norway U20 v Romania U20",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T16:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32721126",
                "name": "Germany U20 v Czech Republic U20",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T16:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            }
          ]
        },
        {
          "id": "12511339",
          "name": "English U21 Pro Development League",
          "matchesCount": 2,
          "matches": [
            {
              "event": {
                "id": "32719447",
                "name": "Fleetwood Town U21 v Birmingham U21",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 4
            },
            {
              "event": {
                "id": "32719396",
                "name": "Charlton U21 v Millwall U21",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-16T12:00:00.000Z"
              },
              "marketCount": 24,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 4
            }
          ]
        },
        {
          "id": "12552926",
          "name": "UEFA Euro Qualifiers",
          "matchesCount": 1,
          "matches": [
            {
              "event": {
                "id": "32702850",
                "name": "Azerbaijan v Austria",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-10-16T16:00:00.000Z"
              },
              "marketCount": 33,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            }
          ]
        }
      ]
    },
    {
      "eventType": "2",
      "name": "Tennis",
      "marketCount": 5578,
      "matchesCount": 27,
      "competitions": [
        {
          "id": "12625797",
          "name": "WTA Nanchang 2023",
          "matchesCount": 2,
          "matches": [
            {
              "event": {
                "id": "32720320",
                "name": "Si Wei v Birrell",
                "countryCode": "",
                "timezone": "UTC",
                "openDate": "2023-10-16T07:30:00.000Z"
              },
              "marketCount": 10,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32716967",
                "name": "Di Shnaider v L Zhu",
                "countryCode": "",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 10,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12625677",
          "name": "ATP Tokyo 2023",
          "matchesCount": 2,
          "matches": [
            {
              "event": {
                "id": "32719995",
                "name": "Nishioka v Giron",
                "countryCode": "JP",
                "timezone": "UTC",
                "openDate": "2023-10-16T09:00:00.000Z"
              },
              "marketCount": 10,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32716248",
                "name": "Paul v Altmaier",
                "countryCode": "JP",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 10,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12626212",
          "name": "Olbia Challenger 2023",
          "matchesCount": 5,
          "matches": [
            {
              "event": {
                "id": "32720221",
                "name": "Ma Kasnikowski v Vla Orlov",
                "countryCode": "IT",
                "timezone": "UTC",
                "openDate": "2023-10-16T08:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720540",
                "name": "Copil v Strombachs",
                "countryCode": "IT",
                "timezone": "UTC",
                "openDate": "2023-10-16T08:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720639",
                "name": "Jacquet v Picchione",
                "countryCode": "IT",
                "timezone": "UTC",
                "openDate": "2023-10-16T10:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720810",
                "name": "Bourgue v Nijboer",
                "countryCode": "IT",
                "timezone": "UTC",
                "openDate": "2023-10-16T10:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720783",
                "name": "Fr Forti v Oradini",
                "countryCode": "IT",
                "timezone": "UTC",
                "openDate": "2023-10-16T10:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12626230",
          "name": "Hamburg Challenger 2023",
          "matchesCount": 5,
          "matches": [
            {
              "event": {
                "id": "32720280",
                "name": "Jorda Sanchis v Barranco Cosano",
                "countryCode": "DE",
                "timezone": "UTC",
                "openDate": "2023-10-16T09:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720878",
                "name": "Masur v Ma Rosenkranz",
                "countryCode": "DE",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721226",
                "name": "Lu Gerch v Ha Habib",
                "countryCode": "DE",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720563",
                "name": "Santillan v Khu Sultanov",
                "countryCode": "DE",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721062",
                "name": "Lamasine v Ja Schnaitter",
                "countryCode": "DE",
                "timezone": "UTC",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12626110",
          "name": "Shenzhen Challenger II 2023",
          "matchesCount": 3,
          "matches": [
            {
              "event": {
                "id": "32717298",
                "name": "Ar Weber v Y Bai",
                "countryCode": "CN",
                "timezone": "UTC",
                "openDate": "2023-10-16T02:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32717303",
                "name": "Mi Haliak v Atmane",
                "countryCode": "CN",
                "timezone": "UTC",
                "openDate": "2023-10-16T02:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32717223",
                "name": "Yu Bu v Saville",
                "countryCode": "CN",
                "timezone": "UTC",
                "openDate": "2023-10-16T08:30:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12626359",
          "name": "Santa Fe Challenger II 2023",
          "matchesCount": 6,
          "matches": [
            {
              "event": {
                "id": "32721294",
                "name": "Elias v Al Barrena",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T09:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721017",
                "name": "Ni Mejia v O Ayeni",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720826",
                "name": "Bl Bicknell v Luz",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720934",
                "name": "Ficovich v Boscardin Dias",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T13:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721209",
                "name": "Taberner v Villanueva",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T15:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721286",
                "name": "Ado Vallejo v Lama",
                "countryCode": "AR",
                "timezone": "UTC",
                "openDate": "2023-10-16T15:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        },
        {
          "id": "12626491",
          "name": "ATP Antwerp 2023",
          "matchesCount": 4,
          "matches": [
            {
              "event": {
                "id": "32720656",
                "name": "Onclin v Mpetshi Perricard",
                "countryCode": "BE",
                "timezone": "UTC",
                "openDate": "2023-10-16T09:30:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720702",
                "name": "Marterer v Ti Droguet",
                "countryCode": "BE",
                "timezone": "UTC",
                "openDate": "2023-10-16T10:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32721145",
                "name": "Blockx v Gi Bailly",
                "countryCode": "BE",
                "timezone": "UTC",
                "openDate": "2023-10-16T11:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32720955",
                "name": "Bonzi v Zeppieri",
                "countryCode": "BE",
                "timezone": "UTC",
                "openDate": "2023-10-16T12:00:00.000Z"
              },
              "marketCount": 4,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        }
      ]
    },
    {
      "eventType": "4",
      "name": "Cricket",
      "marketCount": 22,
      "matchesCount": 5,
      "competitions": [
        {
          "id": "11729982",
          "name": "ICC Cricket World Cup",
          "matchesCount": 5,
          "matches": [
            {
              "event": {
                "id": "28569726",
                "name": "ICC Cricket World Cup",
                "countryCode": "",
                "timezone": "GMT",
                "openDate": "2023-11-16T12:13:00.000Z"
              },
              "marketCount": 1,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 2
            },
            {
              "event": {
                "id": "32701023",
                "name": "Australia v Sri Lanka",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-16T08:30:00.000Z"
              },
              "marketCount": 27,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 3
            },
            {
              "event": {
                "id": "32701026",
                "name": "South Africa v Netherlands",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-17T08:30:00.000Z"
              },
              "marketCount": 27,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 2
            },
            {
              "event": {
                "id": "32711495",
                "name": "New Zealand v Afghanistan",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-18T08:30:00.000Z"
              },
              "marketCount": 27,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            },
            {
              "event": {
                "id": "32711501",
                "name": "India v Bangladesh",
                "countryCode": "GB",
                "timezone": "GMT",
                "openDate": "2023-10-19T08:30:00.000Z"
              },
              "marketCount": 27,
              "scoreboard_id": "",
              "selections": null,
              "liability_type": "0",
              "undeclared_markets": 1
            }
          ]
        }
      ]
    }
  ]

  const categorizedData = {}

  for (const sport of allSports) {
    if (!categorizedData[sport.name]) {
      categorizedData[sport.name] = {
        'inPlay': [],
        'today': [],
        'tomorrow': [],
      };
    }
    // console.log('---', sport.name)
    const now = new Date();
    const gmtOffset = now.getTimezoneOffset();
    now.setMinutes(now.getMinutes() + gmtOffset);
    
    // console.log("Now: ", now)
    for (const competition of sport.competitions) {
      // console.log('--------', competition.name)
      for (const match of competition.matches) {
        const openDate = new Date(match.event.openDate)
        openDate.setMinutes(now.getMinutes() + gmtOffset)

        const today = new Date(now);
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const dayAftertomorrow = new Date(today);
        dayAftertomorrow.setDate(today.getDate() + 2);

        // console.log("open date: ", openDate.getDate())
        if (openDate <= now) {
          categorizedData[sport.name]['inPlay'].push(match)
          // console.log(match)
        }
        else if (openDate >= today && openDate < tomorrow) {
          categorizedData[sport.name]['today'].push(match)
        }
        else if (openDate >= tomorrow && openDate < dayAftertomorrow) {
          categorizedData[sport.name]['tomorrow'].push(match)
        }
      }
    }
  }
  // console.log(categorizedData)









    //Test code by developer Junaid (remove it after development)
    async function fetchTestData() {
      const response = await fetch("/api/matches/list")
      // const response = await fetch("http://167.99.198.2/api/matches/list")
      const matchesList = await response.json()
      console.log("Complete Data: ", matchesList)
      console.log("First Match is: ", matchesList.data[0])
      return matchesList;
    }
    useEffect(() => {
      fetchTestData()
    }, [])

    //End of test code
    //Delete above code after testing


    return (
      <React.Fragment>
        <Router>
          <div className="app-bg w-full h-screen">
            <div className="max-w-[480px] w-full mx-auto h-full bg-[#EEF6FB] flex flex-col relative">
              <Header />
              <div onScroll={handleScroll} className="overflow-y-scroll flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route
                    path="/casino" element={<Casino />}
                  />
                  <Route
                    path="/sports" element={<Sports />}
                  />
                  <Route
                    path="/leagues" element={<Leagues />}
                  />
                  <Route
                    path="/signup" element={<Signup />}
                  />
                  <Route
                    path="/login" element={<Login />}
                  />
                  <Route
                    path="/master" element={<MasterAgent />}
                  />
                  <Route
                    path="/super" element={<SuperAgent />}
                  />
                  <Route
                    path="/admin" element={<AdminPanel />}
                  />
                  <Route
                    path="/match-details/:matchId" element={<MatchDetails />}
                  />
                </Routes>
              </div>
              {trigger && <ScrollToTop scrollableDiv={scrollableDiv} scrollableDivTop={scrollableDivTop} />}
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }

  export default App;
