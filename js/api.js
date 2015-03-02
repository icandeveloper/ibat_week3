/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    
    console.log('jQuery is loaded');

    $.getJSON('http://reqr.es/api/users?page=2', function(data) {
        
        var apiTable = [];

        apiTable.push('<table class="table table-bordered table-striped">');

        apiTable.push('<thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Avatar</th></tr></thead>');

        apiTable.push('<tbody>');
        
        $.each(data, function(i, field){
            
            if ( i == 'data' ) {
                
                $.each(data.data, function(key, val){
                    
                    // console.log(key+' | '+val.first_name); 
                    apiTable.push('<tr><th>'+val.id+'</th><th>'+val.first_name+'</th><th>'+val.last_name+'</th><th><img class="img-responsive" src="'+val.avatar+'"/></th></tr>');
                
                });
                
            }
            
        });
    
        apiTable.push('</tbody>');

        apiTable.push('</table>');

        console.log(apiTable);

        $('#apiTable').html(apiTable.join(" "));
        
    });
    
    
});


