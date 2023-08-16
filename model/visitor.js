//exports.getVisitors = function () {
//     //sql실행
//     return [
//       {
//         name: '홍길동',
//         comment: "내가왔다.",

//       },
//       {
//         id: '이찬혁',
//         userId: "잘 왔다.",

//       },
//     ]
//   };

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "kdt8.cfxcqwnoihhf.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "kdt8",
  port: 3306,
});

conn.connect();

//getVisitors는 controller가 사용하기 위해서 만들어진 것
exports.getVisitors = function (callback) {
  let sql = "select * from visitor";
  conn.query(sql, function (err, rows) {
    callback(rows); //callback이란 함수에 rows를 보낸다.
  });
};

//회원등록
exports.getRegister = function (data, callback) {
  let sql = `insert into visitor (name, comment) values ("${data.name}", "${data.comment}")`;

  conn.query(sql, function (err, rows) {
    //console.log("rows", rows); result와 동일
    callback(rows); //callback이란 함수에 rows를 보낸다.
  });
};

//회원수정
exports.getModify = function (data, callback) {
  console.log("data", data);
  let sql = `UPDATE visitor SET name='${data.name}',comment='${data.comment}' WHERE id=${data.id}`;
  //console.log(sql);
  conn.query(sql, function (err, rows) {
    callback(rows);
  });
};

//회원삭제
exports.getDelete = function (data, callback) {
  //console.log(data);
  let sql = `delete from visitor where id=${data.id}`;
  console.log("sql", sql);
  conn.query(sql, function (err, rows) {
    callback(rows);
  });
};
