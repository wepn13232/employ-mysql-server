var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var professionAttachSqlMap = require('./professionAttachSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    add: function (professionAttach, callback) {
        pool.query(professionAttachSqlMap.add, [professionAttach.session, professionAttach.departmentKey, professionAttach.departmentName, professionAttach.professionKey, professionAttach.professionName, professionAttach.classKey, professionAttach.className], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    list: function (callback) {
        pool.query(professionAttachSqlMap.list, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    deleteById: function (id, callback) {
        pool.query(professionAttachSqlMap.deleteById, id, function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    update: function (professionAttach, callback) {
        console.log(professionAttach)
        pool.query(professionAttachSqlMap.update, [professionAttach.session, professionAttach.departmentKey, professionAttach.departmentName, professionAttach.professionKey, professionAttach.professionName, professionAttach.classKey, professionAttach.className, professionAttach.id], function (error, result) {
            if (error) throw error;
            callback(result.affectedRows > 0);
        });
    },
    getByKey: function (params,callback) {
        pool.query(professionAttachSqlMap.getByKey, [params.session,params.session,params.departmentKey,params.departmentKey,params.professionKey,params.professionKey,params.classKey,params.classKey],function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
};