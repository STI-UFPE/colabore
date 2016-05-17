angular.module('starter.controllers', [])

.controller('PublicarCtrl', function($scope, Publicacoes, UsuarioLogado, $ionicPopup, $document) {
  $scope.usuarioLogado = UsuarioLogado.getUsuarioLogado();
  $scope.publicacoes = Publicacoes.all();

  $scope.imagemPost = true;

  //simula o anexo de uma imagem, no caso haveria uma forma de buscar na galeria ou ate mesmo tirar com o smartphone
  $scope.getImagem = function () {
    $scope.imagemPost = false;
  }
  
  $scope.postarPublicacao = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirmação',
        template: 'Você realmente deseja publicar?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('publicar');
        } else {
          console.log('cancelar');
        }
      });
    };

})

.controller('FiscalizarCtrl', function($scope, Publicacoes, $stateParams) {
  // Com a nova view cache no Ionic, Controllers só são chamados quando eles são
  // criados ou quando o aplicativo é iniciado, em vez de a cada mudança de página. Para ouvir
  // quando esta página está ativa (por exemplo, para atualizar os dados), ouvir o
  // evento $ionicView.enter:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.publicacoes = Publicacoes.all();

  $scope.apoiarButtom = function(idPublicacao){
    $scope.publicacao = Publicacoes.get(idPublicacao);
    console.log($scope.publicacao);
    var apoiarAtual = $scope.publicacao.apoiar;
    apoiarAtual = apoiarAtual + 1;
    $scope.publicacao.apoiar = apoiarAtual;
  };

})

  .controller('LoginCtrl', function($scope, $state, $stateParams, $ionicPopup, $document, Usuarios, UsuarioLogado){
    $scope.usuarios = Usuarios.allUsuarios();
    $scope.usuarioLogado = UsuarioLogado.getUsuarioLogado();

    $scope.input = {
      login:'ben123',
      senha:'123456'
    }

   var usuarios = Usuarios.allUsuarios();

    $scope.showAlert = function() {
      $scope.usuarioLogado = Usuarios.buscarUsuario($scope.input.login, $scope.input.senha);
      console.log($scope.usuarioLogado);
      if ($scope.usuarioLogado==null) {
        var alertPopup = $ionicPopup.alert({
          title: 'Tente novamente',
          template: 'Senha ou login incorretos!',
        });
      }
      else{
        UsuarioLogado.setUsuarioLogado($scope.usuarioLogado);
        console.log(UsuarioLogado.getUsuarioLogado());
        $state.go('tab.publicar');
      }
    }
  })

.controller('PublicacaoDetailCtrl', function($scope, $stateParams, Publicacoes, Usuarios, UsuarioLogado) {
  $scope.publicacao = Publicacoes.get($stateParams.publicacaoId);
  $scope.usuarioLogado = UsuarioLogado.getUsuarioLogado();
  console.log($scope.usuarioLogado);
  $scope.usuarios = Usuarios.allUsuarios();
  $scope.comentOcult = true;

  $scope.newComment='';

  $scope.addComment = function(usuarioComentando){
    console.log("comentario: "+$scope.newComment);
    this.novoComent = {
      idUsuario: usuarioComentando,
      data: '3 de maio de 2016',
      comentario: $scope.newComment,
      curtidas: 3
    }
    $scope.publicacao.comentarios.push(this.novoComent);
    $scope.newComment='';
    $scope.comentOcult = false;
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
