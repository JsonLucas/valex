import 'dotenv/config';

export const port = process.env.PORT || 5000;
export const connectionString = process.env.DATABASE_URL;