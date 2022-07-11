import { amadeus } from "../db/index.js";

const airportDirectDestinations = async (req, res, next) => {
    try {
        const response = await amadeus.airport.directDestinations.get({
            departureAirportCode: "ALG",
        });
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export { airportDirectDestinations };
