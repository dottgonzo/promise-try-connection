import tryConnection = require("../index");

tryConnection().then(function(answer) {
    console.log("ok")
    console.log(answer)
}).catch(function(answer) {
    console.log("error")
    console.log(answer)
})