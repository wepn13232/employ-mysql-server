var studentSqlMap = {
    add: 'insert into studentInfo(stuNo,classNo,stuName,idCard,department,profession,education,politicalStatus,biogenicLand,graduationTime,stuTel,familyContact,homeTel,homeAddress) values(?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?,?)',
    deleteById: 'delete from studentInfo where id = ?',
    update: 'update studentInfo set stuNo=?,classNo=?,stuName=?,stuSex=?,idCard=?,department=?,profession=?,education=?,politicalStatus=?,biogenicLand=?,graduationTime=?,stuTel=?,familyContact=?,homeTel=?,homeAddress=? where stuNo =?',
    list: 'select * from studentInfo',
    getByStuNo: 'select * from studentInfo where stuNo = ?',
};

module.exports = studentSqlMap;