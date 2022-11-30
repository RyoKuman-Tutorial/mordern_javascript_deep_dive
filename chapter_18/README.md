# CONSTRUCTOR AND NON_CONSTRUCTOR

함수 또한 object 로, 프로퍼티 어트리뷰트를 갖는다. <br/>
어떤 어트리뷰트를 갖느냐에 따라, 위 함수가 constructor, non-constructor 인지 분류가 가능하다.

## CONTSRUCTOR

말 그대로 생성자이다. <br/>
chapter 17 에서 다뤘던 생성자와 동일하다. <br/>
프로퍼티 어트리뷰트로 [[Call]] , [[Construct]] 를 보유하고 있다.<br/>
일반 함수 등이 포함된다.

## NON-CONSTRUCTOR

생성자가 아닌 함수들을 말한다. <br/>
프로퍼티 어트리뷰트로 [[Call]] 를 보유하고 있다.<br/>
메소드, arrow function 이 포함된다.
