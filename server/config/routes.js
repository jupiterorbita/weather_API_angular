
console.log('SERVER >> CONFIG >> routes.js');
var path = require("path");


module.exports = function(app){

  // app.get('/', (req, res) => {
  //   res.json('http://api.openweathermap.org/data/2.5/weather?zip=95112,us&APPID=892b250333f671f7ddb449a0faa3ad10');
  // })

  app.all("*", (req,res,next) => {
      console.log('SERVER >> ROUTES >> "*" hit, redirecting to public/index');
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}
