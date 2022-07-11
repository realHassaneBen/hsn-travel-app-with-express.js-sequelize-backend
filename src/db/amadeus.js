import Amadeus from "amadeus";

import { amadeusConfig } from "../config/index.js";

var amadeus = new Amadeus({
    clientId: amadeusConfig.clientId,
    clientSecret: amadeusConfig.clientSecret,
    logLevel: amadeusConfig.logLevel,
});

export default amadeus;
