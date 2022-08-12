const horasDia = 8

function calculaSalario(){
    let dias = document.getElementById("dias").value;
    let salarioHora = document.getElementById("salarioHora").value;
    let salarioFinal = (dias*horasDia) * salarioHora;
    console.log(salarioFinal);
    document.getElementById("resposta").innerHTML = 'R$ ' + salarioFinal.toFixed(2);
 }

function calcularValorHora() {
  const diasTrabalhados = document.querySelector ("#dias").value;
  const salarioTotal = document.querySelector('#salarioTotal').value; //alterar o valorHora para salarioTotal no hora.html
  const valorHora = (salarioTotal / diasTrabalhados / 8)
  const salarioHora = document.querySelector('#valorHora')
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}     
