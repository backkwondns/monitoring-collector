import dotenv from 'dotenv'

const envFile = process.env.ENVIRONMENT === 'DEV' ? `.env.dev` : '.env'

dotenv.config({path: envFile})