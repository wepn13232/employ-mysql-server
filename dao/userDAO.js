var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var userSqlMap = require('./userSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);
module.exports = {
    add: function (user, callback) {
        pool.query(userSqlMap.add, [user.userId, user.userName, user.userType, user.password], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(userSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByUserId: function (userId, callback) {
        pool.query(userSqlMap.getByUserId, userId, function (error, result) {
            if (error) throw error;
            console.log(result)
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(userSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (user, callback) {
        pool.query(userSqlMap.update, [user.userName, user.password, user.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    login: function (userId, callback) {
        pool.query(userSqlMap.login, userId, function (error, result) {
            if (error) throw error;
            callback(result)
            // if (result.length === 0) {
            //     callback(result)
            // } else {
            //     callback(result[0]);
            // }

        })
    }
};