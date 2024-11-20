## 구현한 내용
- cover가 content에 가려질때 두 요소 사이에 있던 logo가 화면 왼쪽으로 이동하고 화면에 고정되게 하기

## 해결 방법
### content 요소를 intersectionObserver 대상으로 설정
cover 아래에서 올라오는 content 요소는 실제로 스크롤 되는 대상이기에 intersectionObserver에 감지되어 콜백함수를 실행 가능함

## 배운점
1. 구현 목표를 충분히 인지하고 열린 생각으로 특정한 기술로 구현하는 것에 매몰되지 않기
  - 스크롤을 따라오는 요소는 무조건 position:sticky로 구현 가능하다고 생각했으나 그렇지 않았음 
  - logo가 content의 자식요소일 경우 sticky가 정상적으로 동작하지만, sticky는 해당 요소의 문서흐름을 유지한채로 위치를 변경하기 때문에 content에 logo 크기의 빈 공간이 생기게 되어 content의 레이아웃에 변화를 주게 됨
  - logo를 content의 외부에 두고 position fixed를 적용하여 content의 레이아웃을 해치지 않고 스크롤 시 고정 되어 있게 구현

2. intersectionObserver를 사용할 때 인스턴스의 인수인 option객체의 키 값인 root, rootMargin, threshold를 잘 알고 설정하기

3. rootMargin의 값을 동적으로 할당하여 원하는 y값에서 콜백함수를 실행하기

## 시도했던 방법
1. logo 요소를 cover와 content 사이에 배치, logo를 intersectionObserver 대상으로 설정하기

2. cover 요소를 intersectionObserver 대상으로 설정
  - cover의 isInterecting이 false로 감지되지 않는 현상 발생
  - 원인: cover 요소는 일반적인 문서흐름에 따라 viewport에서 벗어나는 것이 아니라 고정된 위치에서 content요소에 가려지는 것이기 때문에, 사실 viewport를 벗어난 적이 없어 entry 속성에 변화가 생기지 않음