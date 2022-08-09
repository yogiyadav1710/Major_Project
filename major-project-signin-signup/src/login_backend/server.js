const express = require('express');
const app = express();
//for accepting data in Json format //
app.use(express.json());
const cors = require('cors');

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const route=require('./test.js');
app.use("/test",route);

const PORT = 8081;
let  server = app.listen(PORT, function () {
    console.log(`Node server is running..${PORT}`);
});

