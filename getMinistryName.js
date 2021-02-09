$(document).ready(
    function(){
        $(".allBtn").hide();
        var btnNo = 1;
        //var buttonId = 'btn' + btnNo;
        //console.log(buttonId);

        var endpoint = 'http://localhost:8000/api/ministries';

        $.ajax({
            url:endpoint,
            contentType: 'application/json; charset=utf-8',
            dataType:'json',
            crossDomain:true,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                // 'Access-Control-Allow-Origin':true
            },
            //contentType: 'application/json; charset=utf-8',
            method: 'GET',
            success: function(responseJson){
                console.log(responseJson);
                
                $.each(responseJson,
                    function(index,value) {

                    var span ='<span>'+value.name+'</span>';
                    var buttonId = "btn"+(btnNo++);
                    var minid=value.id;
                    localStorage.setItem(buttonId,value.id);
                    localStorage.setItem('min'+value.id, value.name);
                    
                    var button=$('#'+buttonId).append(span);
                    $('#'+buttonId).show();

                        $("#leftDiv").append(button);

                        console.log(index + ' ' + value.name);
                    });

            },
            error: function (data) {
                console.log(data);

            }
        });

    }
)
