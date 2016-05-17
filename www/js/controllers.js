angular.module('starter.controllers', [])

.controller('PublicarCtrl', function($scope) {})

.controller('FiscalizarCtrl', function($scope, Publicacoes) {
  // Com a nova view cache no Ionic, Controllers só são chamados quando eles são 
  // criados ou quando o aplicativo é iniciado, em vez de a cada mudança de página. Para ouvir 
  // quando esta página está ativa (por exemplo, para atualizar os dados), ouvir o 
  // evento $ionicView.enter:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.publicacoes = Publicacoes.all();
  $scope.apoiar = function ( item ) {
    var publicacoes = $scope.publicacoes;
    publicacoes[item.id].apoiadores++;  
  };
  
})

.controller('PublicacaoDetailCtrl', function($scope, $stateParams, Publicacoes, Comentarios) {
  $scope.publicacao = Publicacoes.get($stateParams.publicacaoId);
  $scope.comentarios = Comentarios.get($stateParams.publicacaoId);

  $scope.addComentario = function() {
    var id = Comentarios.totalPorPublicacao($stateParams.publicacaoId);

    $scope.dados = new function() {
         id = id + 1;
         publicacaoId = $stateParams.publicacaoId;
         conteudo = '';
    }
    $scope.comentarios.push($scope.dados);
  };
  
})

.controller('AtividadeCtrl', function($scope) {
 
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edita Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Divulga Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 }
  ];
});