---
title: Azure VM의 메모리 압력 문제 해결하기
date: 2023-01-14 00:00:00 +07:00
modified: 2023-01-14 00:00:00 +07:00
tags: [my-online-gym, linux]
description: Azure VM의 메모리 압력 문제 해결하기
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 문제 발생
1. 서버 연결 불가능
```powershell
PS C:\Users\SSAFY> ssh my-online-gym@my-online-gym.eastus.cloudapp.azure.com
ssh: connect to host my-online-gym.eastus.cloudapp.azure.com port 22: Connection timed out
```

2. Azure 단계별 문제 해결사 실행
<img src="/_posts/my-online-gym/server_error_1.PNG" alt="memory pressure error"/>
문제 해결사 실행 결과, 높은 메모리 압력 인스턴스가 실행됐다고 한다.

## 해결 과정
1. 서버 다시 시작
    - 서버가 접속도 안 되는 상태였기에 우선 서버 다시 시작을 했다.
    - 문제가 해결된 듯 접속도 가능한 상태가 됐다.
    - 하지만, 얼마 후 똑같은 문제가 재발했다.

2. VM 권장 방법
<img src="/_posts/my-online-gym/server_error_2.PNG" alt="memory pressure error"/>