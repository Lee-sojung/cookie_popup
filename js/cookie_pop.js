/*
   document.cookie = "쿠키이름=쿠키값; path=/; expires = 쿠키가 삭제될 날짜";
   function setCookie(name, val, due){
   document.cookie = `${name}=${val}; path=/; expires = ${due}`;
   }
*/

const btnDel = document.querySelector(".del");
const btnView = document.querySelector(".view");
const popup = document.querySelector("#popup");
const btnClose = popup.querySelector(".close");

const isCookie = document.cookie.indexOf("today=done");
let isOn;



/*
(isCookie == -1) ? isOn = "block" : isOn ="none"; 아래와 같은 코드
*/
if(isCookie == -1){ // -1 => 쿠키가 없다면
   console.log("쿠키없음");
   isOn = "block";
}else{
   console.log("쿠키있음");
   isOn = "none";
}
popup.style.display = isOn;



//쿠키확인 이벤트
btnView.addEventListener("click", e=>{
   e.preventDefault();
   console.log(document.cookie);

});

//쿠키 확인 버튼 이벤트
btnDel.addEventListener("click", e=>{
   e.preventDefault();
   setCookie("today", "done", 0);
});

//팝업 닫기 버튼 이벤트
btnClose.addEventListener("click", e=>{
   popup.style.display = "none";

   let isChecked = popup.querySelector("input[type=checkbox]").checked;
   if(isChecked) setCookie("today", "done", 1);
});


function setCookie(name, val, due){
   const today = new Date();
   const date = today.getDate();
   today.setDate(date + due);
   const duedate = today.toGMTString();
   document.cookie = `${name}=${val}; path=/; expires = ${duedate}`;
}