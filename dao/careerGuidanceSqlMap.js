var careerGuidanceSqlMap = {
    add: 'insert into careerGuidanceInfo(counselorNo,guidanceTitle,content,releaseDate,viewNum) values(?, ?,?, ?,?)',
    deleteById: 'delete from careerGuidanceInfo where id = ?',
    update: 'update careerGuidanceInfo set counselorNo=?,guidanceTitle=?,content=?,releaseDate=?,viewNum=? where id =?',
    list: 'select * from careerGuidanceInfo',
    getById: 'select * from careerGuidanceInfo where id = ?',
    getByCounselorNo: 'select * from careerGuidanceInfo where counselorNo =?'
};

module.exports = careerGuidanceSqlMap;