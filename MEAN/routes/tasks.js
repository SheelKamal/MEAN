var express = require('express');
var router = express.Router();

 var mongojs = require('mongojs');
 //var db = mongojs('mongodb://sheel:sheel@ds157479.mlab.com:57479/myproject_sheel',['tasks']);
var db = mongojs('mongodb://localhost/test',['tasks']);

//FETCH TASKs
router.get('/tasks',function(req, res, next){
   db.tasks.find(function(err, tasks){

        if(err){
            res.send(err);
        }
        res.json(tasks);

    });
});

//GET ONE TASK
router.get('/tasks/:id',function(req, res, next){
   db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){

        if(err){
            res.send(err);
        }
        res.json(task);

    });
});

//CREATE TASK
router.post('/task',function(req, res, next){
    var task = req.body;
    if(!task.name){
        res.status(400);
        res.json({
            "error":"bad data"
        })
    }else{
        db.tasks.save(task,function(err, task){

            if(err){
                res.send(err);
            }
            res.json(task);

        });

    }
});

//DELETE TASK
// router.remove('/tasks/:id',function(req, res, next){
//    db.tasks.delete({_id: mongojs.ObjectId(req.params.id)},function(err, task){

//         if(err){
//             res.send(err);
//         }
//         res.json(task);

//     });
// });

//UPDATE TASK
router.put('/tasks/:id',function(req, res, next){
   var task = req.body;
   var updTask = {};
   if(task.name){
       updTask.name = task.name;
   }
   if(!updTask){
        res.status(400);
        res.json({
            "error":"bad data"
        })
   }else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask,{},function(err, task){

            if(err){
               res.send(err);
          }
         res.json(task);

     });
    }
});
module.exports = router;