import { Sequelize } from "sequelize";
import  { APP_CONSTANT }  from "../constant/app.constant.js";

export default (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "Blog",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      proposedBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proposedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      approvedBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      approvedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      coverImg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contentMediaType: {
        type: DataTypes.INTEGER,
        defaultValue: APP_CONSTANT.MEDIA.IMG
      },
      contentMediaUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      keyTakeaway: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  return blog;
};
