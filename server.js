const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());    

const PORT = process.env.PORT || 5000;

app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
