var userSqlMap = {
    add: 'insert into userInfo(userId,userName,userType,password) values(?, ?,?, ?)',
    deleteById: 'delete from userInfo where id = ?',
    update: 'update userInfo set userName=?, password=? where id=?',
    list: 'select * from userInfo',
    getByUserId: 'select * from userInfo where userId = ?',
    login: 'select * from userInfo where userId=?'
};

module.exports = userSqlMap;