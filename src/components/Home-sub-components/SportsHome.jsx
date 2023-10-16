import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import { database, ref, get } from "../../firebaseConfig";

import {
  getSports,
  getCompetitions,
  getMatches,
  getAllMatchesFromSport,
} from "../../api/sports";

// const baseURL = "http://66.29.144.76:4000/api"
export default function SportsHome() {
  // const database = app.database();
  const matchesRef = ref(database, "matchesByDate");

  const [matchesByDate, setMatchesByDate] = useState(null);
  const [dataToDisplay, setDataToDisplay] = useState({
    "In-Play": {
      Soccer: 0,
      Cricket: 0,
      Tennis: 0,
    },
    Today: {
      Soccer: 0,
      Cricket: 0,
      Tennis: 0,
    },
    Tomorrow: {
      Soccer: 0,
      Cricket: 0,
      Tennis: 0,
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [activeDate, setActiveDate] = useState("In-Play");

  const handleActiveItemChange = (activeItem) => {
    setActiveDate(activeItem);
    console.log("Active Item:", activeItem);
  };

  useEffect(() => {
    get(matchesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Data exists
          const data = snapshot.val();
          console.log(data);
          setMatchesByDate(data);
          const categories = ["In-Play", "Today", "Tomorrow"];
          const sports = ["Soccer", "Cricket", "Tennis"];
          const result = {
            "In-Play": {},
            Today: {},
            Tomorrow: {},
          };

          // Initialize the result object with zeros for each sport in each category
          for (const category of categories) {
            for (const sport of sports) {
              result[category][sport] = 0;
            }
          }
          console.log(result);
          for (const sport of sports) {
            // console.log("first", matchesByDate);
            console.log(data[sport]);
            if (data[sport]) {
              for (const category of categories) {
                if (data[sport][category]) {
                  result[category][sport] = data[sport][category].length;
                }
              }
            }
          }
          console.log("result final: ", result);
          setDataToDisplay(result);
          // console.log('Fetched data:', data);
        } else {
          console.log("Data does not exist.");
        }
      }).then(()=>{

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Fetch data from APIs and update state
  }, []);

  return (
    <div className=" flex gap-3">
      <Sidebar
        activeItem="SportsHome"
        onActiveItemChange={handleActiveItemChange}
      />
      <div className=" flex flex-col gap-3 w-full">
        <div className=" h-28 flex flex-col px-6 items-start justify-center w-full bg-cover all-sports rounded-xl">
          <p className=" text-gray-700 font-bold text-xl">ALL</p>
          {!isLoading && (
            <p className=" text-gray-950 font-bold text-6xl">
              {dataToDisplay[activeDate]["Cricket"] +
                dataToDisplay[activeDate]["Soccer"] +
                dataToDisplay[activeDate]["Tennis"]}
            </p>
          )}
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
        <div className=" h-28 flex flex-col px-6 items-start justify-center w-full bg-cover all-sports rounded-xl">
          <p className=" text-gray-700 font-bold text-xl">Cricket</p>
          {!isLoading && (
            <p className=" text-gray-950 font-bold text-6xl">
              {dataToDisplay[activeDate]["Cricket"]}
            </p>
          )}
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
        <div className=" h-28 flex flex-col px-6 items-start justify-center w-full bg-cover all-sports rounded-xl">
          <p className=" text-gray-700 font-bold text-xl">Soccer</p>
          {!isLoading && (
            <p className=" text-gray-950 font-bold text-6xl">
              {dataToDisplay[activeDate]["Soccer"]}
            </p>
          )}
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
        <div className=" h-28 flex flex-col px-6 items-start justify-center w-full bg-cover all-sports rounded-xl">
          <p className=" text-gray-700 font-bold text-xl">Tennis</p>
          {!isLoading && (
            <p className=" text-gray-950 font-bold text-6xl">
              {dataToDisplay[activeDate]["Tennis"]}
            </p>
          )}
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}
