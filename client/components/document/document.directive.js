(function () {
  angular.module('ngcDirectives')
  .directive('document', Document);

  function Document() {
    return {
      restrict: 'EA',
      templateUrl: 'components/document/document.html',
      controller: 'DocumentController',
      controllerAs: 'ctrl',
      scope: {},
      bindToController: true,
    };
  }
}());
