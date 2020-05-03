var counselorSqlMap = {
    add: 'insert into counselorInfo(counselorNo,counselorName,counselorTel) values(?, ?,?)',
    deleteById: 'delete from counselorInfo where id = ?',
    update: 'update counselorInfo set counselorNo=?,counselorName=?,idCard=?,department=?,profession=?,education=?,politicalStatus=?,biogenicLand=?,graduationTime=?,counselorTel=?,familyContact=?,homeTel=?,homeAddress=? where counselorNo =?',
    list: 'select * from counselorInfo',
    getByCounselorNo: 'select * from counselorInfo where counselorNo = ?',
};

module.exports = counselorSqlMap;     