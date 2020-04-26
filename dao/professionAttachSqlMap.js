var professionAttachSqlMap = {
    add: 'insert into professionAttach(session,departmentKey,departmentName,professionKey,professionName,classKey,className) values(?,?, ?,?, ?,?, ?)',
    deleteById: 'delete from professionAttach where id = ?',
    update: 'update professionAttach set session=?,departmentKey=?,departmentName=?,professionKey=?,professionName=?,classKey=?,className=? where id =?',
    list: 'select * from professionAttach',
    getByKey: 'select * from professionAttach where (session=? OR ? is null) and (departmentKey=? OR ? is null) and (professionKey = ? OR ? is null) and (classKey = ? OR ? is null)'
};

module.exports = professionAttachSqlMap;