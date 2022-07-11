import { amadeus } from "../db/index.js";

const airlineDestinations = async (req, res, next) => {
    try {
        const response = await amadeus.airline.destinations.get({
            airlineCode: "BA",
        });
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
};

export { airlineDestinations };
