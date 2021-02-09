let modalContent='';
function getMinProjects(btnid,minid){
        minid=localStorage.getItem(btnid);
        var endpoint = 'http://localhost:8000/api/ministries/'+minid+'/projects';
           //let lis='';  
             
    $.ajax({
        url:endpoint,
        dataType:'json',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        //contentType: 'application/json; charset=utf-8',
        method: 'GET',
        success: function(responseJson){
           console.log(responseJson.length);
           localStorage.setItem('noProj', responseJson.length);
            $.each(responseJson,
                function(index,value) {
                  //var idIndex='mod'+(index+1);
                  // $('.modal').prop('id',idIndex);
                  // var k=$('.modal').prop('id');
                  //alert(idIndex);

                  localStorage.setItem('projid'+index, value.id);
                  $.each(value.image, function(ind, v) {
                    var imgurl = 'http://localhost:8000'+v.url;
                    $('.numbertext').html((ind+1)+' of '+value.image.length);
                    var p=v.phase;
                    console.log(imgurl,' ',p);
                   // $('.myslids>img').prop('onclick', 'openModal('+k+')');
                    
                  });
                  

                    //alert(value.title);
                                 
                            
                    
                    var blog =
                        '<div class="col-md-4">' +
                            '<div class="container" id="userDiv">' +
                                '<div style="margin-bottom:50px;">' +
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
                                    '<a href="commentBlog.html" class="btn btn-sm btn-danger" target="_blank" id="clickProj">View & Comment</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                    
                        
                    
                  $('#appendBlog').append(blog);
                  //$('#listed').append(lis);
                  
                  //$('#th').append(lis)
                  //$('.numbertext').append(lis);
            //     var card = '<div class="projCard"'+btnid+' style="color:black;" id="come">'
            //     + '<div class="card mb-3" id="proj_card">' +
        
            //        + '<div class="card-body">'
            //         +'<img src="..." class="card-img-top" alt="...">'
            //         + '<h5 class="card-title" id="pro_title">'+value.title+'</h5>'
            //         + '<p class="card-text" id="pro_desc">'+value.projectsummary+'</p>'
            //         + '<p class="card-text" id="pro_desc">'+value.community+'</p>'
            //         + '<p class="card-text" id="pro_desc">'+value.location+'</p>'
        
        
            //        + '</div>'
            //     + '</div>'
            //    + '</div>';

            //    $(".container").append(card);

            });
            // $('#resp').html(" <div class='alert alert-success' role='alert'>" +
            //     "  Login Successfull" +
            //     "</div>");
        },
        error: function (responseJson) {
            console.log(responseJson);
            // $('#resp').html(" <div class='alert alert-danger' role='alert'>" +
            //     "  Login Failed" +
            //     "</div>");
        }
    });
   
}

// function getImages(img, server) {
//   $.each(img, function(index, v) {
//     var imgurl = server+v.url;
//     //console.log(imgurl);
//     '<div>PHASE: <span>'+v.phase+'</span>' + '<br >'+
//     '<img src="'+server+v.url+'" width="200"/> </div>';     
// });
// }

$(document).ready(

    function(){
      $('#projcont').append(modalContent);

            var btnid='btn1';
            var minid=localStorage.getItem(btnid);
            // var btnText = localStorage.getItem('min' + minid);
            // //alert(btnText);
            // $('#minName').text(btnText);
            //getMinProjects(btnid,minid);
        $('#btn1').click(function(evt){
            // alert("btn1 clicked");
            // $('.projCard').hide();
            btnid='btn1';
            minid=localStorage.getItem(btnid);
            var btnText = localStorage.getItem('min' + minid);
            //alert(btnText);
            $('#minName').text(btnText);
            getMinProjects(btnid,minid);
          });
        //$('#come').show();
       
        $('#btn2').click(function(){
            // alert("btn2 clicked");
            // $('.projCard').hide();
            var btnid='btn2';
            var minid=localStorage.getItem(btnid);
        getMinProjects(btnid,minid);
      });
       
        // $('#come').show();

})
