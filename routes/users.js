var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
var manageBaseDao = require('../dao/manageBaseDao')
var result = require('../model/result');
var crypto = require("crypto");
var formidable = require('formidable'); //上传功能的插件
var path = require('path');
var fs = require('fs');

/* list users */
router.get('/', function (req, res) {
    console.log('list users called');
    userDao.list(function (users) {
        res.json(result.createResult('get', true, users));
    });
});

/* get user */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('get user called, id: ' + id);
    userDao.getById(id, function (user) {
        res.json(result.createResult('get', true, user));
    });
});


/* delete user */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete user called, id=' + id);
    userDao.deleteById(id, function (success) {
        res.json(result.createResult('delete', success, null));
    });
});

/* add users */
router.post('/', function (req, res) {
    console.log('post users called');
    var user = req.body;
    userDao.getByUserId(user.userId, function (userList) {
        if (userList.length == 0) {
            userDao.add(user, function (success) {
                // manageBaseDao.addStuInfo(user)
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
/* post user by userId and password*/
router.post('/login', function (req, res) {
    var userId = req.body.userId;
    var password = req.body.password;
    console.log('post user called, userId: ' + userId);
    userDao.login(userId, function (user) {
        if (user.length == 0) {
            res.json({
                status: '401',
                message: '账户或者密码有误!',
                data: []
            })
        } else {
            var key = "ILOVEKUANGMINYI";
            var save_password = aesDecrypt(user[0].password, key);
            if (save_password == aesDecrypt(password, key)) {
                delete user[0].password //删除密码
                res.json({
                    status: '200',
                    message: '登陆成功!',
                    data: user[0]
                });
                
            }
        }
    });
});

/* update users */
router.put('/:id', function (req, res) {
    console.log('update users called');
    var user = req.body;
    // user = req.params;
    console.log(user);
    userDao.update(user, function (success) {
        var r = result.createResult('put', success, null);
        res.json(r);
    });
});

/* patch users */
router.patch('/:id', function (req, res) {
    console.log('patch users called');
    userDao.getById(req.params.id, function (user) {
        var userName = req.body.userName;
        if (userName) {
            user.userName = userName;
        }
        var password = req.body.password;
        if (password) {
            user.password = password;
        }
        console.log(user);
        userDao.update(user, function (success) {
            var r = result.createResult('patch', success, null);
            res.json(r);
        });
    });
});

//上传个人头像图片
router.post('/updateUserImage', function (req, res) {
    var uploadDir = './img/';
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
        var userId = fields.userId;
        var avatar = files.avatar;
        var oldpath = path.normalize(avatar.path); //返回正确格式的路径

        var newfilename = userId + avatar.name;
        var newpath = uploadDir + newfilename;

        //写入数据库的信息
        var userInfo = {
            userId: userId,
        }
        //将老的图片路径改为新的图片路径
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                console.error("改名失败" + err);
            } else {
                userInfo.filePath = newpath;
                userDao.updateImage(userInfo, function (success) {
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