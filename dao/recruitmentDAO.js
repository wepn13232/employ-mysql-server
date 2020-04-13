var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var recruitmentSqlMap = require('./recruitmentSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (recruitmentParam, callback) {
        pool.query(recruitmentSqlMap.add, [recruitmentParam.counselorNo,recruitmentParam.corporateName,recruitmentParam.companyProfile,recruitmentParam.recruitmentPost,recruitmentParam.jobRequirements,recruitmentParam.workPlace,recruitmentParam.recruitingNumbers,recruitmentParam.recruitingTime[0]+","+recruitmentParam.recruitingTime[1],recruitmentParam.recruitingAddress,recruitmentParam.salary,recruitmentParam.deliveryUrl], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(recruitmentSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getById: function (id, callback) {
        pool.query(recruitmentSqlMap.getById, id, function (error, result) {
            if (error) throw error;
            console.log(result[0]);
            callback(result[0]);
        });
    },
    getByCounselorNo: function(counselorNo,callback){
        pool.query(recruitmentSqlMap.getByCounselorNo,counselorNo,function(error,result){
            if(error) throw error;
            callback(result)
        })
    },
    deleteById: function (id, callback) {
        pool.query(recruitmentSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (recruitmentParam, callback) {
        console.log(recruitmentParam)
        pool.query(recruitmentSqlMap.update, [recruitmentParam.recruitmentNo,recruitmentParam.counselorNo,recruitmentParam.recruitmentName,recruitmentParam.professionNo,recruitmentParam.professionName,recruitmentParam.recruitmentNum,recruitmentParam.employNum,recruitmentParam.monitor,recruitmentParam.monitorTel,recruitmentParam.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};