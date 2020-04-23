var employRepresentSqlMap = {
    add: 'insert into employRepresentInfo(stuNo,counselorNo,stuName,graduationYear,jobTitle,motto,picurl) values(?,?,?,?,?,?,?)',
    deleteById: 'delete from employRepresentInfo where id = ?',
    update: 'update employRepresentInfo set styleNo=?,stuName=?,graduationYear=?,jobTitle=?,motto=?,picurl=? where id =?',
    list: 'select * from employRepresentInfo',
    getByGraduationYear: 'select * from employRepresentInfo where graduationYear = ?',
    getByCounselorNo:'select * from employRepresentInfo where counselorNo = ?',
};

module.exports = employRepresentSqlMap;