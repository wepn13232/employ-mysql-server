var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var counselorSqlMap = require('./counselorSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (counselor, callback) {
        pool.query(counselorSqlMap.add, [counselor.counselorNo,counselor.counselorName,counselor.counselorTel], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(counselorSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByCounselorNo: function (counselorNo, callback) {
        pool.query(counselorSqlMap.getByCounselorNo, counselorNo, function (error, result) {
            if (error) throw error;
            console.log(result.length);
            console.log("+======================++++++++")
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(counselorSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (counselor, callback) {
        console.log(counselor)
        pool.query(counselorSqlMap.update, [counselor.counselorNo,counselor.counselorName,counselor.idCard,counselor.department,counselor.profession,counselor.education,counselor.politicalStatus,counselor.biogenicLand,counselor.graduationTime,counselor.counselorTel,counselor.familyContact,counselor.homeTel,counselor.homeAddress,counselor.counselorNo], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};