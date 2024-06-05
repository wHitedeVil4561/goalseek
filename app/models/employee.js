import { Sequelize } from "sequelize";
import { APP_CONSTANT } from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "Employee",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      employeeId: {
        type: DataTypes.STRING,
      },
      name: {
        type:DataTypes.STRING,
      },
      email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      phone: {
        type:DataTypes.STRING,
      },
      countryCode: {
        type:DataTypes.STRING,
        defaultValue:'+91'
      },
      dob: {
        type: DataTypes.DATE,
      },
      password: {
        type: DataTypes.STRING,
      },
      onboardStatus: {
        type: DataTypes.INTEGER,
        defaultValue: APP_CONSTANT.ONBOARD_STATUS.PENDING
      },
      secondaryEmail:{
        type: DataTypes.STRING,
      },
      secondaryPhone:{
        type: DataTypes.STRING,
      },
      secondaryCountryCode:{
        type: DataTypes.STRING,
        defaultValue: '+91'
      },
      joiningDate: {
        type:DataTypes.DATE,
      },
      role:{
        type:DataTypes.INTEGER,
        defaultValue:APP_CONSTANT.ROLE_TYPE.EMPLOYEE
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  employee.association = (db)=>{
    employee.hasOne(db.EmployeeNominee);
    employee.belongsTo(db.Gender);
    employee.belongsTo(db.City);
    employee.hasMany(db.Session);
    employee.hasOne(db.Otp,{foreignKey:'employed_id'});
    
  }
  return employee;
};
