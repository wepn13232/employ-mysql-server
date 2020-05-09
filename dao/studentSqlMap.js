var studentSqlMap = {
    add: 'insert into studentInfo(stuNo,classNo,stuName,stuSex,idCard,education,politicalStatus,biogenicLand,graduationTime,stuTel,familyContact,homeTel,homeAddress) values(?, ?,?,?, ?,?, ?,?, ?,?, ?,?, ?)',
    deleteById: 'delete from studentInfo where id = ?',
    update: 'update studentInfo set stuNo=?,classNo=?,stuName=?,stuSex=?,idCard=?,education=?,politicalStatus=?,biogenicLand=?,graduationTime=?,stuTel=?,familyContact=?,homeTel=?,homeAddress=? where stuNo =?',
    list: 'select * from studentInfo LIMIT ?, ?;SELECT COUNT(*) as totalRow from studentInfo;',
    getByStuNo: 'SELECT * from studentinfo stu LEFT JOIN professionattach pa ON stu.classNo = pa.classKey WHERE stu.stuNo = ?',
};

module.exports = studentSqlMap;