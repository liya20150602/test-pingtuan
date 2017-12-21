app.controller("NewProductCtrl", ['$scope', 'myFactory', '$state', '$rootScope','util',
    function ($scope, myFactory, $state, $rootScope,util) {
    $scope.items = [
        {
            id: 1,
            image: "./img/23.jpg",
            name: "新鲜青芒500g",
            rmb:44,
            purchaseNumber:100
        },
        {
            id: 2,
            image: "./img/23.jpg",
            name: "山东栖霞优质红富士8个",
            rmb:19.9,
            purchaseNumber:3333
        },
        {
            id: 3,
            image: "./img/23.jpg",
            name: "新鲜青芒500g",
            rmb:44,
            purchaseNumber:100
        },{
            id: 4,
            image: "./img/23.jpg",
            name: "山东栖霞优质红富士8个",
            rmb:44,
            purchaseNumber:100
        }
    ];
    $scope.gotoGoodDetail = function (id) {
        $state.go('goodDetail');
        $state.go("goodDetail", {"id": id});//跳转到新页面
    };
    $scope.addCart=function(event,id){
        event.stopPropagation()
        util.showIonicLoading("增加到我的购物车，前往结算")

    }

}]);