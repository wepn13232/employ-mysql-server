var express = require('express');
var router = express.Router();
var studentDAO = require('../dao/studentDAO');
var result = require('../model/result');

/* list students */
router.get('/', function (req, res) {
    console.log('list students called');
    studentDAO.list(function (students) {
        res.json(result.createResult('get',true, students));
        console.log(res)
    });
});

/* get student */
router.get('/getStuInfoByStuNo/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('get student called, stuNo: ' + stuNo);
    studentDAO.getByStuNo(stuNo, function (student) {
        res.json(result.createResult('get',true, student));
    });
});


/* delete student */
router.delete('/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('delete student called, stuNo=' + stuNo);
    studentDAO.deleteByStuNo(stuNo, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add students */
router.post('/', function (req, res) {
    console.log('post students called');
    var student = req.body;
    console.log(student);
    studentDAO.add(student, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update students */
router.put('/updateStuInfoByStuNo/:stuNo', function (req, res) {
    console.log('update students called');
    var student = req.body;
    student.stuNo = req.params.stuNo;
    studentDAO.update(student, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch students */
router.patch('/:id', function (req, res) {
    console.log('patch students called');
    studentDAO.getById(req.params.id, function (student) {
        var studentname = req.body.studentname;
        if (studentname) {
            student.studentname = studentname;
        }
        var password = req.body.password;
        if (password) {
            student.password = password;
        }
        console.log(student);
        studentDAO.update(student, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;