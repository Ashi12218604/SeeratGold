import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import comboRoutes from './routes/comboRoutes.js';
import offerRoutes from './routes/offerRoutes.js';
import settingRoutes from './routes/settingRoutes.js';
import errorHandler from './middleware/errorHandler.js';

/* ------------------------------------------------------------------ */
/*  Connect to database                                                */
/* ------------------------------------------------------------------ */
await connectDB();

/* ------------------------------------------------------------------ */
/*  Express app                                                        */
/* ------------------------------------------------------------------ */
const app = express();

// Security headers
app.use(helmet());

// CORS – allow the Vite dev server
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

// Request logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Body parsing
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

/* ------------------------------------------------------------------ */
/*  Routes                                                             */
/* ------------------------------------------------------------------ */
app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Seerat Gold API is running 🌶️' });
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/combos', comboRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/settings', settingRoutes);

// 404 catch-all
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use(errorHandler);

/* ------------------------------------------------------------------ */
/*  Start server                                                       */
/* ------------------------------------------------------------------ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀  Seerat Gold API listening on port ${PORT} [${process.env.NODE_ENV || 'development'}]`
  );
});

export default app;
