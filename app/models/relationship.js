import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const relationship = sequelize.define("Relationship", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  relationship.association = (db)=>{
      relationship.hasMany(db.EmployeeNominee);
  }
  return relationship;
};
