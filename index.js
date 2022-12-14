const express=require("express")
const dotenv=require("dotenv")
const connectDB =require("./config/connectDB")
const userRoute = require("./routes/userRoute");
const schoolRoute =require("./routes/schoolRoute")
const morgan = require("morgan");

const app=express();
dotenv.config();
connectDB();

// middlewares
app.use(express.json())
app.use("/api/users", userRoute)
app.use(morgan("dev"));
app.use("/api/schools", schoolRoute)




app.get("/", (req, res) => {
res.send("<h1>Welcome to our Anscilla school portal</h>")
})


const PORT = process.env.PORT ||6000

app.listen(PORT, () =>
    console.log(`server is running on ${PORT}` )
)