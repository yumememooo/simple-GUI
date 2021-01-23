$(document).ready(function () {
  $("button").click(function () {
    getpets($("#kind").val());
  });
});

function getpets(kind) {
  // 接收前端的input資料：帳號、密碼
  //var data = { id: $("#account").val(), pwd: $("#password").val() };
  var url = "http://localhost:56888/api/v1/pet?animal_kind=" + kind;

  $.ajax({
    url: url, //後端的URL
    type: "GET", //用POST的方式
    dataType: "json", //response的資料格式
    cache: false, //是否暫存
    // data: data, //傳送給後端的資料
    success: function (response) {
      console.log(response); //成功後回傳的資料json
      // alert(response);
      $("#size").text("Result size: " + response.length);
      if (response.length > 0) {
        jsonString = JSON.stringify(response); //JSON.stringify() 方法是將一個JavaScript值(物件或者陣列)轉換為一個 JSON字串
        json2table(jsonString, $("#table"));
      }
    },
  });
}

function json2table(jsonString, $table) {
  var json = JSON.parse(jsonString);
  var cols = Object.keys(json[0]);

  var headerRow = "";
  var bodyRows = "";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $table.html("<thead><tr></tr></thead><tbody></tbody>");

  cols.map(function (col) {
    headerRow += "<th>" + capitalizeFirstLetter(col) + "</th>";
  });

  json.map(function (row) {
    bodyRows += "<tr>";

    cols.map(function (colName) {
      bodyRows += "<td>" + row[colName] + "</td>";
    });

    bodyRows += "</tr>";
  });

  $table.find("thead tr").append(headerRow);
  $table.find("tbody").append(bodyRows);
}
