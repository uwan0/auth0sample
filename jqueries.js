/*$("#sbmbtn").click(function (e) {
  $.ajaxSubmit({
      headers: {
        "Authorization": "Bearer "+ opener.gactn
      },
  $("#submitForm").submit();
  });
});*/

$('#submitForm').on('submit', function () {
    $(this).ajaxSubmit();
});
