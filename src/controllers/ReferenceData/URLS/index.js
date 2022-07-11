import { amadeus } from "../../../db/index.js";

const checkinLinks = async (req, res, next) => {
    try {
        const response = await amadeus.referenceData.urls.checkinLinks.get({
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

export { checkinLinks };
