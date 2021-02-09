let modalContent='';
function getProjects(projid){
        projid=localStorage.getItem(projid);
        var endpoint = 'http://localhost:8000/api/projects/'+projid;
             
             
    $.ajax({
        url:endpoint,
        dataType:'json',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        //contentType: 'application/json; charset=utf-8',
        method: 'GET',
        success: function(responseJson){
           console.log(responseJson);
            $.each(responseJson,
                function(index,value) {         
                    var btnid='btn1';
                    noProj = localStorage.getItem('noProj');                       
                    $('#clickProj').click(function(){
                        var blog = 
                        '<div class="col-md-8" id="userDiv">' +
                            '<div style="margin-top:50px;">' +
                                '<h6 style="background-color:rgb(235, 235, 235);padding:5px;">'+value.title+'</h6>' +
                                '<p style="line-height:px;">' +
                                    '<i class="fab fa-facebook"></i>' +
                                    'Community:'+value.community+' </p>' +
                                '<p style="line-height:px;">' +
                                    '<i class="fab fa-facebook"></i>' +
                                    'Start Date: '+value.startdate+' </p>' +
                                '<p style="line-height:px;">' +
                                    '<i class="fab fa-facebook"></i>' +
                                    'End Date: '+value.expectedenddate+'</p>' +
                                '<a href="index.html" class="btn btn-sm btn-danger">View & Comment</a>' +
                            '</div>' +
                        '</div>';
        
                                    $('#commentBlog').append(blog);
                    });
                    
                        
                    
                 
                  

            });
            
        },
        error: function (responseJson) {
            console.log(responseJson);
            
        }
    });
   
}



$(document).ready(

    function(){
     // $('#projcont').append(modalContent);

            
           
            // var btnText = localStorage.getItem('min' + minid);
            // //alert(btnText);
            // $('#minName').text(btnText);
            //getMinProjects(btnid,minid);
            // var i=1;
            // while(i <= noProj) {
            //     projid=localStorage.getItem('projid'+i);
            //      i++
            // }
        

            // alert("btn1 clicked");
            // $('.projCard').hide();
            // btnid='btn1';
            // projid=localStorage.getItem(btnid);
            // var btnText = localStorage.getItem('proj' + projid);
            //alert(btnText);
            // $('#minName').text(btnText);
            
        //$('#come').show();
       
    //     $('#btn2').click(function(){
    //         // alert("btn2 clicked");
    //         // $('.projCard').hide();
    //         var btnid='btn2';
    //         var minid=localStorage.getItem(btnid);
    //     getMinProjects(btnid,minid);
    //   });
       
        // $('#come').show();

})
