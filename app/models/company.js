import { Sequelize } from "sequelize";
import { APP_CONSTANT } from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const company = sequelize.define("Company", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false
    },
    logo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    note:{
        type:DataTypes.STRING,
        allowNull:false
    },
    billingDoc:{
        type:DataTypes.STRING,
        allowNull:false
    },
    billingDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:APP_CONSTANT.STATUS.ACTIVE
    }
  },{
    timestamps:true,
    paranoid:true,
  });
  company.association = (db)=>{
    company.hasMany(db.CompanyContactPerson,{
      foreignKey: 'companyId',
    });
    company.belongsTo(db.Industry,{
      allowNull:false,
      foreignKey: 'industryId',
    });
  }
  return company;
};