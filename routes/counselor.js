var express = require('express');
var router = express.Router();
var counselorDAO = require('../dao/counselorDAO');
var result = require('../model/result');

/* list counselors */
router.get('/', function (req, res) {
    console.log('list counselors called');
    counselorDAO.list(function (counselors) {
        if (counselors.length == 0) {
            res.json({
                status: '401',
                message: '用户信息为空!',
                data: []
            })
        } else {
            counselors[0].leadClass = counselors[0].leadClass.split(","); //逗号是分隔符
            res.json(result.createResult('get', true, counselors));
        }
    });
});

/* get counselor */
router.get('/getByCounselorNo/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('get counselor called, counselorNo: ' + counselorNo);
    counselorDAO.getByCounselorNo(counselorNo, function (counselor) {
        console.log(counselor)
        if (counselor.length == 0) {
            res.json({
                status: '401',
                message: '用户信息不存在!',
                data: []
            })
        } else {
            counselor = counselor[0]
            if (counselor.leadClass) {
                counselor.leadClass = counselor.leadClass.split(","); //逗号是分隔符
            }
            res.json(result.createResult('get', true, counselor));
        }
    });
});


/* delete counselor */
router.delete('/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('delete counselor called, counselorNo=' + counselorNo);
    counselorDAO.deleteByCounselorNo(counselorNo, function (success) {
        res.json(result.createResult('delete', success, null));
    });
});

/* add counselors */
router.post('/', function (req, res) {
    console.log('post counselors called');
    var counselor = req.body;
    // console.log(counselor);
    counselorDAO.add(counselor, function (success) {
        var r = result.createResult('post', success, null);
        res.json(r);
    });
});

/* update counselors */
router.put('/updateCounselorInfoByCounselorNo/:counselorNo', function (req, res) {
    console.log('update counselors called');
    var counselor = req.body;
    counselor.counselorNo = req.params.counselorNo;
    counselorDAO.update(counselor, function (success) {

        var r = result.createResult('put', success, null);
        res.json(r);
    });
});

/* patch counselors */
router.patch('/:id', function (req, res) {
    console.log('patch counselors called');
    counselorDAO.getById(req.params.id, function (counselor) {
        var counselorname = req.body.counselorname;
        if (counselorname) {
            counselor.counselorname = counselorname;
        }
        var password = req.body.password;
        if (password) {
            counselor.password = password;
        }
        console.log(counselor);
        counselorDAO.update(counselor, function (success) {
            var r = result.createResult('patch', success, null);
            res.json(r);
        });
    });
});

module.exports = router;