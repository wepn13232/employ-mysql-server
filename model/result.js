exports.createResult = function (type, success, results) {
    var data = []
    if (results != null) {
        var dataString = JSON.stringify(results);
        var data = JSON.parse(dataString);
    }
    var result = {
        status: '200',
        message: '请求成功',
        data: data
    };
    if (type == 'get') {
        if (data.length === 0) {
            result.status = '401',
                result.message = '数据不存在!'
        }
    } else if (type == 'post') {
        if(success){
            result.message ='添加成功！'
        }
    } else if (type == 'put') {
        result.message = '修改成功!'
    } else if (type == 'update') {
        result.message = '更新成功!'
    } else if (type == 'delete') {
        result.message = '删除成功!'
    } else {

    }


    return result;
};