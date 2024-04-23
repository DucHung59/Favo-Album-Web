const siteRouter = require('./site');
const meRouter = require('./me')
const albumRouter = require('./album')

function route(app) {
    app.use('/album', albumRouter);
    app.use('/me', meRouter)
    app.use('/', siteRouter);
}

module.exports = route;