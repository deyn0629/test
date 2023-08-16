const express = require("express");
const app = express();
const PORT = 8000;

//뷰 엔진, 바디파서
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적파일제공
app.use("/views", express.static(__dirname + "/views"));

//------------------------------------------------------------
//라우터 분리
const indexRouter = require("./routes/index.js"); //index.js는 생략가능
app.use("/", indexRouter);

//404페이지 오류처리
//get > use 로 바꿔도 상관없음
app.use("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("연결성공");
});
