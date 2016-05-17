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

          $scope.usuarioLogado.publicacoesId.push()
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
  };

})

.controller('AtividadeCtrl', function($scope, UsuarioLogado, $ionicPopup) {

  $scope.usuarioLogado = UsuarioLogado.getUsuarioLogado();

  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;

  $scope.edit = function(item) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirmação',
        template: 'Você realmente deseja editar?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('editar');

          $scope.usuarioLogado.publicacoesId.push()
        } else {
          console.log('cancelar');
        }
      });
  };
  $scope.share = function(item) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirmação',
      template: 'Você realmente deseja divulgar?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('divulgar');

        $scope.usuarioLogado.publicacoesId.push()
      } else {
        console.log('cancelar');
      }
    });
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    { id: 0,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg'},
    { id: 1,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 2,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 3,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 4,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 5,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 6,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 7,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 8,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 9,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 10,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 11,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 12,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 13,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg' },
    { id: 14,
      img: 'img/photo/12917836_1011652265550934_765238525_n.jpg'   }
  ];
});
