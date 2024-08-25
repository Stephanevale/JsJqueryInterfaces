var hotel = {  // Objeto representa um hote, tem 5 propriedades e um método
    nome: 'Quay', //Propriedade (variáveis) contendo sua chave - valor
    quartos: 40, //Propriedade (variáveis) contendo sua chave chave - valor
    reservado: 25, //Propriedade (variáveis) contendo sua chave - valor
    gym: true, //Propriedade (variáveis) contendo sua chave - valor
    tiposDeQuarto: ['simples', 'duplo', 'suite'], //Propriedade (variáveis)

    verificarDisponibilidade: function(){   //Método (função)
        return this.quartos - this.reservado;   //Método
    }
}

hotel.name = 'Quay'; //Atualiza um objeto
hotel['name'] = 'Carra'; //Atualiza um objeto
delete hotel.rooms; //Deleta uma propriedade
hotel.booked = ''; //Limpa o valor de uma propriedade

var hotelNome = hotel.nome;
var quartosVagos = hotel.verificarDisponibilidade();
