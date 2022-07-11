import { Router } from "express";
import {
    createflightOrder,
    deleteflightOrder,
    getflightOrder,
} from "../controllers/Booking.js";

const router = Router();

router.get("/flightOrders", getflightOrder);
router.post("/flightOrders", createflightOrder);
router.delete("/flightOrders", deleteflightOrder);

export default router;
