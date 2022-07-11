import { amadeus } from "../../../db/index.js";

const flightAvailabilities = async (req, res, next) => {
    const flightAvailabilitiesData = {};
    try {
        const response =
            await amadeus.shopping.availability.flightAvailabilities.post(
                flightAvailabilitiesData
            );
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error?.response?.result);
        return res.status(500).json(error?.response?.result);
    }
};

export { flightAvailabilities };
