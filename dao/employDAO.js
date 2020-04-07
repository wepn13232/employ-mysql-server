var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var employSqlMap = require('./employSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (employ, callback) {
        pool.query(employSqlMap.add, [employ.stuNo, employ.unitName, employ.unifieSocialCreditCode, employ.jobName, employ.pay, employ.contractTime, employ.workPlace, employ.unitContactor, employ.unitTel, 1], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(employSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByStuNo: function (stuNO, callback) {
        pool.query(employSqlMap.getByStuNo, stuNO, function (error, result) {
            if (error) throw error;
            console.log(result[0]);
            callback(result[0]);
        });
    },
    deleteById: function (id, callback) {
        pool.query(employSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (employ, callback) {
        console.log(employ)
        pool.query(employSqlMap.update, [employ.stuNo, employ.unitName, employ.unifieSocialCreditCode, employ.jobName, employ.pay, employ.contractTime, employ.workPlace, employ.unitContactor, employ.unitTel, 1, employ.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};