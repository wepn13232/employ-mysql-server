var express = require('express');
var router = express.Router();
var classDAO = require('../dao/classDAO');
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
router.get('/getclassInfoByStuNo/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('get class called, stuNo: ' + stuNo);
    classDAO.getByStuNo(stuNo, function (classList) {
        res.json(result.createResult('get',true, classList));
    });
});


/* delete class */
router.delete('/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('delete class called, stuNo=' + stuNo);
    classDAO.deleteByStuNo(stuNo, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add class */
router.post('/', function (req, res) {
    console.log('post class called');
    var classParam = req.body;
    console.log(classParam);
    classDAO.add(classParam, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update class */
router.put('/updateclassInfoById/:id', function (req, res) {
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