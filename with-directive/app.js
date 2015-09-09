/**
 * Created by Nick Doulgeridis on 09/09/2015.
 */

(function () {
    'use strict';
    angular.module('app', [
        'ngHandsontable'])
        .config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[[').endSymbol(']]');
        }])
        .directive('customDirective', function () {
            return {
                restrict: 'EA',
                replace: true,
                scope: {},
                templateUrl: "directive.html",
                link: function (scope, elements, attrs) {
                    scope.grid = {
                        data: [{
                            "valueX": "Year",
                            "valueY1": "Advertising",
                            "valueY2": "Hosting",
                            "valueY3": "Other"
                        }, {
                            "valueX": 2011,
                            "valueY1": 13,
                            "valueY2": 5,
                            "valueY3": 4
                        }, {
                            "valueX": 2012,
                            "valueY1": 22,
                            "valueY2": 4,
                            "valueY3": 5
                        }, {
                            "valueX": 2013,
                            "valueY1": 35,
                            "valueY2": 7,
                            "valueY3": 4
                        }],
                        columns: [{
                            'data': 'valueX',
                            'title': 'X-Value'
                        }, {
                            'data': 'valueY1',
                            'title': 'Y-Value-1'
                        }, {
                            'data': 'valueY2',
                            'title': 'Y-Value-2'
                        }, {
                            'data': 'valueY3',
                            'title': 'Y-Value-3'
                        }],
                        minSpareRows: 1,
                        getHeight: function () {
                            var gridElement = $("#grid");
                            var offset = gridElement.offset();
                            var availableHeight = $(window).height() - offset.top - window.scrollY - 20;
                            return availableHeight;
                        }
                    };
                }
            }
        });
})();