"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
app.use(function (ctx) {
    ctx.body = 'Hello Koa';
});
app.listen(3200, function () { return console.log('http://localhost:3200'); });
//# sourceMappingURL=app.js.map