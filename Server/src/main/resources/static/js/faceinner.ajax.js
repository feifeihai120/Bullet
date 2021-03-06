/**
 * api 接口地址
 *
 * faceinner全局对象
 *
 * @type {{}}
 */




let faceinner = {
    /** 服务器地址 */
    server: 'http://localhost:8081',


    errorfunc : function(state){
        console.log(state);
        // alert(state.statusText);
    },


    /**
     * 表单错误捕获
     * (需要表单验证的请求中调用)
     *
     * @param $scope
     * @param data
     */
    handleFieldError: function($scope, res){
        if(res.status == 2){// 表单错误
            $scope.$apply(function(){
                var len = res.data.length;
                for (var i = 0; i < len; i++) {
                    var item = res.data[i];

                    $scope[item.field+'Msg'] = item.msg;
                    var input = $("input[name=" + item.field+"]");
                    input.css("border-color", 'red');
                    input.on('keyup',function(){
                        $(this).css("border-color", "#cccccc");
                        $('#error_'+item.field).remove();
                    });
                    var errorsEl = input.next();
                    errorsEl.append(
                        '<span id="error_'+item.field+'" class="error" >'+item.msg+'</span>');
                }



            });
        }




    },



    /**
     * get 请求
     *
     * @param url URL地址
     * @param data 参数
     * @param func 回调函数
     * @param funcerror 调用失败函数
     */
    get: function(url, data, func, funcerror){
        let options = {
            url: faceinner.server + url ,
            type: 'get',
            data: data ,
            dataType: "json",
            success:func,
            error: faceinner.errorfunc,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
        }
        if(func === undefined){
            delete options.data;
            options.success = data;
        }
        if(funcerror){
            options.error = funcerror;
        }


        if(localStorage.token && localStorage.token != 'null'){
            options.headers ={
                'Authorization': 'Bearer ' + localStorage.token,
            }
        }

        $.ajax(options);
    },



    /**
     * post 请求
     *
     * @param url URL地址
     * @param data 参数
     * @param func 回调函数
     */
    post: function(url, data, func){
        let options = {
            url: faceinner.server + url ,
            type: 'post',
            data: data ,
            dataType: "json",
            success:func,
            error: faceinner.errorfunc,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
        }
        if(func === undefined){
            delete options.data;
            options.success = data;
        }
        if(url != '/oauth/token'){


            if(localStorage.token && localStorage.token != 'null'){
                options.headers ={
                    'Authorization': 'Bearer ' + localStorage.token,
                }
            }
        }
        $.ajax(options);
    },


    /**
     * delete 请求
     *
     * @param url URL地址
     * @param data 参数
     * @param func 回调函数
     */
    delete: function(url, data, func){
        if(!data){
            data = {}
        }
        data._method = "DELETE";
        let options = {
            url: faceinner.server + url  ,
            type: 'DELETE',
            data: data ,
            dataType: "json",
            success:func,
            error: faceinner.errorfunc,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
        }
        if(func === undefined){
            delete options.data;
            options.success = data;
        }

        if(url != '/oauth/token'){
            if(localStorage.token && localStorage.token != 'null'){
                options.headers ={
                    'Authorization': 'Bearer ' + localStorage.token,
                }
            }
        }

        $.ajax(options);
    },



    /**
     * 获取 IP:端口
     */
    getHost : function(){
        var host = window.location.hostname;
        if(window.location.port != 80){
            host += ":" + window.location.port;
        }
        return host;
    }

};




