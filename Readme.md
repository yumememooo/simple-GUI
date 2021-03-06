# simple-html

簡單使用 Javascript(JQuery)/css/html 搭建打後端 API 呈現與操作之 GUI。

## 簡介

1. html:畫面元素的搭建

- bootstrap:網站樣板，由 HTML、CSS 和 JavaScript 寫成的前端框架，核心的設計目標是達成 RWD 響應式與行動優先。<br>
  如果不想要管網頁設計可以直接向以下這樣套用 ex:按鈕設計
  https://www.w3schools.com/bootstrap/bootstrap_buttons.asp (w3school 提供了很多範例線上可以直接按套用)

2. css: 畫面元素的樣式、色彩及動畫等
3. Javascript(js) 操控畫面的邏輯

- Jquery :jQuery 以 Javascript 來編寫的函式庫，幫你實作了很多 Javascript 的函數功能，讓開發者可以更輕鬆方便操作網頁元素，是免費的，需在 HTML 檔案中的 head 區塊引入。

  - jQuery 程式碼前面需寫 $()
  - jQuery 元素选择器:因為要操控 HTML 元素，就必須知道怎麼對應，最簡單的三種如下:

  ```
  $("button") 選到HTML元素中 <button> 元素。
  $("intro") 選到HTML元素中有加class="intro" 的元素。
  $("#demo") 選到HTML元素中的 id="demo" 的 元素，正常應只有一個。`
  更多:https://www.w3schools.com/jQuery/jquery_ref_selectors.asp
  https://medium.com/@linth/javascript-jquery-%E5%9F%BA%E7%A4%8E%E8%AA%9E%E6%B3%95%E5%92%8C%E6%A6%82%E5%BF%B5-1-4bad45ee9cf8
  ```

- React
- Vue
- Anglar

## 實作參考

- HTML 頁面參考 bootstrap4

  1. 輸入框/下拉選單 https://www.w3schools.com/bootstrap4/bootstrap_forms_inputs.asp
  2. 按鈕樣式 https://getbootstrap.com/docs/4.0/components/buttons/
  3. 弹出模态框 (Modal) https://code.z01.com/v4/components/modal.html
  4. 畫面調整:Bootstrap4 的 RWD class 解說

  - [CSS 學習筆記] Bootstrap4 布局與欄位的使用
    https://andy6804tw.github.io/2018/01/06/bootstrap-tutorial(1)/

- jQuery

  1. 按鈕事件 jQuery click() Method

  - https://www.w3schools.com/jquery/event_click.asp

  2. jQuery 利用 ajax 打後端 API

  - 【jQuery】如何使用 ajax 和後端 server 進行資料的 request, response
    https://spicyboyd.blogspot.com/2018/08/jquery-ajax-server-request-response.html

  3. 拿到資料後整理成表格( Json to table)

  - JQuery 版本 Json to table
    https://www.w3schools.com/code/tryit.asp?filename=GHYGTEA5D18G
  - IT 幫幫忙解答
    https://ithelp.ithome.com.tw/questions/10199870

## debug & Issue

- CORS
  如果打 API 遇到類似以下錯誤，代表跨域請求失敗，一般來講可以請後端加上'Access-Control-Allow-Origin':\* 實作解決。

```
Access to XMLHttpRequest at 'http://127.0.0.1:56888/api/v1/pet?animal_kind=Mickey%20Mouse&_=1611386085016' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

---

## Others

### git at local initial setting

- 1.link project

```
git init
git remote add origin https://github.com/yumememooo/simple-GUI.git
```

- 2.check commit user

```
//check local user
git config user.name
git config user.email
//change local user
git config user.name "yumememooo"
git config user.email "yumememooo@gmil.com"
* 此為指定本專案，請勿加上--global全域設定
```

- vscode
  Prettier - Code formatter
  對 HTML/CSS/JS 支援自動化 format 排版效果，提升美觀性容易維護。
  settings-Format on save
