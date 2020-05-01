var classSqlMap = {
    add: 'insert into classInfo(classNo,counselorNo,classNum,employNum,monitor,monitorTel) values(?,?, ?,?, ?,?)',
    deleteById: 'delete from classInfo where id = ?',
    update: 'update classInfo set classNo=?,counselorNo=?,classNum=?,monitor=?,monitorTel=? where id =?',
    list: 'select * from classInfo',
    getById: 'select * from classInfo where id = ?',
    getByCounselorNo: 'select * from classInfo c right join professionattach pa ON c.classNo = pa.classKey where counselorNo =?',
    getByClassNo:'select * from classInfo where classNo =?'
};

module.exports = classSqlMap;