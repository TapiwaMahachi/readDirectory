import dotenv from 'dotenv';

/**
 * Path to the .env file
 * loading our environment variables
 */
dotenv.config({
    path: new URL('../../.env', import.meta.url)
});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 9000;