const inputField = document.querySelector('input[type="text"]');

// 클릭 이벤트 리스너 추가
inputField.addEventListener('click', () => {
    inputField.value = '';   // 입력 필드 내용 지우기
    inputField.focus();     // 입력 필드에 포커스 설정
});