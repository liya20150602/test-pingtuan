app.controller("loginCtrl", ['$scope', '$rootScope', '$stateParams', 'myFactory','util', function ($scope, $rootScope, $stateParams, myFactory,util) {

    $scope.goBack = function () {
        window.history.back();
    };
    $scope.yes = true;
    $scope.user = {};
    $scope.login = function (user) {
        var userName = user.username;
        var code = user.code;
        var userParam = {
            userName: userName,
            code: code
        };
        myFactory.login(userParam).then(function (data) {
            //登录成功
        }, function (err) {
            console.log(err)
        })
    };
    /**
     * 发送验证码
     */
    $scope.getCode = function (event) {
        event.stopPropagation()
        util.showIonicLoading("验证码发送成功")

    }
}]);