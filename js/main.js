var appBch = angular.module("test-bch", ['ui.bootstrap']);
/*
appBch.run(function() {
    //console.log("run angular");
});
*/


appBch.controller("mainController", function($rootScope) {
    //data dummy
    $rootScope.rowInfo=[
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$300.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$6.000.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$800.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$1.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$500.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$100.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$9.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.200.000"
        },
        {
            "lorem":"buscar1",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$700.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.170.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$2.200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$300.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"buscar2",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$6.000.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$800.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$1.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$500.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$100.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$9.000.000"
        },
        {
            "lorem":"buscar3",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$700.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.170.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$2.200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$300.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$6.000.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$800.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$1.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$500.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$100.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$9.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$700.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.170.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$2.200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$300.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$100.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$6.000.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$800.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$200.000"
        },
        {
            "lorem":"xxxxxxxxxxxxx",
            "ipsum":"xxxxxxxxxxxxx",
            "dolor":"xxxxxxxxxxxxx",
            "sit":"xxxxxxxxxxxxx",
            "amet":"$1.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$500.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$100.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$9.000.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.200.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$700.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$1.170.000"
        },
        {
            "lorem":"zzzzzzzzzzzzz",
            "ipsum":"zzzzzzzzzzzzz",
            "dolor":"zzzzzzzzzzzzz",
            "sit":"zzzzzzzzzzzzz",
            "amet":"$2.200.000"
        }
    ];

    $rootScope.totalItems = $rootScope.rowInfo.length;
    $rootScope.currentPage = 1;
    $rootScope.infoPerPage = 10;

    $rootScope.resetList = function(){
        $rootScope.infoPerPage = $rootScope.rowInfo.length;
    };


});