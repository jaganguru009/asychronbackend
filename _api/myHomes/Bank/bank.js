var express = require("express");
var appRoot = require("app-root-path");
const e = require("express");
var bankService = require(appRoot + '/services/bankService');
var router = express.Router()


//get bank details

router.get('/', (req, res, next) => {
    if (req.query.userName != undefined) {
        bankService.getDetailsByUserName(req.query.userName, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send({ 'Details': result });
            }
        })
    }
    else {
        bankService.getDetails("Details", (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send({ 'Details': result });
            }
        })
    }

})

//get bank details by id 
router.get('/:id', (req, res, next) => {
    bankService.getDetailsById(req.params.id, (err, result) => {

        if (err) {
            res.json(err);
        }
        else {
            res.json(result)
        }

    })
})

//post bank details
router.post('/', (req, res, next) => {
    bankService.getDetailsByUserName(req.body.userName, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length > 0) {
                console.log(JSON.stringify(result))
                bankService.patchDetail(result[0]._id, req.body, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(result);
                    }
                })
            } else {

                bankService.postDetails(req.body, (err, result) => {

                    if (err) {
                        res.json(err);
                    } else {
                        res.json(result);
                    }
                })
            }
        }
    })
})

//update details 
router.patch('/:id', (req, res, next) => {

    bankService.patchDetail(req.params.id, req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })

})

//delete bankdetails 
router.delete('/:id', (req, res, next) => {

    bankService.deleteDetails(req.params.id, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})


module.exports = router;

