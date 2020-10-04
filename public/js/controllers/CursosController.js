angular.module('ifsp').controller('CursosController',
    function($resource, $scope, Curso) {
        $scope.cursos = [];
        $scope.filtro = '';

        function buscaCursos() {
            Curso.query(
                function(cursos) {
                    $scope.cursos = cursos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista");
                    console.log(erro);
                }
            );
        }
        buscaCursos();

        $scope.remove = function(curso) {
            console.log(curso);
            Curso.delete({ id: curso._id },
                buscaCursos,
                function(erro) {
                    console.log("Não foi possível remover o curso");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível remover o curso" };
                });
        };
    });