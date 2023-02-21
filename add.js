var http = require("http");
var express = require("express");
var bodyParser = require("body-parser"); // ınputtan verı almamıza yarıyor
var _ = require("underscore");
// underscore ne işe yarıyor ?
// underscore body parser ıle gelen verileri parçalayıp istediğimizi almamıza yarıyor

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var person = [
  { name: "Kübra", surname: "Karsavuran", country: "Ankara" },
  { name: "Ali", surname: "veli", country: "çankırı" },
];

app.get("/api/veriler", function (request, response) {
  response.send(person);
});

app.post("/api/cities", function (request, response) {
  var insan = request.body;
  console.log(insan);

  for (var index = 0; index < person.length; index++) {
    if (person[index].name === insan.name) {
      response.status(500).send({ error: "Bu şehir zaten mevcut...!!!" });
      return;
    }
  }

  person.push(insan);
  response.send(person);
});

app.listen(3000, function () {
  console.log("server a bağlanıldı");
});
