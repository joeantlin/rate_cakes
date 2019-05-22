//Controller
const controller = require("./controller")

module.exports = function(app){
    app.get('/cakes', controller.allcakes)
    app.post('/cake', controller.newcake)
    app.get('/cake/:id', controller.findcake)
    app.put('/cake/:id', controller.updatecake)
    app.delete('/cake/:id', controller.deletecake)
    app.put('/review/:id', controller.addreview)
}