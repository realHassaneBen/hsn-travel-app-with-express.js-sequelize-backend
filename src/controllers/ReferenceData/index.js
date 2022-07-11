import Amadeus from "amadeus";
import { amadeus } from "../../db/index.js";

const airlines = async (req, res, next) => {
    try {
        const response = await amadeus.referenceData.airlines.get({
            airlineCodes: "AH",
        });
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const locations = async (req, res, next) => {
    try {
        const response = await amadeus.referenceData.locations.get({
            keyword: "ALG",
            subType: Amadeus.location.any,
        });
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const location = async (req, res, next) => {
    try {
        const response = await amadeus.referenceData.location("ORN").get();
        console.log(response);
        return res.status(200).json(response.response.result);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

export { airlines, locations, location };
