//라우터 이용하려면 express가 있어야 한다.
const express = require("express");
const router = express.Router();

//컨토롤러와 연결
const controller = require("../controller/Cmain");

//여기서 컨트롤러와 연결 (페이지랑 띄워주고 싶은 파일)

// router.get("/", controller.main); //GET
// //메인페이지
// router.get("/comments", controller.comment_list); //GET/comments
// //comments페이지
// router.get("/comment/:id", controller.comment); //GET/comment/:id

//-------------------실습-----------------------

router.get("/", controller.main);

//방명록 전체 보이기
router.get("/visitor", controller.visitors);

//회원 등록하기
router.post("/visitor/register", controller.register);

//회원 수정하기
router.patch("/visitor/modify", controller.modify);

//회원 삭제하기
router.delete("/visitor/delete", controller.delete);

module.exports = router;
