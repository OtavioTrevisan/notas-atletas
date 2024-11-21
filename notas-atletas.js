// Dados de entrada com atletas e suas notas
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Função para calcular a média válida das notas
  function calcularMedia(atletas) {
    // Percorrendo todos os atletas
    atletas.forEach(atleta => {
      // Ordena as notas do atleta
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      
      // Elimina a maior e a menor nota
      let notasComputadas = notasOrdenadas.slice(1, 4);
      
      // Calcula a soma das notas válidas
      let soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
      
      // Calcula a média das notas válidas
      let media = soma / notasComputadas.length;
  
      // Exibe o resultado
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
      console.log(`Média Válida: ${media.toFixed(10)}`);
      console.log("");
    });
  }
  
  // Chama a função para calcular e exibir as médias
  calcularMedia(atletas);
  