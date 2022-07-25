import { amadeus } from "../db/index.js";

const homeWelcome = async (req, res, next) => {
    res.status(200).json({
        message: "Travel App, Node.js, Express.js API ...",
    });
};

export { homeWelcome };
