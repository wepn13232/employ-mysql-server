var express = require('express');
var router = express.Router();
var employRepresentDAO = require('../dao/employRepresentDAO');
var result = require('../model/result');

/* list employRepresent */
router.get('/', function (req, res) {
    console.log('list employRepresent called');
    employRepresentDAO.list(function (employRepresent) {
        res.json(result.createResult('get',true, employRepresent));
        // console.log(res)
    });
});

/* get employRepresent */
router.get('/getByGraduationYear/:graduationYear', function (req, res) {
    var graduationYear = req.params.graduationYear;
    console.log('get employRepresent called, graduationYear: ' + graduationYear);
    employRepresentDAO.getByGraduationYear(graduationYear, function (employRepresent) {
        res.json(result.createResult('get',true, employRepresent));
    });
});


/* delete employRepresent */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete employRepresent called, id=' + id);
    employRepresentDAO.deleteById(id, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add employRepresent */
router.post('/', function (req, res) {
    console.log('post employRepresent called');
    var employRepresent = req.body;
    // console.log(employRepresent);
    employRepresentDAO.add(employRepresent, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update employRepresent */
router.put('/updateById/:id', function (req, res) {
    console.log('update employRepresent called');
    var employRepresent = req.body;
    employRepresent.id = req.params.id;
    employRepresentDAO.update(employRepresent, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch employRepresent */
router.patch('/:id', function (req, res) {
    console.log('patch employRepresent called');
    employRepresentDAO.getById(req.params.id, function (employRepresent) {
        var employRepresentname = req.body.employRepresentname;
        if (employRepresentname) {
            employRepresent.employRepresentname = employRepresentname;
        }
        var password = req.body.password;
        if (password) {
            employRepresent.password = password;
        }
        console.log(employRepresent);
        employRepresentDAO.update(employRepresent, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;