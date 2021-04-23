var express = require("express");
var router = express.Router();
var appRoot = require('app-root-path');
var formService = require(appRoot + '/services/formService')


//get all forms 
router.get('/', (req, res, next) => {
    formService.getForms("forms", (err, result) => {
        if (err) {
            res.status(500).send(err);

        } else {
            res.send({ 'forms': result });
        }
    })
})

//get form by Id 
router.get("/:id", (req, res, next) => {
    formService.getFormsById(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

//create forms 
router.post('/', (req, res, next) => {
    formService.postForm(req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    })
});


//update forms 
router.patch('/:id', (req, res, next) => {
    formService.patchForm(req.params.id, req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

//delete form 
router.delete("/:id", (req, res, next) => {
    formService.deleteForm(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

module.exports = router;