import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const companyContactPerson = sequelize.define("CompanyContactPerson", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  companyContactPerson.association = (db) =>{
    companyContactPerson.belongsTo(db.Company,{
        allowNull:false
    });
  }
  return companyContactPerson;
};