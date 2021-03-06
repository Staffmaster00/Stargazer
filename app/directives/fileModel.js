'use strict';
// appropriated from this demonstration https://www.youtube.com/watch?v=vLHgpOG1cW4
//https://www.npmjs.com/package/exif allows you to get photo data
app.directive('fileModel', ['$parse', function($parse){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);