// data-source.ts
import { DataSource } from 'typeorm';
import { User } from './users/user.entity'; // Import your entities

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '5458',
  database: 'inst_db',
  entities: [User],
  migrations: ['dist/migrations/*.js'], // Ensure migrations are included
  synchronize: false, // MUST be false when using migrations in production
  logging: true,
});

export { AppDataSource };
