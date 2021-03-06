/**
 *
 * 平台登录模块
 *
 * @author marker
 * @date 2016-06-05
 */
define(['app','css!./login.css'], function (app) {// 加载依赖js,
	
	return ['$rootScope','$scope','$location','userService', '$AjaxService',
	        function ($rootScope, $scope, $location, userService, $AjaxService, $session) {
		// 登录操作
		$scope.login = function(){
			let params = {
				username: $scope.user.name,
				password: $scope.user.pass,
				grant_type: 'password',
				client_id: 'manager',
				client_secret: 'password'
			}


			// 表单验证
			faceinner.post(api['user.token'], params , function(res){

				localStorage.token = res.access_token;


				console.log(res);

				// 加载用户登录信息
				faceinner.get(api['user.login.info'], function(res){
					if(res.code == 'S00'){
						$scope.$apply(function() {
							$rootScope.user = res.data;
							$rootScope.islogin = true;
							$location.path('/index').replace();
						});
					}
				});
				// faceinner.handleFieldError($scope, res);
			});
		 }; 
	}];

});