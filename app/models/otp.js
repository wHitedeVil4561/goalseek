import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const otp = sequelize.define("Otp", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invalidAttemptCount: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    attemptAt:{
        type: DataTypes.DATE,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  otp.association = (db)=>{
    otp.belongsTo(db.Employee);
  }
  return otp;
};