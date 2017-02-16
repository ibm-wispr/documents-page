(() => {
  angular.module('ngcDirectives')
  .directive('documentServiceMainHeaderFrame', documentServiceMainHeaderFrame);

  function documentServiceMainHeaderFrame() {
    return {
      restrict: 'EA',
      templateUrl: 'components/document/documentServiceMainHeaderFrame.html',
      controller: 'DocumentServiceMainHeaderFrameController',
      controllerAs: 'ctrl',
      scope: {},
      bindToController: true,
    };
  }
})();
