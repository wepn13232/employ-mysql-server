var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var adminSqlMap = require('./adminSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);
module.exports = {
    add: function (admin, callback) {
        pool.query(adminSqlMap.add, [admin.adminId, admin.adminName, admin.adminType, admin.password,'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1811580024,2009798947&fm=26&gp=0.jpg'], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(adminSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByadminId: function (adminId, callback) {
        pool.query(adminSqlMap.getByAdminId, adminId, function (error, result) {
            if (error) throw error;
            console.log(result)
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(adminSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (admin, callback) {
        pool.query(adminSqlMap.update, [admin.adminName, admin.password, admin.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    updateImage: function (admin, callback) {
        pool.query(adminSqlMap.updateImage, [admin.filePath, admin.adminId], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    login: function (adminId, callback) {
        pool.query(adminSqlMap.login, adminId, function (error, result) {
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