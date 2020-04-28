var adminSqlMap = {
    add: 'insert into adminInfo(adminId,adminName,adminType,password,avatar) values(?, ?,?, ?,?,?)',
    deleteById: 'delete from adminInfo where id = ?',
    update: 'update adminInfo set adminName=?, password=? where id=?',
    list: 'select * from adminInfo',
    getByadminId: 'select * from adminInfo where adminId = ?',
    login: 'select * from adminInfo where adminId=?',
    updateImage:'update adminInfo set avatar=? where adminId=?',
};

module.exports = adminSqlMap;