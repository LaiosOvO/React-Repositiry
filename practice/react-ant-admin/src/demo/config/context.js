const key = import.meta.env.VITE_SOME_KEY
const mode = import.meta.env.NODE_ENV
const DB_HOST = import.meta.env.DB_HOST


const Configuration = {
    mode: mode ,
    someKey: key,
    DB_HOST: DB_HOST
}

console.log(Configuration)

export default Configuration;
