# 채팅방 구현 중 마지막 문자가 한번 더 채팅창에 입력되는 오류 발생

## 오류 분석
1. 숫자, 영어, 한글 입력 중, 한글의 경우 위 오류가 발생함을 확인
2.  Input Method Editor(IME)의 동작 방법으로 인한 오류라고 판단하여 해결 방법 모색

## 디버깅
isComposition 변수를 추가하고 compositionstart, copositionend 이벤트리스너를 통해 문자의 조합 상태를 확인
1. 문자 조합 중(isComposition === true)
2. 문자 조합 끝 (isComposition === false)
문자 조합을 끝낼 때 keydown 이벤트가 두번 실행되는 것 확인

### 디버깅 결과
1. keydown 이벤트 콜백함수 실행 시, 조합하던 "마지막 문자"를 대상으로 채팅을 추가하는 loggingBubble()이 한 번 더 실행되어 채팅이 두번 추가되는 것을 확인

## 트러블 슈팅
1. 문자 조합이 끝난 상태(isComposition === false)일 때만 Enter || NumpadEnter 입력 시 채팅이 추가되도록 조건문을 수정하여 띄어쓰기를 위한 Space 입력이 Enter처럼 작동하지 않도록 예외처리 완료