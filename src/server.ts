/**
 * This is a debug server for testing, 
 * down below you can edit the config to test the logger settings
*/
import express from "express"
import { defaultFunction } from "./routes/routes";
import { getDBStringDebug } from "./prisma";





console.log('server initiating ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
const app = express();
app.use(express.json());
app.disable('x-powered-by');



app.get("*", defaultFunction);
app.post("*", defaultFunction);
app.put("*", defaultFunction);
app.patch("*", defaultFunction);
app.delete("*", defaultFunction);

function getPort() {
    const loggerPort = Number(process?.env["LOGGER_PORT"])
    if (!isNaN(loggerPort)) {
        console.log("detected logger port: ", loggerPort)
        return loggerPort;
    }
    const serverPort = Number(process.env?.["SERVER_PORT"])
    if (!isNaN(serverPort)) {
        console.log("detected sever port: ", serverPort)
        return Number(serverPort)
    }
    console.log("using default port: ", 3000);
    return 3000;
}

const port = getPort();
console.log(getDBStringDebug(process.env?.["LOG_DATABASE_URL"]));
const server = app.listen(port, () => { console.log(`Starting test server: ${port}`) });
export default server;





