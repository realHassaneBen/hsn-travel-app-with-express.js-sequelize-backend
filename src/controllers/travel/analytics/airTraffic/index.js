import { amadeus } from "../../../../db/index.js";

const travelAnalyticsAirTrafficBooked = async (req, res, next) => {
    try {
        // Flight Most Booked Destinations
        const response = await amadeus.travel.analytics.airTraffic.booked.get({
            originCityCode: "MAD",
            period: "2017-08",
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
const travelAnalyticsAirTrafficTraveled = async (req, res, next) => {
    try {
        // Flight Most Traveled Destinations
        const response = await amadeus.travel.analytics.airTraffic.traveled.get(
            {
                originCityCode: "MAD",
                period: "2017-01",
            }
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
const travelAnalyticsAirTrafficBusiestPeriod = async (req, res, next) => {
    try {
        // Flight Busiest Traveling Period
        const response =
            await amadeus.travel.analytics.airTraffic.busiestPeriod.get({
                cityCode: "MAD",
                period: "2017",
                direction: Amadeus.direction.arriving,
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

export {
    travelAnalyticsAirTrafficBooked,
    travelAnalyticsAirTrafficTraveled,
    travelAnalyticsAirTrafficBusiestPeriod,
};
