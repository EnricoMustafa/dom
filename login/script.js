const v1 = document.getElementById('nota1');
const v2 = document.getElementById('nota2');
const v3 = document.getElementById('nota3');

function media(){
    let n1 = parseFloat(v1.value); 
    let n2 = parseFloat(v2.value); 
    let n3 = parseFloat(v3.value);
    let total = (n1 + n2 + n3) / 3;

    const status = document.getElementById('statusAluno');
    const situacaoAluno = document.getElementById('situacao');
    if(total >= 6){
        status.textContent = "Aprovado";
        situacaoAluno.textContent = "Aluno passou de ano";
    } else if(total > 4) {
        status.textContent = "Reprovado";
        situacaoAluno.textContent = "Aluno vai para prova final";
    } else if(total < 4){
        status.textContent = "Reprovado";
        situacaoAluno.textContent = "Aluno vai para recuperação";
    }

    const resultado = document.getElementById('mediaValor');
    resultado.textContent = total.toFixed(2);
}




