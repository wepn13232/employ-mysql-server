var recruitmentSqlMap = {
    add: 'insert into recruitmentInfo(counselorNo,corporateName,companyProfile,recruitmentPost,jobRequirements,workPlace,recruitingNumbers,recruitingTime,recruitingAddress,salary,deliveryUrl) values(?,?, ?,?,?, ?,?, ?,?,?,?)',
    deleteById: 'delete from recruitmentInfo where id = ?',
    update: 'update recruitmentInfo set counselorNo=?,corporateName=?,companyProfile=?,recruitmentPost=?,viewNum=?,workPlace=?,recruitingNumbers=?,recruitingTime=?,recruitingAddress=?,salary=?,deliveryUrl=? where id =?',
    list: 'select * from recruitmentInfo',
    getById: 'select * from recruitmentInfo where id = ?',
    getByCounselorNo: 'select * from recruitmentInfo where counselorNo =?'
};

module.exports = recruitmentSqlMap;