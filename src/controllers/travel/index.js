import { amadeus } from "../../db/index.js";

const travelTripParser = async (req, res, next) => {
    try {
        // Trip Parser API V3
        // parse information from flight, hotel, rail, and rental car confirmation emails
        // Parse directly from your confirmation file by using helper `fromFile`
        const response = await amadeus.travel.tripParser.post(
            JSON.stringify({
                payload: amadeus.travel.tripParser.fromFile(
                    fs.readFileSync("confirmation.eml")
                ),
                metadata: {
                    documentType: "eml",
                    name: "BOOKING_DOCUMENT",
                    encoding: "BASE_64",
                },
            })
        );
        console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
};

export { travelTripParser };
