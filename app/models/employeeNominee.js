import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const employeeNominee = sequelize.define(
    "EmployeeNominee",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  employeeNominee.association = (db)=>{
    employeeNominee.belongsTo(db.Employee);
    employeeNominee.belongsTo(db.Relationship);
  }
  return employeeNominee;
};
