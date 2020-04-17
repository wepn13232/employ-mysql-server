var express = require('express');
var router = express.Router();
var classDAO = require('../dao/classDAO');
var manageBaseDao = require('../dao/manageBaseDao')
var result = require('../model/result');

/* list class */
router.get('/', function (req, res) {
    console.log('list class called');
    classDAO.list(function (classList) {
        res.json(result.createResult('get',true, classList));
        console.log(res)
    });
});

/* get class */
router.get('/getByid/:id', function (req, res) {
    var id = req.params.id;
    console.log('get class called, id: ' + id);
    classDAO.getById(id, function (classList) {
        res.json(result.createResult('get',true, classList));
    });
});
/* get class by getByCounselorNo*/
router.get('/getByCounselorNo/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('get class called, counselorNo: ' + counselorNo);
    classDAO.getByCounselorNo(counselorNo, function (classList) {
        res.json(result.createResult('get',true, classList));
    });
});


/* delete class */
router.delete('/:id/:counselorNo', function (req, res) {
    var id = req.params.id;
    var counselorNo = req.params.counselorNo;
    console.log(classParam)
    console.log('delete class called, id=' + id);
    classDAO.deleteById(id, function (success) {
        manageBaseDao.updateLeadClass(counselorNo)//删除班级的时候同步辅导带领的班级信息
        res.json(result.createResult('delete',success, null));
    });
});

/* add class */
router.post('/', function (req, res) {
    console.log('post class called');
    var classParam = req.body;
    // console.log(classParam);
    classDAO.getByClassNo(classParam.classNo,function(classList){
        if(classList.length == 0){
            classDAO.add(classParam, function (success) {
                manageBaseDao.updateLeadClass(classParam.counselorNo)
                var r = result.createResult('post',success, null);
                res.json(r);
            });
        }else{
            res.json(
                {
                    status: '401',
                    message: "班级数据已存在",
                    data:[]
                }
            );
        }
    })
    
});

/* update class */
router.put('/updateById/:id', function (req, res) {
    console.log('update class called');
    var classParam = req.body;
    classParam.id = req.params.id;
    classDAO.update(classParam, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch class */
router.patch('/:id', function (req, res) {
    console.log('patch class called');
    classDAO.getById(req.params.id, function (classList) {
        var classname = req.body.classname;
        if (classname) {
            classList.classname = classname;
        }
        var password = req.body.password;
        if (password) {
            classList.password = password;
        }
        console.log(classList);
        classDAO.update(classList, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;