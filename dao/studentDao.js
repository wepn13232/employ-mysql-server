var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var studentSqlMap = require('./studentSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (student, callback) {
        pool.query(studentSqlMap.add, [student.stuNo,student.stuName,student.idCard,student.department,student.profession,student.education,student.politicalStatus,student.biogenicLand,student.graduationTime,student.stuTel,student.familyContact,student.homeTel,student.homeAddress], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(studentSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByStuNo: function (stuNO, callback) {
        pool.query(studentSqlMap.getByStuNo, stuNO, function (error, result) {
            if (error) throw error;
            // console.log(result[0]);
            callback(result[0]);
        });
    },
    deleteById: function (id, callback) {
        pool.query(studentSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (student, callback) {
        console.log(student)
        pool.query(studentSqlMap.update, [student.stuNo,student.stuName,student.idCard,student.department,student.profession,student.education,student.politicalStatus,student.biogenicLand,student.graduationTime,student.stuTel,student.familyContact,student.homeTel,student.homeAddress,student.stuNo], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};