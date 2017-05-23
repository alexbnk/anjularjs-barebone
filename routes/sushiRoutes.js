var express = require('express');
var router = express.Router();

var Sushi = require('../models/sushiModel');

// --------------------- START  api endpoint ------------------


//GET ALL
router.get('/', function(req, res, next) {
    Sushi.find({}, {}, function(error, sushis) {
        if (error) {
            console.error(error);
            return next(error);
        } else {
            res.send(sushis);
            //console.log("get all provided");
        }
    });
});

//
//
router.get('/:id', function(req, res, next) {
    Sushi.findById(req.params.id).exec(function(error, sushi) {
        if (error) {
            console.error(error);
            return next(error);
        } else {
            if (sushi) {
                res.send(sushi);
            } else {
                res.send('no items');
            }
            //console.log("books provided");
        }
    });
});
//
// router.get('/car/:id', function(req, res, next) {
//     Car.findById(req.params.id).populate('carMake carOptions carWorks carProblems carCurrentOwner carPhotos carPoster carPurchasePriceCurrency').exec(function(error, car) {
//         if (error) {
//             console.error(error);
//             return next(error);
//         } else {
//
//             res.send(car);
//             //console.log("books provided");
//         }
//     });
// });
//
//
//
//
//
//
//
//
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//     Car.create(req.body, function(err, car) {
//         if (err) {
//             console.error(err);
//             return next(err);
//         } else {
//             res.send(car);
//             console.log("respond with the created car:", car);
//             //console.log(car);
//         }
//     });
//   // } else {
//   //   res.send({error:"null not allowed"});
//   // }
// });

// --------------------- END car api endpoint ------------------


module.exports = router;
