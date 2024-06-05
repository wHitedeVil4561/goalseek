// eslint-disable-next-line no-undef
const {env} = process;
export const CONFIG = {
    PORT:env.PORT,
    DATABASE_USER:env.DATABASE_USER,
    DATABASE_PASSWORD:env.DATABASE_PASSWORD,
    DATABASE_NAME:env.DATABASE_NAME,
    SALT_ROUND:Number(env.SALT_ROUND),
    JWT_SECRET_KEY:env.JWT_SECRET_KEY,
    JWT_EXPIRE_IN:env.JWT_EXPIRE_IN
}