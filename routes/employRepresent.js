var express = require('express');
var router = express.Router();
var employRepresentDAO = require('../dao/employRepresentDAO');
var result = require('../model/result');
var formidable = require('formidable'); //上传功能的插件
var path = require('path');
var fs = require('fs');

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
/* get employRepresent */
router.get('/getByCounselorNo/:counselorNo', function (req, res) {
    var counselorNo = req.params.counselorNo;
    console.log('get employRepresent called, counselorNo: ' + counselorNo);
    employRepresentDAO.getByCounselorNo(counselorNo, function (employRepresent) {
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

    var uploadDir = './public/employSystem/img/';
    var viewDir = './img/'
    var form = new formidable.IncomingForm();
    //文件的编码格式
    form.encoding = 'utf-8';
    //文件的上传路径
    form.uploadDir = uploadDir;
    //文件的后缀名
    form.extensions = true;
    //文件的大小限制
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function (err, params, files) {
        //params上传的string类型的信息
        //files为上传的文件
        var stuNo = params.stuNo;
        console.log(params)
        var avatar = files.avatar;
        var oldpath = path.normalize(avatar.path); //返回正确格式的路径

        var newfilename = stuNo + avatar.name;
        var newpath = uploadDir + newfilename;

        //写入数据库的信息
        var employRepresent = {
            counselorNo: params.counselorNo,
            stuNo: params.stuNo,
            stuName: params.stuName,
            graduationYear: params.graduationYear,
            jobTitle: params.jobTitle,
            motto:params.motto,
            filePath: viewDir + newfilename
        }
        console.log(employRepresent)
        //将老的图片路径改为新的图片路径
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                console.error("改名失败" + err);
            } else {
                // userInfo.filePath = newpath;
                employRepresentDAO.add(employRepresent, function (success) {
                    var r = result.createResult('put', success, null);
                    res.json(r);
                });
            }
        });
    })
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