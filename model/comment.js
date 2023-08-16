//데이터베이스 선택하는 부분

exports.commentInfos = function () {
  //sql실행
  return [
    {
      id: 1,
      userId: "AAA",
      date: "2023-08-01",
      comment: "안녕하세요",
    },
    {
      id: 2,
      userId: "BBB",
      date: "2023-08-02",
      comment: "반가워요",
    },
    {
      id: 3,
      userId: "CCC",
      date: "2023-08-03",
      comment: "안녕하세요~~",
    },
    {
      id: 4,
      userId: "DDD",
      date: "2023-08-04",
      comment: "반가워요~~",
    },
  ];
};
