(() => {
  let MessageService;
  class DocumentController {
    /* @ngInject */
    constructor($scope, $log, DocumentService, _MessageService_) {

      const vm = this;

      MessageService = _MessageService_;
      vm.documentService = DocumentService;
      //get the documents from the document service
      vm.documentService.getDocuments();
      vm.documents = vm.documentService.documents

      //listen for the documents returned from the document service
      $scope.$watch('ctrl.documentService.documents', () => {
        vm.documents = vm.documentService.documents;
      });
    }

    //user has chosen to download an attachment.  build a url to the attachment and initiate download
    downloadAttachment(file) {
      const a = document.createElement('a');
      let attachment;

      if (attachment && attachment.url) {
        a.href = attachment.url;
        a.download = file.filename;
        a.click();
        return;
      }

      //Download the attachment
      MessageService.downloadAttachment(file.messageId, file.sid, file.id)
      .then((fileObj) => {
        attachment = _.assign(attachment, fileObj);

        const byteArray = new Uint8Array(attachment.content.data);
        const blob = new Blob([byteArray], { type: attachment.contentType });
        attachment.url = (window.URL || window.webkitURL).createObjectURL(blob);

        a.href = attachment.url;
        a.download = file.filename;
        a.click();
        return;
      });
    }
  }

  DocumentController.$inject = ['$scope', '$log', 'DocumentService','MessageService'];

  angular
    .module('ngcControllers')
    .controller('DocumentController', DocumentController);
})();
