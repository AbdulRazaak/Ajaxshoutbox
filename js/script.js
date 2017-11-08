/**
 * Created by Abdul Razaak on 10/31/2017.
 */
$(document).ready(function(){
   $('#submit').on('click',function () {
       var name = $('#name').val();
       var shout = $('#shout').val();
       var date = getDate();
       var dataString ='name='+ name + '&shout='+ shout + '&date=' + date;
       //Validation
       if (name == '' || shout == ''){
           alert('Please fill in your Name and Shout');
       } else {
           $.ajax({
               type:"POST",
               url:"../Ajaxshoutbox/shoutbox.php",
               data: dataString,
               cache: false,
               success:function (html) {
                   $('#shouts ul').prepend(html);
               }
           });
       }
        return false;
    });

});

//Format Date Like MySQL date
function getDate() {
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + (date.getUTCDate() + 1)).slice(-2) + ' ' +
        ('00' + (date.getUTCHours() + 1)).slice(-2) + ':' +
        ('00' + (date.getUTCMinutes() + 1)).slice(-2) + ':' +
        ('00' + (date.getUTCSeconds() + 1)).slice(-2);
    return date;

}
