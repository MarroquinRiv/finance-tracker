import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'finance_tracker_database',
  password: 'juyt5632',
  port: 5432,
});

export default pool;