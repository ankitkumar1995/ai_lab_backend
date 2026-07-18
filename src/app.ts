import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import routes from "./routes/index";
// Initialize the Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Security middleware
app.use(helmet());

// Compression middleware
app.use(compression());

// Logging middleware
app.use(morgan("dev"));

// Request parsing middleware
app.use(express.json());

// Request parsing middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Mount the routes
app.use("/api/v1", routes);

export default app;
