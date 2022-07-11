import Amadeus from "amadeus";
import { amadeus } from "../../db/index.js";

const referenceDataAirlines = async (req, res, next) => {
    const { airlineCodes } = req.body;
    const data = {
        airlineCodes,
    };

    try {
        // Airline Code Lookup
        const response = await amadeus.referenceData.airlines.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

const referenceDataLocations = async (req, res, next) => {
    const { keyword, subType } = req.body;
    const data = {
        keyword,
        subType: subType || Amadeus.location.any,
    };
    console.log(data);
    try {
        // Airports and City Search (autocomplete)
        // Find all the cities and airports starting by 'LON'
        const response = await amadeus.referenceData.locations.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

const referenceDataLocation = async (req, res, next) => {
    const { location } = req.body;
    const data = { location };
    try {
        // Get a specific city or airport based on its id
        const response = await amadeus.referenceData
            .location(data.location)
            .get();
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

export { referenceDataAirlines, referenceDataLocations, referenceDataLocation };
