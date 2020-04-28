var express = require('express');
var router = express.Router();
var adminDao = require('../dao/adminDao');
var manageBaseDao = require('../dao/manageBaseDao')
var result = require('../model/result');
var crypto = require("crypto");
var formidable = require('formidable'); //上传功能的插件
var path = require('path');
var fs = require('fs');

/* list admins */
router.get('/', function (req, res) {
    console.log('list admins called');
    adminDao.list(function (admins) {
        res.json(result.createResult('get', true, admins));
    });
});

/* get admin */
router.get('/:adminId', function (req, res) {
    var adminId = req.params.adminId;
    console.log('get admin called, adminId: ' + adminId);
    adminDao.getByAdminId(adminId, function (admin) {
        // console.log("===============")
        // console.log(admin[0])
        delete admin[0].password //删除密码
        res.json(result.createResult('get', true, admin[0]));
    });
});


/* delete admin */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete admin called, id=' + id);
    adminDao.deleteById(id, function (success) {
        res.json(result.createResult('delete', success, null));
    });
});

/* add admins */
router.post('/', function (req, res) {
    console.log('post admins called');
    var admin = req.body;
    adminDao.getByAdminId(admin.adminId, function (adminList) {
        if (adminList.length == 0) {
            adminDao.add(admin, function (success) {
                // manageBaseDao.addStuInfo(admin)
                var r = result.createResult('post', success, null);
                res.json(r);
            });
        } else {
            res.json({
                status: '401',
                message: "用户数据已存在",
                data: []
            });
        }
    })

});
/* post admin by adminId and password*/
router.post('/login', function (req, res) {
    var adminId = req.body.adminId;
    var password = req.body.password;
    console.log('post admin called, adminId: ' + adminId);
    adminDao.login(adminId, function (admin) {
        if (admin.length == 0) {
            res.json({
                status: '401',
                message: '账户或者密码有误!',
                data: []
            })
        } else {
            var key = "ILOVEKUANGMINYI";
            var save_password = aesDecrypt(admin[0].password, key);
            if (save_password == aesDecrypt(password, key)) {
                delete admin[0].password //删除密码
                res.json({
                    status: '200',
                    message: '登陆成功!',
                    data: admin[0]
                });

            }
        }
    });
});

/* update admins */
router.put('/:id', function (req, res) {
    console.log('update admins called');
    var admin = req.body;
    // admin = req.params;
    console.log(admin);
    adminDao.update(admin, function (success) {
        var r = result.createResult('put', success, null);
        res.json(r);
    });
});

/* patch admins */
router.patch('/:id', function (req, res) {
    console.log('patch admins called');
    adminDao.getById(req.params.id, function (admin) {
        var adminName = req.body.adminName;
        if (adminName) {
            admin.adminName = adminName;
        }
        var password = req.body.password;
        if (password) {
            admin.password = password;
        }
        console.log(admin);
        adminDao.update(admin, function (success) {
            var r = result.createResult('patch', success, null);
            res.json(r);
        });
    });
});

//上传个人头像图片
router.post('/updateAdminImage', function (req, res) {
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
    form.parse(req, function (err, fields, files) {
        //fields上传的string类型的信息
        //files为上传的文件
        var adminId = fields.adminId;
        var avatar = files.avatar;
        var oldpath = path.normalize(avatar.path); //返回正确格式的路径

        var newfilename = adminId + avatar.name;
        var newpath = uploadDir + newfilename;

        //写入数据库的信息
        var adminInfo = {
            adminId: adminId,
            filePath: viewDir + newfilename
        }
        //将老的图片路径改为新的图片路径
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                console.error("改名失败" + err);
            } else {
                // adminInfo.filePath = newpath;
                adminDao.updateImage(adminInfo, function (success) {
                    var r = result.createResult('put', success, null);
                    res.json(r);
                });
            }
        });
    })

});


module.exports = router;

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}