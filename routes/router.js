//creates the launch page that takes in your information
var launch = function(req, res){
	res.render('index.ejs', {});
}

var routes = {
	launch: launch
}

module.exports = routes;