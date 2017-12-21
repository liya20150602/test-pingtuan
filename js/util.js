/**
 * Created by linyan on 2017/12/20.
 */

angular.module('util', [])
    .factory('util', [ '$ionicLoading','$timeout', function ( $ionicLoading,$timeout) {
        return {
/**
                 * 显示提示信息
                 */
                showIonicLoading: function (content) {
                    $ionicLoading.show({
                        noBackdrop:true,
                        template:'<span class="ft15" style="color: #fff;">'+ content +'</span>'
                    });
                    $timeout(function () {
                        $ionicLoading.hide();
                    },1500);
                }
        }
    }]);

