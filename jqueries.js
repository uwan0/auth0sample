
$(document).ready(function () {
  $('#file').on('change', function () {
    $('#submitForm').submit({
      headers: {
        "Authorization": "Bearer "+ opener.gactn
      }
    });
  });

  $('#submitForm').on('submit', function (e) {
    e.preventDefault();
    $(this).ajaxSubmit();
  });
});
