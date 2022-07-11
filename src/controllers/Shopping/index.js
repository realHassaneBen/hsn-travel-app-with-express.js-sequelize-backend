import { amadeus } from "../../db/index.js";

const flightDestinations = async (req, res, next) => {
    try {
        const response = await amadeus.shopping.flightDestinations.get({
            origin: "MAD",
        });
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response.result);
        return res.status(500).json(error.response.result);
    }
};
const flightDates = async (req, res, next) => {
    try {
        const response = await amadeus.shopping.flightDates.get({
            origin: "MAD",
            destination: "MUC",
        });
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response.result);
        return res.status(500).json(error.response.result);
    }
};

const flightOffersSearch = async (req, res, next) => {
    try {
        const response = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: "ALG",
            destinationLocationCode: "DXB",
            departureDate: "2022-11-01",
            adults: "2",
        });
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response.result);
        return res.status(500).json(error.response.result);
    }
};

export { flightDestinations, flightDates, flightOffersSearch };
