var userSqlMap = {
    add: 'insert into userInfo(userId,userName,userType,password,session,avatar) values(?, ?,?, ?,?,?)',
    deleteById: 'delete from userInfo where id = ?',
    update: 'update userInfo set userId=?, userName=?, userType=?, password=?, avatar=? where id=?',
    list: 'select * from userInfo LIMIT ?, ?;SELECT COUNT(*) as totalRow from userInfo;',
    getByUserId: 'select * from userInfo where userId = ?',
    login: 'select * from userInfo where userId=? and password=?',
    updateImage:'update userInfo set avatar=? where userId=?',
};

module.exports = userSqlMap;