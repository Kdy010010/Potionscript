# Potionscript
  Potion 기본 강의

Potion 언어 강의
============

1\. Potion 언어 소개
----------------

"Potion"은 웹 페이지에서 동작하는 스크립트 언어입니다. 기본적인 변수 할당, 산술 연산, 조건 및 반복문 등의 기능을 포함하고 있습니다.

2\. Potion 스크립트 시작하기
--------------------

웹 페이지에 "Potion" 스크립트를 추가하려면 다음과 같이 사용합니다:

<script type="text/potion">
  // Potion 코드
</script>

3\. 변수 할당하기
-----------

`store` 명령어를 사용해 변수에 값을 저장합니다.

store x = 5
store name = "John"
    

4\. 콘솔에 출력하기
------------

`show` 명령어를 사용해 변수의 값을 콘솔에 출력합니다.

store message = "Hello, Potion!"
show message
    

5\. 기본 산술 연산
------------

`mix`, `subtract`, `multiply`, `divide` 명령어로 기본 산술 연산을 수행합니다.

store a = 10
store b = 2
mix a b       // a + b
subtract a b  // a - b
multiply a b  // a \* b
divide a b    // a / b
show \_
    

6\. 조건문
-------

`if`와 `end` 사이의 코드를 조건에 따라 실행합니다.

store age = 15
if age > 18
  show "You are an adult!"
end
    

7\. 반복문
-------

`repeat`와 `end` 사이의 코드를 주어진 횟수만큼 반복하여 실행합니다.

repeat 3
  show "Hello, World!"
end
    

8\. 사용자 입력 받기
-------------

`getUserInput` 명령어로 사용자에게 메시지를 보여주고 입력을 받습니다.

getUserInput "What is your name?"
store userName = \_
show "Hello, " userName
    

9\. 라이브러리 가져오기
--------------

외부 라이브러리나 스크립트를 가져오려면 `import` 명령어를 사용합니다.

import "https://example.com/library.js"
    

© 2023 Potion 강의. 모든 권리 보유.
