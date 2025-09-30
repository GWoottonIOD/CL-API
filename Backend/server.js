import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {connectMysql} from './dbConnect.js';
import { router as userRoutes} from './routes/userRoutes.js';

const app = express();


app.use(cors);

// parse requests of content-type - application/json
app.use(express.json());

app.use('/api/users', userRoutes);

// set port, listen for requests
 const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});