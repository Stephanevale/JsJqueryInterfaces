function Hotel (name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}
var quayHotel = new Hotel('Quay', 40, 25); //Valores atualizados nas propriedades desse objeto
var parkHotel = new Hotel('Parker', 120, 77); //Valores atualizados nas propriedades desse objeto

var detais1 = quayHotel.name + ' rooms: ';
    detais1 += quayHotel.checkAvailability();
var elHotel1= document.getElementById('hotel1');
elHotel1.textContent = detais1;

var detais2 = parkHotel.name + ' rooms: ';
    detais2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = detais2;