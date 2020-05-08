'use strict';
module.exports = (sequelize, DataTypes) => {
  const paragraph = sequelize.define('paragraph', {
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: DataTypes.TEXT,
    timesRead: DataTypes.INTEGER,
    paragraphNumber: DataTypes.INTEGER
  }, {});
  paragraph.associate = function(models) {
    paragraph.belongsTo(models.story)
  };
  return paragraph;
};