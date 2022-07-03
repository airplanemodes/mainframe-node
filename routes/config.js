const postsRoute = require('./posts');
const usersRoute = require('./users');

exports.routes = (app) => {
    app.use('/posts', postsRoute);
    app.use('/users', usersRoute);

    app.use((req,res) => {
        res.json({msg:'404 Page not found'});
    })
}