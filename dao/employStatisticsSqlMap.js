var employStatisticsSqlMap = {
    add: 'insert into employStatistics(stuNo,unitName,unifieSocialCreditCode,jobName,pay,contractTime,workPlace,unitContactor,unitTel,isemployStatistics) values(?,?, ?,?, ?,?, ?,?, ?,?)',
    deleteById: 'delete from employStatistics where id = ?',
    update: 'update employStatistics set stuNo=?,unitName=?,unifieSocialCreditCode=?,jobName=?,pay=?,contractTime=?,workPlace=?,unitContactor=?,unitTel=?,isemployStatistics=? where id =?',
    list: 'select * from employStatistics',
    getByClassNo: 'select * from employStatistics where classNo = ?',
};

module.exports = employStatisticsSqlMap;