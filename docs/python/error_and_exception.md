---
layout: page
title: Error & Exception
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Debugging
- 잘못된 프로그램을 수정
- DE + BUGGING : 없애다 + 버그

## Error
- `SyntaxError`
    - Invalid syntax 문법 오류
    - assign to literal 잘못된 할당
    - EOL (End of Line)
    - EOF (End of File)

## Exception
- `ZeroDivisionError` 0으로 나눴을 때
- `NameError` namespace상에 이름이 없는 경우
- `TypeError` type 불일치, argument 누락 및 개수 초과
- `ValueError` 타입 일치하나 값 부적절 (예시: `range(1).index(10) #ValueError: 10 is not in range`)
- `IndexError` 해당 인덱스 부재
- `KeyError` 해당 키 부재
- `ModuleNotFoundError` 모듈을 찾을 수 없을 때
- `ImportError` Module은 존재하나 클래스 또는 함수는 존재하지 않을 때
- `KeyboardInterrupt` 임의로 프로그램을 종료
- `IndentationError` Indent 부적절

## 예외 처리
```python
try:
		실행할 코드A

except (ValueError, KeyError):
		코드A에서 ValueError 또는 KeyError가 발생하면, 실행할 코드

except IndexError as what:
		코드A에서 IndexError가 발생하면, 실행할 코드
		print(what) #list index out of range 원본 에러 메세지 출력

except:
		코드A에서 ValueError, IndexError, KeyError를 제외한 에러 발생하면, 실행할 코드

else:
		코드A에서 예외가 발생하지 않으면, 실행할 코드

finally:
		코드A에서 예외 발생 여부와 관계없이 실행할 코드
```

## 참고
- [예외 계층구조](https://docs.python.org/ko/3/library/exceptions.html#exception-hierarchy)
