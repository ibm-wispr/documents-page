(() => {
  let $rootScope;
  let $mdPanel;
  let $state;
  let $log;
  let DocumentService;

  class DocumentServiceMainHeaderFrameController {
    /* @ngInject */
    constructor(_$rootScope_, _$state_, _$log_, _DocumentService_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $log = _$log_;
      DocumentService = _DocumentService_;
    }

    showDocument() {
    // return ContactService.loadAddContact();
      $state.go('document');
    }

  }

  DocumentServiceMainHeaderFrameController.$inject = ['$rootScope', '$state', '$log', 'DocumentService'];

  angular.module('ngcControllers').controller('DocumentServiceMainHeaderFrameController', DocumentServiceMainHeaderFrameController);
})();
