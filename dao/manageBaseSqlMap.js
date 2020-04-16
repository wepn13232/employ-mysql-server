var manageBaseSqlMap = {
    updateLeadClass: 'update counselorInfo set leadClass= (select GROUP_CONCAT(classNo) list from classInfo where counselorNo =?) where counselorNo =?',
    addStuInfo:'insert into studentInfo(stuNo,stuName) values(?, ?)'
};

module.exports = manageBaseSqlMap;