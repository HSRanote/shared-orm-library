
import { TypeORMModule } from '@nestjs/typeorm';

export const typeOrmConfig = {
  type: 'postgres',
  host: 'localhost', // Update with your database details
  port: 5432,
  username: 'postgres', // Update with your credentials
  password: 'password', // Update with your credentials
  database: 'my-account',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entities
  synchronize: true, // Set to false in production for migrations
};

export const TypeOrmConfigModule = TypeORMModule.forRoot(typeOrmConfig);