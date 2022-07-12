import logger from "https://cdn.skypack.dev/loglevel";

import { instantiate } from "./lib/rs_lib.generated.js";

const { add } = await instantiate();

export { logger, add };
