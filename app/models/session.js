import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const session = sequelize.define("Session", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    deviceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deviceType: {
      type: DataTypes.STRING,
      allowNull:false
    },
    deviceToken:{
        type: DataTypes.STRING,
        allowNull:false
    },
    token:{
        type:DataTypes.STRING,
        allowNull:false
    },
  },{
    timestamps:true,
    paranoid:true,
  });
  session.association = (db)=>{
    session.belongsTo(db.Employee);
  }
  return session;
};