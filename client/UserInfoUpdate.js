/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function() {    


  
	

    $.getJSON("/counts.json", function(userinfo) {
	
    	
       $('#output-area').append('<p >User id = <b style="color:pink">'+userinfo.id+'</b>');
	   $('#output-area').append('<p >User name = <b style="color:pink">'+userinfo.username+'</b>');
	   $('#output-area').append('<p >User screnname = <b style="color:pink">'+userinfo.screen_name+'</b>');
	   $('#output-area').append('<p >User location = <b style="color:pink">'+userinfo.location+'</b>');
	   $('#output-area').append('<p >User Followers Count = <b style="color:pink">'+userinfo.followers_count+'</b>');
	   
	   $('#output-area').append('<p >User Frinds Count = <b style="color:pink">'+userinfo.friends_count+'</b>');
	   $('#userimage').attr('src',userinfo.profile_image_url);
	   });  // done getJSON

     // done setInterval
        
}); // done ready
