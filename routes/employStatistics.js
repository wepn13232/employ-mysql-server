var express = require('express');
var router = express.Router();
var employStatisticsDAO = require('../dao/employStatisticsDAO');
var result = require('../model/result');

/* list employStatistics */
router.get('/', function (req, res) {
    employParams = req.query
    console.log('list employStatistics called',employParams);
    employStatisticsDAO.list(employParams,function (employStatistics) {
        res.json(result.createResult('get',true, employStatistics));
        // console.log(res)
    });
});

/* get employStatistics */
router.get('/:classNo', function (req, res) {
    var classNo = req.params.classNo;
    console.log('get employStatistics called, classNo: ' + classNo);
    employStatisticsDAO.getByClassNo(classNo, function (employStatistics) {
        res.json(result.createResult('get',true, employStatistics));
    });
});


/* delete employStatistics */
router.delete('/:stuNo', function (req, res) {
    var stuNo = req.params.stuNo;
    console.log('delete employStatistics called, stuNo=' + stuNo);
    employStatisticsDAO.deleteByStuNo(stuNo, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add employStatistics */
router.post('/', function (req, res) {
    console.log('post employStatistics called');
    var employStatistics = req.body;
    // console.log(employStatistics);
    employStatisticsDAO.add(employStatistics, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update employStatistics */
router.put('/updateById/:id', function (req, res) {
    console.log('update employStatistics called');
    var employStatistics = req.body;
    employStatistics.id = req.params.id;
    employStatisticsDAO.update(employStatistics, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch employStatistics */
router.patch('/:id', function (req, res) {
    console.log('patch employStatistics called');
    employStatisticsDAO.getById(req.params.id, function (employStatistics) {
        var employStatisticsname = req.body.employStatisticsname;
        if (employStatisticsname) {
            employStatistics.employStatisticsname = employStatisticsname;
        }
        var password = req.body.password;
        if (password) {
            employStatistics.password = password;
        }
        console.log(employStatistics);
        employStatisticsDAO.update(employStatistics, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;