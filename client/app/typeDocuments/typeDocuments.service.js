'use strict';

function typeDocumentsService($resource,API) {
	return $resource(API+"/api/tipos_documentos/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('eventosApp')
  .factory('typeDocuments', typeDocumentsService);
