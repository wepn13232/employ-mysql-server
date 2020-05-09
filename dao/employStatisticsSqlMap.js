var employStatisticsSqlMap = {
    add: 'insert into employStatistics(stuNo,unitName,unifieSocialCreditCode,jobName,pay,contractTime,workPlace,unitContactor,unitTel,isemployStatistics) values(?,?, ?,?, ?,?, ?,?, ?,?)',
    deleteById: 'delete from employStatistics where id = ?',
    update: 'update employStatistics set stuNo=?,unitName=?,unifieSocialCreditCode=?,jobName=?,pay=?,contractTime=?,workPlace=?,unitContactor=?,unitTel=?,isemployStatistics=? where id =?',
    list: 'select * from employStatistics es LEFT JOIN professionattach pro ON es.classNo=pro.classKey  where (es.classNo=? OR ? is null) and (pro.departmentKey=? OR ? is null)',
    getByClassNo: 'select * from employStatistics where classNo = ?',
};

module.exports = employStatisticsSqlMap;