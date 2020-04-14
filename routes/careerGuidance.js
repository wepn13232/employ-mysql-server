var express = require('express');
var router = express.Router();
var careerGuidanceDAO = require('../dao/careerGuidanceDAO');
var result = require('../model/result');

/* list careerGuidance */
router.get('/', function (req, res) {
    console.log('list careerGuidance called');
    careerGuidanceDAO.list(function (careerGuidanceList) {
        res.json(result.createResult('get',true, careerGuidanceList));
        // console.log(res)
    });
});

/* get careerGuidance */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('get careerGuidance called, id: ' + id);
    careerGuidanceDAO.getById(id, function (careerGuidanceList) {
        res.json(result.createResult('get',true, careerGuidanceList));
    });
});
/* get careerGuidance by getByCounselorNo*/
router.get('/getByCounselorNo/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('get careerGuidance called, counselorNo: ' + counselorNo);
    careerGuidanceDAO.getByCounselorNo(counselorNo, function (careerGuidanceList) {
        console.log(careerGuidanceList)
        res.json(result.createResult('get',true, careerGuidanceList));
    });
});


/* delete careerGuidance */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete careerGuidance called, id=' + id);
    careerGuidanceDAO.deleteById(id, function (success) {
        res.json(result.createResult('delete',success, null));
    });
});

/* add careerGuidance */
router.post('/', function (req, res) {
    console.log('post careerGuidance called');
    var careerGuidanceParam = req.body;
    console.log(careerGuidanceParam);
    careerGuidanceDAO.add(careerGuidanceParam, function (success) {
        var r = result.createResult('post',success, null);
        res.json(r);
    });
});

/* update careerGuidance */
router.put('/updateById/:id', function (req, res) {
    console.log('update careerGuidance called');
    var careerGuidanceParam = req.body;
    careerGuidanceParam.id = req.params.id;
    careerGuidanceDAO.update(careerGuidanceParam, function (success) {
        var r = result.createResult('put',success, null);
        res.json(r);
    });
});

/* patch careerGuidance */
router.patch('/:id', function (req, res) {
    console.log('patch careerGuidance called');
    careerGuidanceDAO.getById(req.params.id, function (careerGuidanceList) {
        var careerGuidancename = req.body.careerGuidancename;
        if (careerGuidancename) {
            careerGuidanceList.careerGuidancename = careerGuidancename;
        }
        var password = req.body.password;
        if (password) {
            careerGuidanceList.password = password;
        }
        console.log(careerGuidanceList);
        careerGuidanceDAO.update(careerGuidanceList, function (success) {
            var r = result.createResult('patch',success, null);
            res.json(r);
        });
    });
});

module.exports = router;