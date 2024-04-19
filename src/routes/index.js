const siteRouter = require('./site');
const albumRouter = require('./album')

function route(app) {
    app.use('/album', albumRouter);
    app.use('/', siteRouter);
}

module.exports = route;