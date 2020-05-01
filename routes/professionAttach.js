var express = require('express');
var router = express.Router();
var professionAttachDAO = require('../dao/professionAttachDAO');
var manageBaseDao = require('../dao/manageBaseDao')
var result = require('../model/result');

/* list professionAttach */
router.get('/', function (req, res) {
    console.log('list professionAttach called');
    professionAttachDAO.list(function (professionAttach) {
        res.json(result.createResult('get', true, professionAttach));
        // console.log(res)
    });
});

/* get professionAttach */
router.get('/getByKey/', function (req, res) {
    var params = {
        session: req.query.session ? req.query.session : null,
        departmentKey: req.query.departmentKey ? req.query.departmentKey : null,
        professionKey: req.query.professionKey ? req.query.professionKey : null,
        classKey: req.query.classKey ? req.query.classKey : null,
        currPage: req.query.currPage ? req.query.currPage : 1,
        pageRowNum: req.query.pageRowNum ? req.query.pageRowNum : 999,
        totalRow: req.query.totalRow ? req.query.totalRow : null
    }
    var pageObj = {}
    professionAttachDAO.getByKey(params, function (professionAttach) {
        console.log(professionAttach)
        pageObj.totalRow = professionAttach[1][0].totalRow;
        pageObj.currPage = params.currPage * 1;
        pageObj.pageRowNum = params.pageRowNum * 1;
        attachList = {
            attachList: professionAttach[0],
            pageObj
        }
        res.json(result.createResult('get', true, attachList));
    });
});


/* delete professionAttach */
router.delete('/:attachId', function (req, res) {
    var attachId = req.params.attachId;
    console.log('delete professionAttach called, attachId=' + attachId);
    professionAttachDAO.deleteByAttachId(attachId, function (success) {
        res.json(result.createResult('delete', success, null));
    });
});

/* add professionAttach */
router.post('/', function (req, res) {
    console.log('post professionAttach called');
    var professionAttach = req.body;
    // console.log(professionAttach);
    professionAttachDAO.add(professionAttach, function (success) {
        // manageBaseDao.addprofessionAttachStatistics(professionAttach.stuNo) //同步就业统计数据信息
        var r = result.createResult('post', success, null);
        res.json(r);
    });
});

/* update professionAttach */
router.put('/:attachId', function (req, res) {
    console.log('update professionAttach called');
    var professionAttach = req.body;
    professionAttach.attachId = req.params.attachId;
    professionAttachDAO.update(professionAttach, function (success) {
        // manageBaseDao.updateprofessionAttachStatistics(professionAttach) //同步就业统计数据信息
        var r = result.createResult('put', success, null);
        res.json(r);
    });
});

/* patch professionAttach */
router.patch('/:id', function (req, res) {
    console.log('patch professionAttach called');
    professionAttachDAO.getById(req.params.id, function (professionAttach) {
        var professionAttachname = req.body.professionAttachname;
        if (professionAttachname) {
            professionAttach.professionAttachname = professionAttachname;
        }
        var password = req.body.password;
        if (password) {
            professionAttach.password = password;
        }
        console.log(professionAttach);
        professionAttachDAO.update(professionAttach, function (success) {
            var r = result.createResult('patch', success, null);
            res.json(r);
        });
    });
});

module.exports = router;