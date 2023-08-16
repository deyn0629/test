//모델과 뷰와 연결
//const Comment = require("../model/comment");
const Visitor = require("../model/visitor");

//라우터 연결
exports.main = function (req, res) {
  res.render("index");
};

exports.comment_list = function (req, res) {
  //console.log(Comment.commentInfos());
  //console.log(Comment.commentInfos()[3].id);
  res.render("comment_list", { commentInfos: Comment.commentInfos() });
};

exports.comment = function (req, res) {
  console.log(req.params);

  //const comment = Comment.commentInfos();
  //const commentID = req.params.id;

  // console.log("id", commentID);
  // console.log("comment", comment);
  // [ {}, {}, {}]
  res.render("comment", { commentInfo: comment[commentID - 1] });
};

//--------------------------------------------------
// exports.visitor = function (req, res) {
//   console.log(Comment.getVisitors());
//   res.render("visitor", { data: Comment.getVisitors() });
// };

//메인페이지
exports.main = function (req, res) {
  res.render("index");
};

//전체 방명록 조회
exports.visitors = function (req, res) {
  //라우터에서 쓸거야
  Visitor.getVisitors(function (result) {
    //데이터파일에 있는 함수 쓸거야
    //console.log("처음 result", result); //데이터 [{},{},{}..] 형식
    res.render("visitor", { data: result });
  });
};

//회원등록
exports.register = function (req, res) {
  Visitor.getRegister(req.body, function (result) {
    //console.log("응답완료", req.body);
    //console.log("result", result); rows아 동일
    res.send({
      result: true,
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

//회원수정
exports.modify = function (req, res) {
  Visitor.getModify(req.body, function (result) {
    console.log("응답완료", req.body);
    //console.log("result", result); // rows와 동일
    res.send({
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

//회원삭제
exports.delete = function (req, res) {
  Visitor.getDelete(req.body, function (result) {
    //console.log("응답완료", req.body);
    //console.log("result", result); // rows와 동일
    res.send({
      result: true,
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
