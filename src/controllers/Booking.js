import { amadeus } from "../db/index.js";

const getBookingFlightOrder = async (req, res, next) => {
    const { flightOrderID } = req.query;
    try {
        // Retrieve flight order with ID 'XXX'. This ID comes from the
        // Flight Create Orders API, which is a temporary ID in test environment.
        const response = await amadeus.booking.flightOrder(flightOrderID).get();
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const createBookingFlightOrders = async (req, res, next) => {
    try {
        const response = await amadeus.booking.flightOrders.post(
            JSON.stringify({
                type: "flight-order",
                flightOffers: [priced - offers],
                travelers: [],
            })
        );
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteBookingFlightOrder = async (req, res, next) => {
    const { flightOrderID } = req.query;
    try {
        // Cancel flight order with ID 'XXX'. This ID comes from the
        // Flight Create Orders API, which is a temporary ID in test environment.
        const response = await amadeus.booking.flightOrder().delete();
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export {
    getBookingFlightOrder,
    createBookingFlightOrders,
    deleteBookingFlightOrder,
};
