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
};