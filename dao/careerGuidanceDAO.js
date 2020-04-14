var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var careerGuidanceSqlMap = require('./careerGuidanceSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (careerGuidanceParam, callback) {
        pool.query(careerGuidanceSqlMap.add, [careerGuidanceParam.counselorNo,careerGuidanceParam.guidanceTitle,careerGuidanceParam.content,careerGuidanceParam.releaseDate,careerGuidanceParam.viewNum], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(careerGuidanceSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    getById: function (id, callback) {
        pool.query(careerGuidanceSqlMap.getById, id, function (error, result) {
            if (error) throw error;
            console.log(result[0]);
            callback(result[0]);
        });
    },
    getByCounselorNo: function(counselorNo,callback){
        pool.query(careerGuidanceSqlMap.getByCounselorNo,counselorNo,function(error,result){
            if(error) throw error;
            callback(result)
        })
    },
    deleteById: function (id, callback) {
        pool.query(careerGuidanceSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (careerGuidanceParam, callback) {
        // console.log(careerGuidanceParam)
        pool.query(careerGuidanceSqlMap.update, [careerGuidanceParam.counselorNo,careerGuidanceParam.guidanceTitle,careerGuidanceParam.content,careerGuidanceParam.releaseDate,careerGuidanceParam.viewNum+1,careerGuidanceParam.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    }
};