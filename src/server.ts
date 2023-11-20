import express, { Response, Request } from "express"
import { defaultFunction } from "./routes/routes";






const app = express();
app.use(express.json());
app.disable('x-powered-by');



app.get("*", defaultFunction);
app.post("*", defaultFunction);
app.put("*", defaultFunction);
app.patch("*", defaultFunction);
app.delete("*", defaultFunction);

const httpPort = process.env?.["SERVER_PORT"] ?? 3000;
app.listen(httpPort, () => { console.log(`Starting test server: ${httpPort}`) });






