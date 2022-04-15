const siteRoute = require('./site.route')
const courseRoute = require('./course.route')
const meRoute = require('./me.route')


// const content = require('./content.route')

// console.log(newsRoute)
function route(app) {

      
    app.use('/me', meRoute)   
    app.use('/course', courseRoute)
    app.use('/', siteRoute)
    
    // app.use('/', siteRoute)
    // app.use('/content', content)
    

    // app.get('/', (req, res) => {
    //     res.render('snew')
    // })
    
    // app.get('/tin-tuc', (req, res) => {
    //     res.render('snew')
    // })
    
    // app.get('/search', (req, res) => {
    //     console.log('query',req.query)
    //     res.render('search')
    // })
    
}

module.exports = route;