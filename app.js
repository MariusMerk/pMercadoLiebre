const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en puerto 3000, CTRL+C para detener"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/home.html"));
});

app.get("/ofertas", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/home.html"));
});

app.get("/crearCuenta", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});

app.get("/ingresar", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/login.html"));
});

//app.use('/static', express.static(__dirname + '/public'));