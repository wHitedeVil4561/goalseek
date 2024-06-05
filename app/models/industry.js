import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const industry = sequelize.define("Industry", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  industry.association = (db)=>{
    industry.hasMany(db.Company);
  }
  return industry;
};