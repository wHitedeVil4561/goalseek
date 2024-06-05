import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from 'url'
import { Sequelize, DataTypes } from "sequelize";
import { CONFIG } from "../constant/environment.constant.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sequelize = new Sequelize(
  CONFIG.DATABASE_NAME,
  CONFIG.DATABASE_USER,
  CONFIG.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
    define:{
      underscored:true
    },
    logging: console.log,
    query:{
      raw:true
    }
  }
);
const basename = path.basename(__filename);
const db = {};
const modelFns = []
fs.readdirSync(__dirname)
  .filter(
    (file) => !file.startsWith(".") && file !== basename && file.endsWith(".js")
  )
  .forEach((file) => {
    const modelFn = import(path.join(__dirname, file));
    modelFns.push(modelFn);
  });
async function establistConnection(){
  try{
    const models = await Promise.all(modelFns);
    models.forEach((model)=>{
      const mod = model.default(sequelize,DataTypes);
      db[mod.name] = mod;
    });
    Object.keys(db).forEach((model_name) => {
      if (db[model_name].association) {
        db[model_name].association(db);
      }
    });
    sequelize
      .authenticate()
      .then(() => {
        console.log(`Database connected successfully.`);
      })
      .catch((err) => {
        console.error(err);
      });
    sequelize
      .sync({ force: false,alter:true })
      .then(() => {
        console.log("Models are synced with the database");
      })
      .catch(() => {
        console.log("error");
      });

    db.sequelize = sequelize; 
  }catch(err){
    console.error(err)
  }
}
await establistConnection();
export default db;