var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var classSqlMap = require('./classSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (classParam, callback) {
        pool.query(classSqlMap.add, [classParam.classNo,classParam.counselorNo,classParam.className,classParam.professionNo,classParam.professionName,classParam.classNum,classParam.employNum,classParam.monitor,classParam.monitorTel], function (error, result) {
            if (error) throw error;
            // console.log("++++++++++cl")
            // console.log(result)
            // console.log("==========")
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(classSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByStuNo: function (stuNO, callback) {
        pool.query(classSqlMap.getByStuNo, stuNO, function (error, result) {
            if (error) throw error;
            console.log(result[0]);
            callback(result[0]);
        });
    },
    deleteById: function (id, callback) {
        pool.query(classSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (classParam, callback) {
        console.log(classParam)
        pool.query(classSqlMap.update, [], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};