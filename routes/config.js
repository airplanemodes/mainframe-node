const postsRoute = require('./posts');
const usersRoute = require('./users');
const loginRoute = require('./login');
const userdataRoute = require('./userdata');

exports.originAllow = (app) => {
    app.all('*', function (req, res, next) {
        if (!req.get('Origin')) return next();
        res.set('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
        res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token');
        next();
    });
}

exports.routes = (app) => {
    app.use('/posts', postsRoute);
    app.use('/users', usersRoute);
    app.use('/login', loginRoute);
    app.use('/userdata', userdataRoute)

    app.use((req, res) => {
        res.json({msg:'404 Page not found'});
    });
}