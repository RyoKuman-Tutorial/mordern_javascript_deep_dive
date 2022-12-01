# EXECUTION CONTEXT

## TYPE OF CODE

- global code ( 전역 코드 ) : 전역에 존재하는 소스코드
- function code ( 함수 코드 ) : 함수 내부에 존재하는 소스코드
- eval code ( eval 코드 ) : eval 함수에 인수로 전달되어 실행되는 소스코드
- module code ( 모듈 코드 ) : 모듈 내부의 존재하는 소스코드

## 실행 컨텍스트 흐름

1. [전역 객체 생성](./generate_global_object.md)
2. [전역 코드 평가](./global_code_evaluation.md)
3. 전역 코드 실행
4. [함수 실행 컨텍스트 생성](./function_execution_context.md)
