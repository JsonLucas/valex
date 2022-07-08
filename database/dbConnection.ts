import pg from 'pg';
import { connectionString } from '../utils/envConfig';

const { Pool } = pg;
const dbConnection = new Pool({
    connectionString: connectionString
});

export default dbConnection;