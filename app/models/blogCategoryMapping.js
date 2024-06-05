import { Sequelize } from "sequelize";

export default (sequelize) => {
  const blogCategoryMapping = sequelize.define("BlogCategoryMapping", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
  },{
    timestamps: true,
  });
  blogCategoryMapping.association = (db)=>{
    db.Blog.belongsToMany(db.BlogCategory,{through:blogCategoryMapping});
    db.BlogCategory.belongsToMany(db.Blog,{through:blogCategoryMapping})
  }
  return blogCategoryMapping;
};