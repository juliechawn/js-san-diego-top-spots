$(document).ready(function() {
    $.getJSON("data.json", function(data){
        var locationData = '';
        $.each(data, function(key, value){
            locationData += '<tr>';
            locationData += '<td>'+value.name+'</td>';
            locationData += '<td>'+value.description+'</td>';
            locationData += '<td> <a href="https://www.google.com/maps?q=' + value.location + '">Map</a> </td>';    
            locationData += '</tr>';    
            
        });
        $('#spots-table').append(locationData);
    });  
});

