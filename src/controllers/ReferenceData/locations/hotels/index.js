import Amadeus from "amadeus";
import { amadeus } from "../../../../db/index.js";

const referenceDataLocationsHotelsByCity = async (req, res, next) => {
    const { cityCode } = req.body;
    const data = { cityCode };
    try {
        //Hotel List API
        //Get list of hotels by city code
        const response =
            await amadeus.referenceData.locations.hotels.byCity.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};
const referenceDataLocationsHotelsByGeocode = async (req, res, next) => {
    const { latitude, longitude } = req.body;
    const data = { latitude, longitude };
    try {
        //Get List of hotels by Geocode
        const response =
            await amadeus.referenceData.locations.hotels.byGeocode.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};
const referenceDataLocationsHotelsByHotels = async (req, res, next) => {
    const { hotelIds } = req.body;
    const data = { hotelIds };
    try {
        //Get List of hotels by hotelIds
        const response =
            await amadeus.referenceData.locations.hotels.byHotels.get(data);
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

export {
    referenceDataLocationsHotelsByCity,
    referenceDataLocationsHotelsByGeocode,
};
