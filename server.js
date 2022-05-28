require("dotenv").config();
const http = require("http");
const {app} = require("./app");
const connect = require("./databases/connect");
const server = http.createServer(app);


try {
    server.listen(process.env.PORT, async () => {
        await connect();
        console.log("app started....");
    });
} catch (error) {
    console.log(error);
}
