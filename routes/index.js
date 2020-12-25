var express = require('express');
const { app } = require('firebase-admin');
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("../firebase/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://apiplace-299105-default-rtdb.firebaseio.com"
});

var db = admin.database();


router.get('/', function(req, res, next) {

    var ref = db.ref('/users/' + 'nhan');
    ref.once("value", function(snapshot) {
        // console.log(snapshot.val());
        res.json(snapshot.val());
    });
});



module.exports = router;