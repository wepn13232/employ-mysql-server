var classSqlMap = {
    add: 'insert into classInfo(classNo,counselorNo,className,professionNo,professionName,classNum,employNum,monitor,monitorTel) values(?, ?,?, ?,?, ?,?, ?,?)',
    deleteById: 'delete from classInfo where id = ?',
    update: 'update classInfo set classNo=?,counselorNo=?,className=?,professionNo=?,professionName=?,classNum=?,employNum=?,monitor=?,monitorTel=? where id =?',
    list: 'select * from classInfo',
    getById: 'select * from classInfo where id = ?',
    getByCounselorNo: 'select * from classInfo where counselorNo =?'
};

module.exports = classSqlMap;