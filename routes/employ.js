var express = require('express');
var router = express.Router();
var employDAO = require('../dao/employDAO');
var result = require('../model/result');

/* list employ */
router.get('/', function (req, res) {
    console.log('list employ called');
    employDAO.list(function (employ) {
        res.json(result.createResult('get',true, employ));
        // console.log(res)
    });
});

/* get employ */
router.get('/getByStuNo/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('get employ called, stuNo: ' + stuNo);
    employDAO.getByStuNo(stuNo, function (employ) {
        res.json(result.createResult('get',true, employ));
    });
});


/* delete employ */
router.delete('/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('delete employ called, stuNo=' + stuNo);
    employDAO.deleteByStuNo(stuNo, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add employ */
router.post('/', function (req, res) {
    console.log('post employ called');
    var employ = req.body;
    // console.log(employ);
    employDAO.add(employ, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update employ */
router.put('/updateById/:id', function (req, res) {
    console.log('update employ called');
    var employ = req.body;
    employ.id = req.params.id;
    employDAO.update(employ, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch employ */
router.patch('/:id', function (req, res) {
    console.log('patch employ called');
    employDAO.getById(req.params.id, function (employ) {
        var employname = req.body.employname;
        if (employname) {
            employ.employname = employname;
        }
        var password = req.body.password;
        if (password) {
            employ.password = password;
        }
        console.log(employ);
        employDAO.update(employ, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;