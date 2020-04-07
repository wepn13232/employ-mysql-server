var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO');
var result = require('../model/result');

/* list users */
router.get('/', function (req, res) {
    console.log('list users called');
    userDAO.list(function (users) {
        res.json(result.createResult('get', true, users));
    });
});

/* get user */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('get user called, id: ' + id);
    userDAO.getById(id, function (user) {
        res.json(result.createResult('get', true, user));
    });
});


/* delete user */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete user called, id=' + id);
    userDAO.deleteById(id, function (success) {
        res.json(result.createResult('delete', success, null));
    });
});

/* add users */
router.post('/', function (req, res) {
    console.log('post users called');
    var user = req.body;
    console.log(user);
    userDAO.add(user, function (success) {
        var r = result.createResult('post', success, null);
        res.json(r);
    });
});
/* post user by userId and password*/
router.post('/login', function (req, res) {
    var userId = req.body.userId;
    var password = req.body.password;
    console.log('post user called, userId: ' + userId);
    userDAO.login(userId, password, function (user) {
        if (user.length == 0) {
            res.json({
                status: '401',
                message: '账户或者密码有误!',
                data: []
            })
        } else {
            delete user.password //删除密码
            res.json({
                status: '200',
                message: '登陆成功!',
                data: user
            });
        }
    });
});

/* update users */
router.put('/:id', function (req, res) {
    console.log('update users called');
    var user = req.body;
    user.id = req.params.id;
    console.log(user);
    userDAO.update(user, function (success) {
        var r = result.createResult('put', success, null);
        res.json(r);
    });
});

/* patch users */
router.patch('/:id', function (req, res) {
    console.log('patch users called');
    userDAO.getById(req.params.id, function (user) {
        var username = req.body.username;
        if (username) {
            user.username = username;
        }
        var password = req.body.password;
        if (password) {
            user.password = password;
        }
        console.log(user);
        userDAO.update(user, function (success) {
            var r = result.createResult('patch', success, null);
            res.json(r);
        });
    });
});

module.exports = router;