import axios from 'axios';

const BASE_URL = 'http://66.29.144.76:4000/api';

//Get all the sports
export const getSports = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/fetch_data?Action=listEventTypes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sports:', error);
      throw error;
    }
  };
  
// Get all leagues/ competitions in a sports
export const getCompetitions = async (eventTypeID) => {
    // console.log("Getting all the competitions for sport ", eventTypeID)

    try {
      const response = await axios.get(`${BASE_URL}/v1/fetch_data?Action=listCompetitions&EventTypeID=${eventTypeID}`);

      return response.data;
    } catch (error) {
      console.error('Error fetching competitions:', error);
      throw error;
    }
  };

  // Get all Matches from a league/ Competitions
  export const getMatches = async (eventTypeID, competitionID) => {
    // console.log(`Getting all the matches for competition ${competitionID} of sports ${eventTypeID}`)

    try {
      const response = await axios.get(`${BASE_URL}/v1/fetch_data?Action=listEvents&EventTypeID=${eventTypeID}&CompetitionID=${competitionID}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  };

  // Get all matches of a sports from all leagues
  export const getAllMatchesFromSport = async (eventTypeID) => {
    // console.log("Getting all the matches for ", eventTypeID)
    let allMatches = []
    // const combinedData = [...firstResponse, ...secondResponse];
    try {
      const competitions = await getCompetitions(eventTypeID);
    //   const competitions = response.data;
    //   console.log(competitions)
      for (const competition of competitions){
         const leagueMatches = await getMatches(eventTypeID, competition.competition.id)
         allMatches = [...allMatches, ...leagueMatches]
        //  console.log("All matches: ", allMatches)
      }
      return allMatches;
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  };
