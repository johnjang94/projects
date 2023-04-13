let formField = document.getElementById("formfield");
const danGer = document.getElementById("danger");

if (formField.value == "") {
  danGer.style.display = "block";
}

formField();

// 지금 내가 마주한 문제는...
// form field 를 클릭한 이후, 내가 아무런 정보를 입력하지 않으면 경고성 메세지가 뜨는 것이다
// form field 를 누르면
// 그 어떤 메세지 이던... 입력할 수 있는데
// 만약 아무런 메세지를 입력하지 않았다면
// 어떻게 해야 입력란이 빨간색으로 변하면서
// 경고성 메세지가 뜰 수 있을까?
