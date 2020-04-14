var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var userSqlMap = require('./userSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);
module.exports = {
    add: function (user, callback) {
        pool.query(userSqlMap.add, [user.username, user.password], function (error, result) {
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
    getById: function (id, callback) {
        pool.query(userSqlMap.getById, id, function (error, result) {
            if (error) throw error;
            callback(result[0]);
        });
    },
    deleteById: function (id, callback) {
        pool.query(userSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (user, callback) {
        pool.query(userSqlMap.update, [user.username, user.password, user.id], function (error, result) {
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