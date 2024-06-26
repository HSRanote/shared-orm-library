import { createConnection } from 'typeorm';
import { User } from '../entities/user.entity';
import { Setting } from '../entities/setting.entity';

export const connectDatabase = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'my-account',
    entities: [User, Setting],
    synchronize: true,
  });
};
