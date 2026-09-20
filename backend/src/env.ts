import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(5000),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string().default('postgres'),
  DB_PASSWORD: z.string().default('12345'),
  DB_NAME: z.string().default('morphink_db'),
  DB_SCHEMA: z.string().default('public'),
  DATABASE_URL: z.string().optional(),
  JWT_SECRET: z.string().min(16).default('morphink_sec_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1_super_strong_2026_key'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  CORS_ORIGIN: z.string().default('http://localhost:5173,http://localhost:3000,http://localhost:4173'),
  UPLOAD_DIR: z.string().default('./uploads'),
  MAX_FILE_SIZE_MB: z.coerce.number().default(25),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', JSON.stringify(parsedEnv.error.format(), null, 2));
  process.exit(1);
}

const data = parsedEnv.data;
const computedDatabaseUrl = data.DATABASE_URL || `postgresql://${data.DB_USER}:${data.DB_PASSWORD}@${data.DB_HOST}:${data.DB_PORT}/${data.DB_NAME}?schema=${data.DB_SCHEMA}`;

process.env.DATABASE_URL = computedDatabaseUrl;

export const env = {
  ...data,
  DATABASE_URL: computedDatabaseUrl,
};
