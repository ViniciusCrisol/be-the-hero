const express = require("express");
const { errors } = require("celebrate");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/* Parametros
*Tipos de parâmetros:

*Querry Params:Parâmetros nomeados na rota após o "?";
*Route Params:Usados para indentificar recursos;
*Request body:usado para criar ou alterar recursos
*/

app.listen(3333);
