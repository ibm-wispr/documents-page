(function () {
  angular
    .module('ngcServices')
    .factory('DocumentService', DocumentService);

  DocumentService.$inject = ['$log', '$window', 'Message', 'Search', 'UserService', '$rootScope', '$http'];
  /* @ngInject */
  function DocumentService($log, $window, Message, Search, UserService, $rootScope, $http) {
    const obj = {};
    obj.documents = new Array();

    //loop through the inbox and look for all messages with attachments.  Then loop through the messages to get their attachments.  Not performant, but an example of using the API's.
    obj.getDocuments = function () {
      $http({
        method: 'GET',
        url: '{SERVER_URL}/api/tags/Inbox?start=1&count=20',
      }).then((response) =>{
        var attachments = new Array();
        if (response.data.data.length > 0){
          response.data.data[0].documents.forEach((email) => {
            if (email.attachment){
              attachments.push(email.messageId);
            }
          });
          attachments.forEach((messageId)=>{
            $http({
              method: 'GET',
              url: '{SERVER_URL}/api/messages/' + messageId + '/attachments'
            }).then((response) =>{
              if (response.data.data.length > 0){
                response.data.data[0].files.forEach((file)=>{
                  file.messageId = messageId;
                  file.sid = response.data.data[0].attachSid;
                  obj.documents.push(file);
                });
              }
            });
          });
        }
      },(error) =>{
        $log.error(error);
      });
    };

    return obj;
  }
}());
