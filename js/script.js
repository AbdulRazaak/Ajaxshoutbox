/**
 * Created by Abdul Razaak on 10/31/2017.
 */
$(document).ready(function(){
   $('#submit').on('click',function () {
       var name = $('#name').val();
       var shout = $('#shout').val();
       //Validation
       if (name == '' || shout == ''){
           alert('Please fill in your Name and Shout');
       }

    });

});
