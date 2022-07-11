import { Router } from "express";
import {
    createBookingFlightOrders,
    deleteBookingFlightOrder,
    getBookingFlightOrder,
} from "../controllers/Booking.js";

const router = Router();

router.get("/flightOrders", getBookingFlightOrder);
router.post("/flightOrders", createBookingFlightOrders);
router.delete("/flightOrders", deleteBookingFlightOrder);

export default router;
