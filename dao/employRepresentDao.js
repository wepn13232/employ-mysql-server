var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var employRepresentSqlMap = require('./employRepresentSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (employRepresent, callback) {
        pool.query(employRepresentSqlMap.add, [employRepresent.stuNo, employRepresent.counselorNo,employRepresent.stuName, employRepresent.graduationYear, employRepresent.jobTitle, employRepresent.motto, employRepresent.filePath], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(employRepresentSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getByGraduationYear: function (graduationYear, callback) {
        pool.query(employRepresentSqlMap.getByGraduationYear, graduationYear, function (error, result) {
            if (error) throw error;
            // console.log(result[0]);
            callback(result);
        });
    },
    getByCounselorNo: function (counselorNo, callback) {
        pool.query(employRepresentSqlMap.getByCounselorNo, counselorNo, function (error, result) {
            if (error) throw error;
            // console.log(result[0]);
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(employRepresentSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (employRepresent, callback) {
        pool.query(employRepresentSqlMap.update, [employRepresent.stuNo, employRepresent.stuName, employRepresent.graduationYear, employRepresent.jobTitle, employRepresent.motto, employRepresent.filePath, employRepresent.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};