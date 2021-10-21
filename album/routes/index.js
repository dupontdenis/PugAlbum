const axios = require("axios");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
	const query = await axios.get("https://randomuser.me/api/?results=11");
	res.render("index", { users: query.data.results });
});

module.exports = router;
