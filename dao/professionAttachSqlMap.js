var professionAttachSqlMap = {
    add: 'insert into professionAttach(session,departmentKey,departmentName,professionKey,professionName,classKey,className) values(?,?, ?,?, ?,?, ?)',
    deleteById: 'delete from professionAttach where attachId = ?',
    update: 'update professionAttach set session=?,departmentKey=?,departmentName=?,professionKey=?,professionName=?,classKey=?,className=? where attachId =?',
    list: 'select * from professionAttach',
    getByKey: 'select * from professionAttach where (session=? OR ? is null) and (departmentKey=? OR ? is null) and (professionKey = ? OR ? is null) and (classKey = ? OR ? is null) LIMIT ?, ?;SELECT COUNT(1) as totalRow from professionAttach where 1=1 and (session=? OR ? is null) and (departmentKey=? OR ? is null) and (professionKey = ? OR ? is null) and (classKey = ? OR ? is null);'
};

module.exports = professionAttachSqlMap;