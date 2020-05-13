var employSqlMap = {
    add: 'insert into employInfo(stuNo,unitName,unifieSocialCreditCode,jobName,pay,contractTime,workPlace,unitContactor,unitTel,isEmploy) values(?,?, ?,?, ?,?, ?,?, ?,?)',
    deleteById: 'delete from employInfo where id = ?',
    update: 'update employInfo set stuNo=?,unitName=?,unifieSocialCreditCode=?,jobName=?,pay=?,contractTime=?,workPlace=?,unitContactor=?,unitTel=?,isEmploy=? where id =?',
    list: 'select * from employInfo LIMIT ?, ?;SELECT COUNT(*) as totalRow from employInfo;',
    getByStuNo: 'select * from employInfo where stuNo = ?',
    getByClassNo:'select em.*,stu.classNo,stu.stuName from employinfo em left join studentinfo stu ON em.stuNo = stu.stuNo where stu.classNo=?'
};

module.exports = employSqlMap;