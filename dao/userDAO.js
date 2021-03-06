var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var userSqlMap = require('./userSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);
module.exports = {
  add: function (user, callback) {
    pool.query(userSqlMap.add, [user.userId, user.userName, user.userType, user.password, user.session, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1811580024,2009798947&fm=26&gp=0.jpg'], function (error, result) {
      if (error) throw error;
      callback(result.affectedRows > 0);
    });
  },
  list: function (pageObj, callback) {
    console.log((pageObj.currPage - 1) * pageObj.pageRowNum, pageObj.pageRowNum)
    pool.query(userSqlMap.list, [(pageObj.currPage - 1) * pageObj.pageRowNum, pageObj.pageRowNum * 1], function (error, result) {
      if (error) throw error;
      console.log(result)
      callback(result);
    });
  },
  getByUserId: function (userId, callback) {
    pool.query(userSqlMap.getByUserId, userId, function (error, result) {
      if (error) throw error;
      console.log(result)
      callback(result);
    });
  },
  deleteById: function (id, callback) {
    pool.query(userSqlMap.deleteById, id, function (error, result) {
      if (error) throw error;
      callback(result.affectedRows > 0);
    });
  },
  update: function (user, callback) {
    pool.query(userSqlMap.update, [user.userId, user.userName, user.userType, user.password, user.filePath, user.id], function (error, result) {
      if (error) throw error;
      callback(result.affectedRows > 0);
    });
  },
  updateImage: function (user, callback) {
    pool.query(userSqlMap.updateImage, [user.filePath, user.userId], function (error, result) {
      if (error) throw error;
      callback(result.affectedRows > 0);
    });
  },
  login: function (user, callback) {
    pool.query(userSqlMap.login, [user.userId,user.password], function (error, result) {
      if (error) throw error;
      callback(result)
      // if (result.length === 0) {
      //     callback(result)
      // } else {
      //     callback(result[0]);
      // }

    })
  }
};