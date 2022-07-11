import Amadeus from "amadeus";
import { amadeus } from "../../../db/index.js";

const referenceDataLocationsAirports = async (req, res, next) => {
    const { longitude, latitude } = req.body;
    const data = { longitude, latitude };
    try {
        // Airport Nearest Relevant Airport (for London)
        const response = await amadeus.referenceData.locations.airports.get(
            data
        );
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};
const referenceDataLocationsCities = async (req, res, next) => {
    const { keyword } = req.body;
    const data = { keyword };
    try {
        // City Search API
        // finds cities that match a specific word or string of letters.
        // Return a list of cities matching a keyword 'Paris'
        const response = await amadeus.referenceData.locations.cities.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};
const referenceDataLocationsHotel = async (req, res, next) => {
    const { keyword, subType } = req.body;
    const data = { keyword, subType };
    try {
        // City Search API
        // finds cities that match a specific word or string of letters.
        // Return a list of cities matching a keyword 'Paris'
        const response = await amadeus.referenceData.locations.cities.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

export { referenceDataLocationsAirports, referenceDataLocationsCities };
