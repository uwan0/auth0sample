$("#sbmbtn").on('click', function (e) {
  $.ajaxSubmit({
      headers: {
        "Authorization": "Bearer "+ opener.gactn
      }
  });
});

