var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var employStatisticsSqlMap = require('./employStatisticsSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (employStatistics, callback) {
        pool.query(employStatisticsSqlMap.add, [employStatistics.stuNo, employStatistics.unitName, employStatistics.unifieSocialCreditCode, employStatistics.jobName, employStatistics.pay, employStatistics.contractTime, employStatistics.workPlace, employStatistics.unitContactor, employStatistics.unitTel, 1], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(employStatisticsSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByClassNo: function (classNo, callback) {
        pool.query(employStatisticsSqlMap.getByClassNo, classNo, function (error, result) {
            if (error) throw error;
            console.log(result);
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(employStatisticsSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (employStatistics, callback) {
        console.log(employStatistics)
        pool.query(employStatisticsSqlMap.update, [employStatistics.stuNo, employStatistics.unitName, employStatistics.unifieSocialCreditCode, employStatistics.jobName, employStatistics.pay, employStatistics.contractTime, employStatistics.workPlace, employStatistics.unitContactor, employStatistics.unitTel, 1, employStatistics.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};