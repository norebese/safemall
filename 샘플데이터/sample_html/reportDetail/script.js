function answertab(){
    const tab = document.getElementById('manager-area');
    tab.innerHTML = `<div id="write-answer">
                        <div class="content-title">관리자 답변 작성</div>
                        <textarea name="answer" placeholder="답변을 입력해 주세요"></textarea>
                        <div class="button-area" id="answer-btn">
                            <button class="button">작성</button>
                            <svg id="cancelbtn" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </div>
                    </div>`
    document.getElementById("cancelbtn").addEventListener("click", function() {
        tab.innerHTML = `<div class="button-area" id="answer-btn">
                        <button type="button" class="button" onclick="answertab()">답변하기</button>
                        </div>`
    });
}