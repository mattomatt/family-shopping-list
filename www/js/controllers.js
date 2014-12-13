/**
 * Created by mattomatt on 13/12/14.
 */
angular.module('familyControllers',[])
    .controller("listCtrl", function($scope,$firebase, $log) {
        $log.info('Login controller');
        var firebaseRef = new Firebase("https://family-shopping-list.firebaseio.com/stuffs");
        var sync = $firebase(firebaseRef);
        $scope.stuffs = sync;

        $scope.newStuff={};

        $scope.createStuff=function(){
            $log.info('creating new item');
            $log.debug(JSON.stringify($scope.newStuff));
            $scope.stuffs.$add(angular.copy($scope.newStuff));
            $scope.newStuff={};
            $log.debug(JSON.stringify($scope.newStuff));

        };




    });
