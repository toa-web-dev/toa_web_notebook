스크롤을 내리면 cover가 content에 가려지도록 구축하기
cover는 position: fixed를 할당하여 스크롤에 영향을 받지 않도록 설정한다.
아래에서 올라오는 content는 cover의 높이만큼 상단을 띄우고 position: relative나 absolute를 할당한다.

## KEYWORD: 쌓임맥락, 랜더링

1. 문제
- content의 postion 설정에 대한 의문점: z-index에 무관하게 static은 다른 속성보다 아래에 배치된다.
2. 단서
- https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context

3. 결론
 - position static이 아닌 속성인 요소들은 쌓임맥락에 의해 렌더링 순서에 따라 이 문서의 경우를 보면 cover 다음 content 순서로 렌더링되기 때문에 cover위에 content가 올라가게 된다.
 - 만약 content -> cover 순으로 렌더링 되게 html 코드위치를 바꾼다면 content 위에 cover가 올라가게 된다.