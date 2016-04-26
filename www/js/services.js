angular.module('starter.services', [])

.factory('Publicacoes', function() {
  // Pode usar um recurso aqui que retorna uma array JSON

  // Alguns dados de testes falso
  var publicacoes = [{
    id: 0,
    nome: 'Ben Sparrow',
    data: "3 de maio de 2016",
    descricao: 'You on your way?',
    face: 'img/ben.png',
    foto: 'img/photo/12917836_1011652265550934_765238525_n.jpg'
  }, {
    id: 1,
    nome: 'Max Lynx',
    data: "1 de  maio de 2016",
    descricao: 'Hey, it\'s me',
    face: 'img/max.png',
    foto: 'img/photo/12959915_1025189597548708_2087513361_n.jpg'
  }, {
    id: 2,
    nome: 'Adam Bradleyson',
    data: "21 de abril de 2016",
    descricao: 'I should buy a boat',
    face: 'img/adam.jpg',
    foto: 'img/photo/12959949_697888996981196_1152474910_n.jpg'
  }, {
    id: 3,
    nome: 'Perry Governor',
    data: "25 de março de 2016",
    descricao: 'Look at my mukluks!',
    face: 'img/perry.png',
    foto: 'img/photo/12959953_471822229694124_1099346753_n.jpg'
  }, {
    id: 4,
    nome: 'Thiago Bezerra',
    data: '16 de fevereiro de 2016',
    descricao: 'I love coffee.',
    face: 'img/thiago.jpg',
    foto: 'img/photo/13109037_1606067166351284_793594177_n.jpg'
  }, {
    id: 5,
    nome: 'Mike Harrington',
    data: "10 de fevereiro de 2016",
    descricao: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    foto: 'img/photo/12976678_1114384848619243_270315244_n.jpg'
  }];

  return {
    all: function() {
      return publicacoes;
    },
    get: function(publicacaoId) {
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === parseInt(publicacaoId)) {
          return publicacoes[i];
        }
      }
      return null;
    }
  };
});
