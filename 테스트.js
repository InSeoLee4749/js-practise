let navidb = [
    ["네이버", "http://www.naver.com", "naver d-block mx-3"],
    ["다음", "http://www.daum.com", "daum d-block mx-3"],
    ["구글", "http://www.google.com", "google d-block mx-3"],
];

//콘솔로그 확인하기 console.log(navidb);
//다음만 출력 console.log(navidb[1][0]);
//구글에 링크값 출력 console.log(navidb[2][1]);

//구글을 카페24로 변경
navidb[2][0] = "카페24";
//마지막 필드에 뭐 라는 값을 전부 넣기
// for (var x = 0; x < 3; x++) {navidb[XMLDocument][3] = "뭐";}

// for (x in navidb) {
//     navidb[x][3] = "뭐";
// }
//마지막데이터필드의 첫번째 DB를 본인의 이름으로 바꾸기
// navidb[navidb.length - 1][0] = "이인서";

for (x in navidb) {
    navidb[x][3] = "뭐";
    navidb[x].push("라");
    navidb[x][navidb[x].length] = "고";
}

// navidb[navidb.length - 1].push = "마지막에 넣어줘"; .push : 마지막에 붙이는것

console.log(navidb);
