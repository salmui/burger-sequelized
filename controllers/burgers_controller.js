var express = require("express");
var router = express.Router();
var path = require("path");
var body = require("body-parser")
var db = require("../models");


router.get("/burgers", function(req, res){
	db.Burgers.findAll({}).then(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res){
	db.Burgers.create({
		burger_name: req.body.burger_name
	});
	res.redirect("/burgers");
});

router.put("/burgers/update/:id", function(req, res){

	db.Burgers.update({
		devoured: true
	}, {
		where: {
			id: req.params.id
		}
	});
		res.redirect("/burgers");
});

module.exports = router;
