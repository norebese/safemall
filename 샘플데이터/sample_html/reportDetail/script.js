function answertab(){
    const tab = document.getElementById('manager-area');
    tab.innerHTML = `<div id="write-answer">
                        <div class="content-title">관리자 답변 작성</div>
                        <textarea name="answer" placeholder="답변을 입력해 주세요"></textarea>
                        <div class="button-area">
                            <button class="button">작성</button>
                        </div>
                    </div>`
}