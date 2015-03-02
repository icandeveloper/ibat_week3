/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    
    console.log('jQuery is loaded');
    
    $.getJSON('products.json', function(data) {
        
        var productTable = [];

        productTable.push('<table class="table table-bordered table-striped">');

        productTable.push('<thead><tr><th>ID</th><th>Title</th><th>Colors</th></tr></thead>');

        productTable.push('<tbody>');
        
        var numberOfProducts = data.length;
        
        for ( var $i = 0; $i < numberOfProducts; $i++ ) {

            productTable.push('<tr>');
        
            productTable.push('<td id="tdColor">'+data[$i]['id']+'</td>');
            productTable.push('<td id="tdTitle">'+data[$i]['title']+'</td>');
            
            console.log('Product ID is %d', data[$i]['id']);
            
            var numberOfColors = data[$i]['colors'].length;
            
            // console.log('Number of colors is %d', numberOfColors);
            
            var theColors = [];
            
            for ( var $j = 0; $j < numberOfColors; $j++ ) {
                
                theColors.push(data[$i]['colors'][$j]);
                
                // console.log('----Color is %s', data[$i]['colors'][$j]);
                
            }
            
            console.log(theColors);
            
            productTable.push('<td id="tdColors">'+productTable.join(" ")+theColors.toString+'</td>');
            
            productTable.push('</tr>');
        
        }
        
        /*$.each(data, function(i, field){
            
            $("#productTable").append(field.title + " ( " + field.id + " ) <br />");
            
        });*/
    
        productTable.push('</tbody>');

        productTable.push('</table>');

        console.log(productTable);

        $('#productTable').html(productTable.join(" "));
        // $('#productTable').html(productTable.toString);

    });
    
    
});


