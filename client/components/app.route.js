//Add the document state to the $stateProvider
      .state('document', {
        url: '/document',
        templateUrl: 'components/document/document.html',
        controller: 'DocumentController',
        controllerAs: 'ctrl',
        data: {
          requiresLogin: false
        }
      });
