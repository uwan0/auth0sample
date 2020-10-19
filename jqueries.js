/*$("#sbmbtn").click(function (e) {
  $.ajaxSubmit({
      headers: {
        "Authorization": "Bearer "+ opener.gactn
      },
  $("#submitForm").submit();
  });
});*/
/*
$('#submitForm').on('submit', function () {
    $(this).ajaxSubmit();
});
*/
$('#submitForm').submit(function() { 
    // submit the form 
    $(this).ajaxSubmit({
      headers: {
        "Authorization": "Bearer "+ opener.gactn
      }
    }); 
    // return false to prevent normal browser submit and page navigation 
    //return false; 
});
