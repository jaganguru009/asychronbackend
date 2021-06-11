const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");
const taskService = require(appRoot + "/services/taskService");

//get all task
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    taskService.getTaskByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ Task: result });
      }
    });
  } else {
    taskService.getTask("tasks", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ tasks: result });
      }
    });
  }
});

//get all tasks by id
router.get("/:id", (req, res, next) => {
  taskService.getTaskById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// post by username
router.post("/", (req, res, next) => {
  taskService.getTaskByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }  else {
        taskService.postTask(req.body, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      }
    })
  });



//patch update task

router.patch("/:id", (req, res) => {
  taskService.updateTask(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//delete task from list

router.delete("/:id", (req, res) => {
  taskService.deleteTask(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
