var userSqlMap = {
    add: 'insert into userInfo(userId, password) values(?, ?)',
    deleteById: 'delete from userInfo where id = ?',
    update: 'update userInfo set username=?, password=? where id=?',
    list: 'select * from userInfo',
    getById: 'select * from userInfo where id = ?',
    login: 'select * from userInfo where userId=?'
};

module.exports = userSqlMap;