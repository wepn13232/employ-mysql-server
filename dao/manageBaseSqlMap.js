var manageBaseSqlMap = {
    updateLeadClass: 'update counselorInfo set leadClass= (select GROUP_CONCAT(classNo) list from classInfo where counselorNo =?) where counselorNo =?',
    addStuInfo:'insert into studentInfo(stuNo,stuName) values(?, ?)',
    // 多表联合查询 https://blog.csdn.net/Lesour/article/details/89073125?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3
    addEmployStatistics:"insert into employStatistics (stuNo,classNo,jobName,contractTime) select studentInfo.stuNo,classNo,jobName,contractTime from employInfo,studentInfo WHERE employInfo.stuNo =? and studentInfo.stuNo = ?;",
    updateEmployStatistics:"update employStatistics set jobName =?, contractTime =? where stuNo = ?;",
    updateEmployNum: "UPDATE classinfo set employNum=(select COUNT(*) from employStatistics WHERE classNo =(select classNo from studentInfo where stuNo=?)) WHERE classNo =(select classNo from studentInfo where stuNo=?)"
};

module.exports = manageBaseSqlMap;