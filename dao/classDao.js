var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var classSqlMap = require('./classSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (classParam, callback) {
        pool.query(classSqlMap.add, [classParam.classNo,classParam.counselorNo,classParam.className,classParam.professionNo,classParam.professionName,classParam.classNum,classParam.employNum,classParam.monitor,classParam.monitorTel,classParam.counselorNo,classParam.counselorNo], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(classSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getById: function (id, callback) {
        pool.query(classSqlMap.getById, id, function (error, result) {
            if (error) throw error;
            console.log(result[0]);
            callback(result[0]);
        });
    },
    getByCounselorNo: function(counselorNo,callback){
        pool.query(classSqlMap.getByCounselorNo,counselorNo,function(error,result){
            if(error) throw error;
            callback(result)
        })
    },
    getByClassNo: function (classNo, callback) {
        pool.query(classSqlMap.getByClassNo, classNo, function (error, result) {
            if (error) throw error;
            console.log(result);
            callback(result);
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
        pool.query(classSqlMap.update, [classParam.classNo,classParam.counselorNo,classParam.className,classParam.professionNo,classParam.professionName,classParam.classNum,classParam.employNum,classParam.monitor,classParam.monitorTel,classParam.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};