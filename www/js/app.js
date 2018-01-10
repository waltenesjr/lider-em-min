// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('utilizando', {
      url: '/utilizando',
      abstract: true,
      templateUrl: 'templates/menu-utilizando.html',
      controller: 'AppCtrl'
    })

  .state('utilizando.utilizandohome', {
    url: '/utilizandohome',
    views: {
      'menuContent': {
        templateUrl: 'templates/utilizando.html'
      }
    },
  })

    .state('inicioutilizando', {
      url: '/inicioutilizando',
      templateUrl: 'templates/utilizando/inicio.html'
    })

    .state('lideremmin', {
      url: '/lideremmin',
      templateUrl: 'templates/utilizando/lider-em-min.html'
    })

    .state('escolha', {
      url: '/escolha',
      templateUrl: 'templates/utilizando/escolha.html'
    })

    .state('facapazes', {
      url: '/facapazes',
      templateUrl: 'templates/utilizando/faca-pazes.html'
    })

    .state('realidade', {
      url: '/realidade',
      templateUrl: 'templates/utilizando/realidade.html'
    })

    .state('olheparasi', {
      url: '/olheparasi',
      templateUrl: 'templates/utilizando/olha-para-si.html'
    })

    .state('sejabom', {
      url: '/sejabom',
      templateUrl: 'templates/utilizando/seja-bom.html'
    })

    .state('recursos', {
      url: '/recursos',
      templateUrl: 'templates/utilizando/recursos.html'
    })

    .state('idealizadora', {
      url: '/idealizadora',
      templateUrl: 'templates/utilizando/idealizadora.html'
    })

    .state('atualizar', {
      url: '/atualizar',
      abstract: true,
      templateUrl: 'templates/menu-atualizar.html',
      controller: 'AppCtrl'
    })

    .state('atualizar.atualizarhome', {
      url: '/atualizarhome',
      views: {
        'menuContent': {
          templateUrl: 'templates/atualizar.html'
        }
      }
    })

    .state('oquee', {
      url: '/oquee',
      templateUrl: 'templates/atualizar/lider-em-min.html'
    })

    .state('oqueelideranca', {
    url: '/oqueelideranca',
    templateUrl: 'templates/atualizar/o-que-e.html'
  })

    .state('sabotagem', {
      url: '/sabotagem',
      templateUrl: 'templates/atualizar/sabotagem.html'
    })

    .state('idealizacao', {
      url: '/idealizacao',
      templateUrl: 'templates/atualizar/idealizacao.html'
    })

    .state('comparacao', {
      url: '/comparacao',
      templateUrl: 'templates/atualizar/comparacao.html'
    })

    .state('autonomia', {
      url: '/autonomia',
      templateUrl: 'templates/atualizar/autonomia.html'
    })

    .state('liberdade', {
      url: '/liberdade',
      templateUrl: 'templates/atualizar/liberdade.html'
    })

    .state('impotencia', {
      url: '/impotencia',
      templateUrl: 'templates/atualizar/impotencia.html'
    })

    .state('realizacao', {
      url: '/realizacao',
      templateUrl: 'templates/atualizar/realizacao.html'
    })

    .state('seulider', {
      url: '/seulider',
      abstract: true,
      templateUrl: 'templates/menu-seu-lider.html',
      controller: 'AppCtrl'
    })

    .state('seulider.seja', {
      url: '/seja',
      views: {
        'menuContent': {
          templateUrl: 'templates/seja.html'
        }
      }
    })

    .state('pratique', {
      url: '/pratique',
      abstract: true,
      templateUrl: 'templates/menu-pratique.html',
      controller: 'AppCtrl'
    })

    .state('pratique.pratiquehome', {
      url: '/pratiquehome',
      views: {
        'menuContent': {
          templateUrl: 'templates/pratique.html'
        }
      }
    })

    .state('tempopro', {
      url: '/tempopro',
      templateUrl: 'templates/pratique/tempo-pro.html'
    })

    .state('escritapro', {
      url: '/escritapro',
      templateUrl: 'templates/pratique/escrita-pro.html'
    })

    .state('recursopro', {
      url: '/recursopro',
      templateUrl: 'templates/pratique/recurso-pro.html'
    })

    .state('atitudepro', {
      url: '/atitudepro',
      templateUrl: 'templates/pratique/atitude.html'
    })

    .state('focodisciplina', {
      url: '/focodisciplina',
      templateUrl: 'templates/pratique/foco-disciplina.html'
    })

    .state('autocritica', {
      url: '/autocritica',
      templateUrl: 'templates/pratique/auto-critica.html'
    })

    .state('video', {
      url: '/video',
      abstract: true,
      templateUrl: 'templates/menu-video.html',
      controller: 'AppCtrl'
    })

    .state('video.videohome', {
      url: '/videohome',
      views: {
        'menuContent': {
          templateUrl: 'templates/video.html'
        }
      }
    })

    .state('leitura', {
      url: '/leitura',
      abstract: true,
      templateUrl: 'templates/menu-leitura.html',
      controller: 'AppCtrl'
    })

    .state('leitura.leiturahome', {
      url: '/leiturahome',
      views: {
        'menuContent': {
          templateUrl: 'templates/leitura.html'
        }
      }
    })

    .state('filme', {
      url: '/filme',
      abstract: true,
      templateUrl: 'templates/menu-filme.html',
      controller: 'AppCtrl'
    })

    .state('filme.filmehome', {
      url: '/filmehome',
      views: {
        'menuContent': {
          templateUrl: 'templates/filme.html'
        }
      }
    })

    .state('ebook', {
      url: '/ebook',
      abstract: true,
      templateUrl: 'templates/menu-ebook.html',
      controller: 'AppCtrl'
    })

    .state('ebook.ebookhome', {
      url: '/ebookhome',
      views: {
        'menuContent': {
          templateUrl: 'templates/ebook.html'
        }
      }
    })

    .state('programacao', {
      url: '/programacao',
      abstract: true,
      templateUrl: 'templates/menu-programacao.html',
      controller: 'AppCtrl'
    })

    .state('programacao.programacaohome', {
      url: '/programacaohome',
      views: {
        'menuContent': {
          templateUrl: 'templates/programacao.html'
        }
      }
    })

    .state('init', {
      url: '/init',
      templateUrl: 'templates/init.html',
      controller: 'AppCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/init');
});
