import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const otp = sequelize.define("Otp", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invalidAttemptCount: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    firstInvalidAttemptAt:{
        type: DataTypes.DATE,
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  otp.association = (db)=>{
    otp.belongsTo(db.Employee,{foreignKey:'employed_id'});
  }
  return otp;
};