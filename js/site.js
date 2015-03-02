/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var car = Object();

car.color = "Red";
car.engine = "1.2";
car.mf = "ford";
car.model = "Escort";

$(function(){
    
    console.log('jQuery is loaded');
    
    $('#btnLoadCarData').on('click', function () {
        
        console.log('btnLoadCarData Clicked');
        
        $.getJSON('cars.json', function(data) {
        
            $('#tdColor').html(data.color);
            $('#tdEngine').html(data.engine);
            $('#tdMf').html(data.mf);
            $('#tdModel').html(data.model);

        });

    });
    
});


