var counselorSqlMap = {
    add: 'insert into counselorInfo(counselorNo,counselorName,counselorTel,departmentKey) values(?, ?,?,?)',
    deleteById: 'delete from counselorInfo where id = ?',
    update: 'update counselorInfo set counselorNo=?,counselorName=?,idCard=?,department=?,profession=?,education=?,politicalStatus=?,biogenicLand=?,graduationTime=?,counselorTel=?,familyContact=?,homeTel=?,homeAddress=? where counselorNo =?',
    list: 'select * from counselorInfo',
    getByCounselorNo: 'select cou.id,cou.counselorNo,cou.counselorName,cou.counselorTel,cou.leadClass,att.departmentKey,att.departmentName,att.`session` from counselorInfo cou LEFT JOIN professionattach att ON cou.departmentKey = att.departmentKey where counselorNo = ?',
};

module.exports = counselorSqlMap;     