import "reflect-metadata";
import DB_CONNECTION from "./database/Connection";
import * as Koa from "koa"
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import { router } from "./router/Router"; 
import { koaSwagger } from "koa2-swagger-ui";
var path = require('path');
const yamljs = require('yamljs');
const swagger_path =  path.resolve(__dirname,'./config/swagger.yml');
const spec = yamljs.load(swagger_path);
const app = new Koa();

app.use(koaSwagger({ 
  routePrefix:'/swagger',
  swaggerOptions: { spec } }));
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(router.middleware());


DB_CONNECTION();
app.listen(3000, () => {
    console.log("Koa started");
  })
console.log("Server is up and running at port 3000");
