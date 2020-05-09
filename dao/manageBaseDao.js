var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var manageBaseSqlMap = require('./manageBaseSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    updateLeadClass: function (counselorNo) {
        console.log("counselorNo")
        console.log(counselorNo)
        pool.query(manageBaseSqlMap.updateLeadClass, [counselorNo,counselorNo], function (error, result) {
            if (error) throw error;
            else{
                // console.log(result)
            }
            // callback(result.affectedRows > 0);
        });
    },
    addStuInfo: function (user) {
        console.log("========")
        console.log(user)
        pool.query(manageBaseSqlMap.addStuInfo, [user.userId,user.userName], function (error, result) {
            if (error) throw error;
            else{
            }
            // callback(result.affectedRows > 0);
        });
    },
    //添加就业统计
    addEmployStatistics: function (stuNo) {
        console.log("========")
        console.log(stuNo)
        pool.query(manageBaseSqlMap.addEmployStatistics, [stuNo,stuNo,stuNo,stuNo], function (error, result) {
            if (error) throw error;
            else{
                console.log("添加更新就业统计表成功")
            }
        });
        pool.query(manageBaseSqlMap.updateEmployNum, [stuNo,stuNo], function (error, result) {
            if (error) throw error;
            else{
                console.log("添加更新班级就业数成功")
            }
        });
    },
    //更新就业数据 updateEmployStatistics
    updateEmployStatistics: function (employ) {
        console.log("========")
        console.log(employ)
        pool.query(manageBaseSqlMap.updateEmployStatistics, [employ.jobName,employ.contractTime,employ.stuNo], function (error, result) {
            if (error) throw error;
            else{
                // console.log("更新班级就业数成功")
            }
        });
        pool.query(manageBaseSqlMap.updateEmployNum, [employ.stuNo,employ.stuNo], function (error, result) {
            if (error) throw error;
            else{
                console.log("更新班级就业数成功")
            }
        });
    },
    
};