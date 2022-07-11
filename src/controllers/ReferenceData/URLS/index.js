import { amadeus } from "../../../db/index.js";

const referenceDataUrlsCheckinLinks = async (req, res, next) => {
    const { airlineCode } = req.body;
    const data = {
        airlineCode,
    };
    try {
        // Flight Checkin Links
        const response = await amadeus.referenceData.urls.checkinLinks.get(
            data
        );
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.response.result);
    }
};

export { referenceDataUrlsCheckinLinks };
