$(document).ready(function(){
    $("button").click(function(){ //mean select <button>
      alert("Value: " + $("#test").val()); //mean select < id="test"> //alet會跳出視窗
      getpets()
    });
  });


  function getpets() {
    // 接收前端的input資料：帳號、密碼
    //var data = { id: $("#account").val(), pwd: $("#password").val() };
    $.ajax({
        url: "http://127.0.0.1:56888/api/v1/pet",   //後端的URL
        type: "GET",   //用POST的方式
        dataType: "json",   //response的資料格式
        cache: false,   //是否暫存
       // data: data, //傳送給後端的資料
        success: function(response) {
            console.log(response);  //成功後回傳的資料

            // if (response.auth === 1) {
            //     window.location.href = "camera.html";   //帳密確認成功後，轉址
            // } else {
            //     $("#invalid").show();   //帳密輸入錯誤，訊息框
            //     centered($("#invalid"));

            //     $(window).resize(function() {
            //         centered($("#invalid"));
            //     });

            //     setTimeout(function() {
            //         $("#invalid").hide();
            //     }, 3000);
            // }
        }
    });
}