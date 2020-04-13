var express = require('express');
var router = express.Router();
var recruitmentDAO = require('../dao/recruitmentDAO');
var result = require('../model/result');

/* list recruitment */
router.get('/', function (req, res) {
    console.log('list recruitment called');
    recruitmentDAO.list(function (recruitmentList) {
        res.json(result.createResult('get',true, recruitmentList));
        console.log(res)
    });
});

/* get recruitment */
router.get('/getByid/:id', function (req, res) {
    var id = req.params.id;
    console.log('get recruitment called, id: ' + id);
    recruitmentDAO.getById(id, function (recruitmentList) {
        res.json(result.createResult('get',true, recruitmentList));
    });
});
/* get recruitment by getByCounselorNo*/
router.get('/getByCounselorNo/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('get recruitment called, counselorNo: ' + counselorNo);
    recruitmentDAO.getByCounselorNo(counselorNo, function (recruitmentList) {
        // console.log(recruitmentList)
        res.json(result.createResult('get',true, recruitmentList));
    });
});


/* delete recruitment */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete recruitment called, id=' + id);
    recruitmentDAO.deleteById(id, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add recruitment */
router.post('/', function (req, res) {
    console.log('post recruitment called');
    var recruitmentParam = req.body;
    recruitmentDAO.add(recruitmentParam, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update recruitment */
router.put('/updateById/:id', function (req, res) {
    console.log('update recruitment called');
    var recruitmentParam = req.body;
    recruitmentParam.id = req.params.id;
    recruitmentDAO.update(recruitmentParam, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch recruitment */
router.patch('/:id', function (req, res) {
    console.log('patch recruitment called');
    recruitmentDAO.getById(req.params.id, function (recruitmentList) {
        var recruitmentname = req.body.recruitmentname;
        if (recruitmentname) {
            recruitmentList.recruitmentname = recruitmentname;
        }
        var password = req.body.password;
        if (password) {
            recruitmentList.password = password;
        }
        console.log(recruitmentList);
        recruitmentDAO.update(recruitmentList, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;