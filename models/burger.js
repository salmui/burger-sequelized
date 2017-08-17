module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true,
				len: [1,25]
			}
		},
    devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		  }
		});
		return Burgers;
	};
