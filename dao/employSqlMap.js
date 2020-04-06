var employSqlMap = {
    add: 'insert into employInfo(employId,stuNo,unitName,unifieSocialCreditCode,jobName,pay,contractTime,workPlace,unitContactor,unitTel,isEmploy) values(?, ?,?, ?,?, ?,?, ?,?, ?,?)',
    deleteById: 'delete from employInfo where id = ?',
    update: 'update employInfo set stuNo=?,unitName=?,unifieSocialCreditCode=?,jobName=?,pay=?,contractTime=?,workPlace=?,unitContactor=?,unitTel=?,isEmploy=? where id =?',
    list: 'select * from employInfo',
    getByStuNo: 'select * from employInfo where stuNo = ?',
};

module.exports = employSqlMap;