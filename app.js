require('app-module-path').addPath(__dirname + '/src')
const config = require('config')

const Koa        = require('koa')
const bodyparser = require('koa-bodyparser')
const json       = require('koa-json')
const logger     = require('koa-logger')
const router     = require('router')
const errors	 = require('middleware/errors')

const app = new Koa()
app
.use(bodyparser())
.use(json())
.use(errors)
.use(logger())
.use(router.routes())
.use(router.allowedMethods())

const PORT = config.get('app.port');
app.listen(PORT,function(){
	console.log("Server listening on port "+PORT)
});