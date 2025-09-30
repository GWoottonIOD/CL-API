import cors from 'cors';

export const corsOptions = {
    origin: ["http://192.168.1.73:5173","http://localhost:5500", "http://localhost:5173"],
};

export default cors(corsOptions);