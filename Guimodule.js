function createPotionApp() {
    // 앱의 기본 요소 생성
    const app = document.createElement('div');
    const input = document.createElement('textarea');
    const runButton = document.createElement('button');
    const output = document.createElement('div');

    // 요소의 스타일과 속성 설정
    app.style.width = '500px';
    app.style.padding = '20px';
    input.style.width = '100%';
    runButton.textContent = 'Run Potion Code';
    output.style.border = '1px solid black';
    output.style.padding = '10px';

    // Run 버튼 클릭시 코드 실행
    runButton.addEventListener('click', async () => {
        output.innerHTML = ''; // 출력 초기화
        console.log = (message) => { output.innerHTML += message + '<br>'; } // console.log 재정의
        await interpretPotion(input.value);
    });

    // 앱 요소 추가
    app.appendChild(input);
    app.appendChild(runButton);
    app.appendChild(output);

    return app;
}

window.onload = function() {
    const app = createPotionApp();
    document.body.appendChild(app);
};
