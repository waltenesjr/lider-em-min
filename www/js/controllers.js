angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.abrirUtilizando = function () {
    $state.go('utilizando.utilizandohome');

  }

  $scope.abrirLiderEmMin = function () {
    $state.go('lideremmin')
  }

  $scope.abrirEscolha = function () {
    $state.go('escolha')
  }

  $scope.abrirFacaPazes = function () {
    $state.go('facapazes')
  }

  $scope.abrirRealidade = function () {
    $state.go('realidade')
  }

  $scope.abrirOlheParaSi = function () {
    $state.go('olheparasi')
  }

  $scope.abrirSejaBom = function () {
    $state.go('sejabom')
  }

  $scope.abrirRecursos = function () {
    $state.go('recursos')
  }

  $scope.abrirIdealizadora = function () {
    $state.go('idealizadora')
  }



  $scope.abrirOQueE = function () {
    $state.go('oquee')
  }

  $scope.abrirOQueELideranca = function () {
    $state.go('oqueelideranca')
  }

  $scope.abrirSabotagem = function () {
    $state.go('sabotagem')
  }

  $scope.abrirIdealizacao = function () {
    $state.go('idealizacao')
  }

  $scope.abrirComparacao = function () {
    $state.go('comparacao')
  }

  $scope.abrirAutonomia = function () {
    $state.go('autonomia')
  }

  $scope.abrirLiberdade = function () {
    $state.go('liberdade')
  }

  $scope.abrirImpotencia = function () {
    $state.go('impotencia')
  }

  $scope.abrirRealizacao = function () {
    $state.go('realizacao')
  }





  $scope.abrirTempoPro = function () {
    $state.go('tempopro')
  }

  $scope.abrirEscritaPro = function () {
    $state.go('escritapro')
  }

  $scope.abrirRecursoPro = function () {
    $state.go('recursopro')
  }

  $scope.abrirAtitudePro = function () {
    $state.go('atitudepro')
  }

  $scope.abrirFocoDisciplina = function () {
    $state.go('focodisciplina')
  }

  $scope.abrirAutoCritica = function () {
    $state.go('autocritica')
  }
})
