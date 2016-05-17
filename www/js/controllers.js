var postsConfig = {
  nome: "Anônimo",
  foto: "img/ionic.png"
};

angular.module('starter.controllers', [])

.controller('PublicarCtrl', function($scope, $ionicPopup, Publicacoes) {
  // add: function(nome, descricao, face, foto) {
    $scope.publicar = function(postagem) {
      if (postagem.descricao) {
        Publicacoes.add(postsConfig.nome, postagem.descricao, postsConfig.foto, postagem.foto);
        postagem.descricao = null;
        postagem.foto = null;

        var alertPopup = $ionicPopup.alert({
           title: 'Post publicado com sucesso',
           // template: 'It might taste good'
         });

         // alertPopup.then(function(res) {
         //   console.log('Thank you for not eating my delicious ice cream cone');
         // });
        }
    };
})

.controller('FiscalizarCtrl', function($scope, Publicacoes) {
  // Com a nova view cache no Ionic, Controllers só são chamados quando eles são
  // criados ou quando o aplicativo é iniciado, em vez de a cada mudança de página. Para ouvir
  // quando esta página está ativa (por exemplo, para atualizar os dados), ouvir o
  // evento $ionicView.enter:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.publicacoes = Publicacoes.all();

  $scope.verificarApoio = function(id) {
    return Publicacoes.verificarApoio(id, postsConfig.nome)
  };

  $scope.apoiarToggle = function(id) {
    Publicacoes.apoiarToggle(id, postsConfig.nome);
  };
})

.controller('PublicacaoDetailCtrl', function($scope, $stateParams, Publicacoes) {
  $scope.publicacao = Publicacoes.get($stateParams.publicacaoId);

  $scope.add = function(comment) {
    if (comment.message) {
      Publicacoes.addComment($stateParams.publicacaoId, postsConfig.nome, comment.message);
      comment.message = null;
    }
  };
})

.controller('ConfiguracaoCtrl', function($scope, Publicacoes) {
  $scope.config = postsConfig;

  $scope.resetComments = function() {
    var pubs = Publicacoes.all();

    pubs.forEach(function(pub) {
      pub.comments = [];
    });
  };
});