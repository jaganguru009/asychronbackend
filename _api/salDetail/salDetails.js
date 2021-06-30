var express = require('express')
var router = express.Router()
var appRoot = require('app-root-path')
var salaryDetailService = require(appRoot + '/services/salaryDetailService')

router.get('/', (req, res, next) => {
  if (req.query.userName != undefined) {
    salaryDetailService.getSalDetailByUserName(
      req.query.userName,
      (err, result) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send({ SalDetails: result })
        }
      }
    )
  } else {
    salaryDetailService.getSalDetail('SalDetails', (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({ SalDetail: result })
      }
    })
  }
})

//get by id
router.get('/:id', (req, res, next) => {
  salaryDetailService.getSalDetailById(req.params.id, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

//post saldata
router.post('/', (req, res, next) => {
  salaryDetailService.getSalDetailByUserName(
    req.body.userName,
    (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result))
          salaryDetailService.patchSal(result[0]._id,req.body,(err, result) => {
              if (err) {
                res.json(err)
              } else {
                res.json(result)
              }
            }
          )
        } else {
          salaryDetailService.postSalDetail(req.body, (err, result) => {
            if (err) {
              res.json(err)
            } else {
              res.json(result)
            }
          })
        }
      }
    }
  )
})

//update saldata
router.patch('/:id', (req, res, next) => {
  salaryDetailService.patchSal(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

//delete data
router.delete('/:id', (req, res, next) => {
  salaryDetailService.deleteSalDetail(req.params.id, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

module.exports = router
