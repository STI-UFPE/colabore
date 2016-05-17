angular.module('starter.services', [])

.factory('Publicacoes', function() {
  // Pode usar um recurso aqui que retorna uma array JSON

  // Alguns dados de testes falso
  var publicacoes = [{
    id: 0,
    nome: 'Ben Sparrow',
    data: Date.parse("May 3, 1996"),
    likes: [],
    descricao: 'You on your way?',
    face: 'img/ben.png',
    foto: 'img/photo/12917836_1011652265550934_765238525_n.jpg',
    comments: [
      {
        nome: 'Zeca',
        msg: 'Gostei do parque!',
        data: Date.parse("January 1, 2006")
      },
      {
        nome: 'Zeca',
        msg: 'Vamos para lá?',
        data: Date.parse("January 1, 2013")
      },
      {
        nome: 'Zeca',
        msg: 'Que mensagem velha...',
        data: Date.parse("January 20, 2016")
      },
      {
        nome: 'Eduardo',
        msg: 'Que mensagem velha...',
        data: moment().startOf('day')
      },
      {
        nome: 'Fernando',
        msg: 'Que mensagem velha mesmo...',
        data: moment().startOf('hour')
      },
    ]
  }, {
    id: 1,
    nome: 'Max Lynx',
    data: Date.parse("May 1, 2016"),
    likes: ['Anônimo'],
    descricao: 'Hey, it\'s me',
    face: 'img/max.png',
    foto: 'img/photo/12959915_1025189597548708_2087513361_n.jpg'
  }, {
    id: 2,
    nome: 'Adam Bradleyson',
    data: Date.parse("April 21, 2016"),
    likes: ['Anônimo', 'Chiu', 'João'],
    descricao: 'I should buy a boat',
    face: 'img/adam.jpg',
    foto: 'img/photo/12959949_697888996981196_1152474910_n.jpg'
  }, {
    id: 3,
    nome: 'Perry Governor',
    data: Date.parse("March 25, 2016"),
    likes: ['Chiu', 'Pedro', 'José', 'Maria'],
    descricao: 'Look at my mukluks!',
    face: 'img/perry.png',
    foto: 'img/photo/12959953_471822229694124_1099346753_n.jpg'
  }, {
    id: 4,
    nome: 'Thiago Bezerra',
    data: Date.parse("February 1, 2016"),
    likes: ['Paulo', 'Alice', 'Bob', 'Bruna'],
    descricao: 'I love coffee.',
    face: 'img/thiago.jpg',
    foto: 'img/photo/13109037_1606067166351284_793594177_n.jpg'
  }, {
    id: 5,
    nome: 'Mike Harrington',
    data: Date.parse("February 10, 2006"),
    likes: [],
    descricao: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    foto: 'img/photo/12976678_1114384848619243_270315244_n.jpg'
  }];

  return {
    add: function(nome, descricao, face, foto) {
      var pub = {
        id: Math.ceil((Math.random() * 100000000000000)),
        nome: nome,
        data: new Date(),
        likes: [],
        descricao: descricao,
        face: face,
        foto: foto,
      };

      publicacoes.unshift(pub);
    },

    addComment: function(publicacaoId, nome, comentario) {
      // arguments mostra todos os argumentos recebidos pela função
      // console.log(arguments);
      var publicacao = this.get(publicacaoId);
      if (publicacao.comments == undefined) {
        publicacao.comments = [];
      }

      publicacao.comments.push({
        nome: nome,
        msg: comentario,
        data: new Date(),
      });
    },
    all: function() {
      return publicacoes;
    },
    verificarApoio: function(publicacaoId, nome) {
      var publicacao = this.get(publicacaoId);
      var index = publicacao.likes.indexOf(nome);

      return (index != -1);
    },
    apoiarToggle: function(publicacaoId, nome) {
      var publicacao = this.get(publicacaoId);
      var index = publicacao.likes.indexOf(nome);

      if (index == -1) {
        publicacao.likes.push(nome);
      } else {
        // remove o elemento
        publicacao.likes.splice(index, 1);
      }
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