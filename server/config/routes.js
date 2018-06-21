
console.log('SERVER >> CONFIG >> routes.js');
var path = require("path");


module.exports = function(app){

  app.all("*", (req,res,next) => {
      console.log('SERVER >> ROUTES >> "*" hit, redirecting to public/index');
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
