var employRepresentSqlMap = {
    add: 'insert into employRepresentInfo(styleNo,stuName,graduationYear,jobTitle,motto,picurl) values(?,?, ?,?, ?,?)',
    deleteById: 'delete from employRepresentInfo where id = ?',
    update: 'update employRepresentInfo set styleNo=?,stuName=?,graduationYear=?,jobTitle=?,motto=?,picurl=? where id =?',
    list: 'select * from employRepresentInfo',
    getByGraduationYear: 'select * from employRepresentInfo where graduationYear = ?',
};

module.exports = employRepresentSqlMap;