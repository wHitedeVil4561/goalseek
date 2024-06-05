import { Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const blogCategory = sequelize.define(
    "BlogCategory",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  return blogCategory;
};
