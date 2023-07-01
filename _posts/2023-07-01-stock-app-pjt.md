---
title: 주식 추천 알고리즘 구현
date: 2023-07-01 00:00:00 +07:00
tags: [Project]
style: fill
color: info
description: 1개의 주식을 추천하는 알고리즘 구현 과정
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

개발자라는 목표를 가진 뒤 처음으로 진행했던 주식 프로젝트에서 구현했던 추천 알고리즘에 대해 이야기하려고 한다. 팀원들의 취업으로 아쉽게도 프로젝트는 미완성된 채 끝났지만, 백엔드 API 개발은 마친 상태이다. Spring을 전혀 접해보지 못한 상태로 프로젝트를 시작해, 초기에는 많이 헤매고 시간을 낭비하기도 했었다. 

추천 주식 API 구현은 기본적인 CRUD에서 벗어나 실행 시간도 비교해 보고, 알고리즘과 자료형에 대한 이야기도 많이 나눠서 기억에 남는다. 프로젝트를 한지 조금 시간이 지나긴 했지만, 한 번 정리해 두면 나중에도 도움이 많이 될 거 같아 추천 주식 부분만이라도 회고를 해보려 한다.

### 설계
#### AI 활용
초기에는 이미 구현이 돼 있는 오픈소스 추천 AI을 가져와서 사용하는 방법으로 설계했다. 아직 웹 개발 프로젝트에 대한 개념이 잡혀있지 않아 구체적으로 어떤 AI를 가져다 쓸 것인지, 아니면 빅데이터를 쓸 것인지도 결정하지 않은 상태로 설계를 마쳤다. 프로젝트 중간, 중간에 빅데이터나 AI 관련 라이브러리를 찾아보기도 했지만, 이를 어떻게 활용해야 하는지도 잘 모르는 상태이기도 했다.

#### 직접 구현
추천 알고리즘을 구현할 때쯤에는 Spring Boot 학습도 어느 정도 된 상태였고 SSAFY 관통 프로젝트(1주)도 끝난 뒤였다. 웹 개발에 대한 전반적인 지식이 잡혀있는 상태였고, AI를 가져다 쓰는 것보다 직접 추천 알고리즘을 구현해 보는 것이 학습에 더 도움이 되리라 생각했다.

함께 백엔드를 맡은 팀원과의 회의를 통해 직접 구현하도록 방향을 바꿨고, 다른 팀원들의 동의도 구했다. 대신 직접 구현하면 완성도와 추천의 정확도가 떨어질 것이라는 우려도 있었으나, 프로젝트 목적인 학습에는 이 방향이 더 적절하다고 의견을 모았다.

### 추천 알고리즘 학습
그래서 직접 추천 알고리즘을 구현하는 방향으로 설계를 바꾸기 위해 추천 알고리즘에 대한 학습을 시작했다. 추천 알고리즘에서 고려해야 했던 점은 아래와 같았다.

1. 평점 없이, 관심 주식 또는 보유 주식 포함 여부 데이터만 존재
2. 사용자 수가 많지 않을 것으로 예상

#### 내용 기반 VS 협업 필터링
내용 기반은 비슷한 산업, 같은 계열사와 같이 콘텐츠의 내용을 기반으로 추천해 주는 방법이고, 협업 필터링은 유저들의 취향 데이터를 기반으로 추천을 해주는 방법이다.

  소귀경 프로젝트에서 TF-IDF로 관련 기사를, 지금 설명하는 주식 프로젝트에서는 자카드 유사도로 관련 주식을 구현했던 것은 내용 기반이었다. 내용 기반은 추천이라기보다 관련 주식에 가깝고, 추천 주식이 되려면 사용자의 선호 취향을 따로 받아야 할 필요가 있었다.

  쉽고 단순한 앱을 제작하는 것이 목표였기 때문에 추가로 정보를 받기보다 현재 가진 데이터를 최대한 활용하고 싶었다 그 결과, 메인페이지에 보일 추천 주식은 사용자의 선호도를 기반으로 하는 {% include elements/highlight.html text="협업 필터링" %}이 적절하다고 생각했다.

#### 사용자 기반 VS 아이템 기반
사용자 기반은 사용자 간의 유사도를, 아이템 기반은 아이템 간의 유사도를 계산하게 된다. 사용자 기반은 A사용자의 B주식에 대한 선호도를 A사용자와 유사도가 높은 C사용자의 B주식에 대한 선호도로 추측한다. 반면, 아이템 기반은 A주식과 B주식의 유사도가 높을 때 A주식을 선호하는 사람에게 B주식을 추천한다.

  여기서 우리 프로젝트는 선호도가 0과 1 뿐이라는 점을 고려했을 때, {% include elements/highlight.html text="아이템 기반" %} 협업 필터링을 사용하는 것이 더 적절하다고 판단했다. 또한, 사용자의 수도 많지 않을 것으로 예상해, 주식 간 유사도로 사용자의 관심 또는 보유 주식에 따라 추천하기로 결정했다.

#### 유사도 선택
유사도 선택에서 많은 시간을 소비했는데, 대부분의 유사도는 평점과 같은 수치화된 선호도를 기반으로 하고 있었기 때문이다. 우리에게 필요한 유사도는 0~5와 같이 수치가 있는 선호도가 아니라, Y/N으로만 표시된 선호도로 계산할 수 있는 유사도였다.

많은 유사도를 알아본 결과, 유무만 기록되는 경우 사용하는 {% include elements/highlight.html text="타니모토 유사도" %}를 사용하기로 결정했다. 

#### 참고자료
- [협업 필터링 추천 시스템 (Collaborative Filtering Recommendation System)](https://scvgoe.github.io/2017-02-01-%ED%98%91%EC%97%85-%ED%95%84%ED%84%B0%EB%A7%81-%EC%B6%94%EC%B2%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-(Collaborative-Filtering-Recommendation-System)/)
- [협업 필터링](https://jujeol-jujeol.github.io/2021/08/12/%ED%98%91%EC%97%85-%ED%95%84%ED%84%B0%EB%A7%81/#%ED%98%91%EC%97%85-%ED%95%84%ED%84%B0%EB%A7%81-%EC%A0%81%EC%9A%A9%EA%B8%B0)
- [협업필터링 아이템-기반 추천 (슬로프 원 알고리즘)](https://jujeol-jujeol.github.io/2021/10/24/%EC%95%84%EC%9D%B4%ED%85%9C_%EA%B8%B0%EB%B0%98_%EC%B6%94%EC%B2%9C_Slope_One/)
- [[추천알고리즘] 협업필터링,Collaborative Filtering(CF)](https://hackersstudy.tistory.com/126)

### 구현
설계에 대한 회의가 어느 정도 마무리된 후에는 일정 시간 동안 각자 구현해 보고 코드 리뷰를 하면서 하나의 코드를 완성하기로 했다. 

#### 혼자 구현하기 
[각자 구현한 버전 코드 GitHub 보러가기](https://github.com/Jeeyoun-S/Stock-App-Server/tree/4a6b14d754c9fc60bbc15a3bc0aea9d40ab850ee/src/main/java/com/stock/recommend)

- **계산한 유사도가 담긴 JSON 파일 생성**
우선, 유사도를 계산해 넣은 JSON 파일을 생성하는 코드를 작성했다. 자료형은 상황에 따라 Array, Map, Set, List를 사용했다. 우선, 사용자가 행이고 주식 종목이 열인 이중 Map을 만들어 각 칸의 종목에 대한 사용자의 선호도를 0 또는 1로 표기했다. 이후 주식 종목 전체를 열과 행에 두고 주식 간의 타니모토 유사도를 구해 이중 Map에 넣어줬다.

  그 후 JSON에 저장할 때는 각 주식별로 유사도가 높은 10개의 주식만을 남겼다. 모든 유사도를 저장한다면 오히려 메모리 낭비라고 생각해 임시로 10개 정도만 저장하는 것으로 구현했다.

  ```java
  public void makeRecommendJson() {
    
    // DB에 존재하는 전체 주식 코드를 배열로 불러오기
    String[] allStockCode = stockRecommendMapper.selectAllStock();
    
    // DB에 존재하는 전체 사용자 고유 번호를 배열로 불러오기
    String[] allUserNum = stockRecommendMapper.selectAllUserNum();
    
    // evaluation : String 주식 코드, Integer 평가값 0 또는 1
    Map<String, Integer> evaluation = new HashMap<>();
    for (String code : allStockCode) evaluation.put(code, 0);
    
    // stocks : String 주식 코드, Map<String, Double> String 주식 코드, Double 타니모토 유사도
    Map<String, Map<String, Double>> stocks = new HashMap<>();
    for (String code : allStockCode) stocks.put(code, new HashMap<String, Double>());
    
    // users : String 사용자 고유번호 , Map<String, Integer> String 주식 코드, Integer 평가값 0 또는 1
    Map<String, Map<String, Integer>> users = new HashMap<>();
    
    // 전체 사용자 번호를 반복하며 users 행렬 완성하기
    for (String num : allUserNum) {
      
      // users에 넣어줄 Map<String, Integer>를 만들기
      Map<String, Integer> evaluationCopy = new HashMap<String, Integer>(evaluation);
      
      // num 사용자의 보유 또는 관심 주식에 있는 주식 목록을 배열로 불러오기
      Set<String> myStockArray = stockRecommendMapper.selectUserStock(num);
      
      // myStockArray를 전부 돌며, 여기 있는 주식 코드의 평가값은 1로 변경
      for (String code : myStockArray) evaluationCopy.put(code, 1);
      
      // num에 대해 만들어진 한 행을 users에 넣어준다.
      users.put(num, evaluationCopy);
    }

    // 주식 코드를 2개씩 전부 반복
    for (int i=0; i<allStockCode.length; i++) {
      String code1 = allStockCode[i];
      
      for (int j=i+1; j<allStockCode.length; j++) {
        String code2 = allStockCode[j];
        
        double AproductB = 0; // A*B 구하기
        double A = 0;         // A 구하기
        double B = 0;         // B 구하기
        
        // 사용자를 전부 반복하며 A*B, A, B에 값 더해주기
        for (String num : allUserNum) {
          
          int An = users.get(num).get(code1);
          int Bn = users.get(num).get(code2);
          
          AproductB += (An*Bn);
          A += An;
          B += Bn;
        }
        
        double tanimoto;
        
        // 만약 분모가 0이라면 계산이 불가능하므로 0을 넣어준다.
        if ((A + B - AproductB) == 0) tanimoto = 0;
        else tanimoto = AproductB/(A + B - AproductB);
        
        stocks.get(code1).put(code2, tanimoto);
        stocks.get(code2).put(code1, tanimoto);	
      }		
    }

    // 유사도를 내림차순으로 정렬해 상위 10개만을 json 파일에 넣어준다.
    Map<String, Map<String, Double>> jsonStocks = new HashMap<>();
    
    for (Entry<String, Map<String, Double>> entrySet : stocks.entrySet()) {
      
      String code = entrySet.getKey();
      Map<String, Double> row = entrySet.getValue();
      
      // keySet을 람다표현식을 사용해 정렬
      List<String> keySet = new ArrayList<>(row.keySet());
      keySet.sort((o1, o2) -> row.get(o2).compareTo(row.get(o1)));
      
      Map<String, Double> newRow = new HashMap<>();
      for (int i=0; i<10; i++) {
        String stock_code = keySet.get(i);
        newRow.put(stock_code, row.get(stock_code));
      }

      jsonStocks.put(code, newRow);
    }
    
    // json 파일로 저장하기
    try {
      JSONObject jsonObject = new JSONObject(jsonStocks);
      
      FileWriter file = new FileWriter(".\\src\\main\\resources\\recommendStock.json");
      
      file.write(jsonObject.toJSONString());
      file.flush();
      file.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
    
    return;
  }
  ```

- **JSON 파일 읽어 4개의 주식만 선별**
이후 JSON 파일을 읽어 들여 유사도를 가져온다. 추천 주식을 요청한 사용자에게 선호도가 1인 주식 목록을 DB에서 가져오고, 주식 목록에 있는 주식과 없는 주식 간의 유사도를 탐색해 주식 목록에 없는 주식에 대한 유사도 평균을 구한다. 평균이 가장 높은 4개의 주식을 반환한다.

  ```java
  // 콘텐츠 기반 협업 필터링
  private List<Entry<String, Double>> getCollaborativeFiltering() {
    
    // 사용자 정보 가져오기
    String user_num = userInfoSessionDto.getUser_num();
    
    // 가져온 사용자의 관심 또는 보유 주식
    Set<String> myStockArray = stockRecommendMapper.selectUserStock(user_num);
    
    // 유사도 계산 결과값을 넣을 Map 생성
    Map<String, Double> similarity = new HashMap<>();

    try {
      
      // json 파일 읽어오기
      JSONParser parser = new JSONParser();
      Reader reader = new FileReader(".\\src\\main\\resources\\recommendStock.json");
      JSONObject jsonObject = (JSONObject) parser.parse(reader);
      
      // 내 보유 주식 전체를 반복하면서, 각 주식에 대한 다른 주식 유사도 가져오기
      for (String stock_code : myStockArray) {
        JSONObject row = (JSONObject) jsonObject.get(stock_code);
        Map<String, Double> map = new ObjectMapper().readValue(row.toJSONString(), Map.class);
        
        for (Entry<String, Double> entrySet : map.entrySet()) {
          
          String key = entrySet.getKey();
          if (myStockArray.contains(key)) continue;
          
          Double score = entrySet.getValue();
          if (similarity.get(key) != null) score += similarity.get(key);
          
          similarity.put(entrySet.getKey(), score);
        }
      }
      
      // 이전까지 합을 구해서 넣어줬다면 합을 평균으로 바꿔주기
      for (Entry<String, Double> entrySet : similarity.entrySet()) {
        similarity.put(entrySet.getKey(), entrySet.getValue()/myStockArray.size());
      }
      
      // value 값이 큰 순으로 정렬하기
      List<Map.Entry<String, Double>> entries = new ArrayList<>(similarity.entrySet());
      entries.sort(Comparator.comparing(Map.Entry::getValue, Comparator.reverseOrder()));
      
      if (entries.get(4).getValue() <= 0) return null;
      
      return entries.subList(0, 5);
      
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    } catch (ParseException e) {
      e.printStackTrace();
    }
    
    return null;
  }
  ```

  여러 상황에 따라 디버깅을 하다 보니 일부 상황에서 추천 주식이 없는 경우를 발견했다. 기존에는 로그인 여부, 보유 및 관심 주식 수, 사용자 수를 고려했다면, 수정 후에는 여기에 추가로 보유 및 관심 주식이 있는 사용자 수, 전체 보유 및 관심 주식 수도 고려했고 협업 필터링 결과가 유의미하지 않은 경우에 대한 처리도 추가했다.

  ```java
  // 보유 및 관심 주식이 있는 사용자 수
  int userSize = stockRecommendMapper.selectUserHaveHoldingWish();

  // 보유 및 관심 주식으로 설정돼 있는 주식 수
  int stockSize = stockRecommendMapper.selectAllWishAndHolding();

  // 전체 사용자 수
  int numberOfUsers = stockRecommendMapper.selectNumberOfUsers();

  // 보유 및 관심 주식이 있는 사용자 수가 10명 미만, 보유 및 관심 주식 수가 10개 미만, 전체 사용자 수가 20명 미만 중 하나라도 충족한다면
  if (userSize < 10 || stockSize < 10 || numberOfUsers < 20) {
    
    // 보유 및 관심 주식 중에 관련 주식을 가져오기
    List<String> stockList = new ArrayList<>(stockSet);
    contents = getRelatedStock(stockList);
  }

  // 로그인 상태, 사용자 수, 보유 및 관심 주식 수 등의 모든 조건을 충족한다면
  else {
    List<Entry<String, Double>> similarityTop5 = getCollaborativeFiltering();
    
    // 만약 추천 주식으로 걸러낸 주식이 없다면
    if (similarityTop5 == null) {
      
      // 보유 및 관심 주식 중에 관련 주식을 가져오기
      List<String> stockList = new ArrayList<>(stockSet);
      contents = getRelatedStock(stockList);
    }
    
    // 추천 주식 5개가 있다면 그 중에서 랜덤으로 하나 선택하기
    else {
      
      Random random = new Random();
      
      int idx = random.nextInt(similarityTop5.size());
      Entry<String, Double> stock = similarityTop5.get(idx);
      String code = stock.getKey();
      
      contents = getRealtimePrice(code, stockRecommendMapper.selectCompanyName(code));
      
    }
  }
  ```

#### 코드 합치기
[최종으로 합친 코드 GitHub 보러가기](https://github.com/Jeeyoun-S/Stock-App-Server/tree/master/src/main/java/com/stock/recommend)

솔직히 각자 구현하자고 했을 때는 어느 정도 설계가 돼 있었기 때문에 비슷하게 구현을 했을 거라 생각했다. 그러나 막상 서로 코드를 보니 너무나도 다른 코드를 작성했다. 

- **유사도 계산 시점**  
앞서 언급했듯이 나는 일정 시간마다 유사도를 계산 후 저장하고, 저장해 둔 유사도를 가져와 사용하는 방법으로 구현했는데, 다른 팀원분께서는 매번 유사도를 계산하는 방식으로 구현했다. 내 방식은 API를 불러올 때 속도가 빠른 대신 실시간으로 데이터를 반영하지 못했고, 팀원분의 코드는 API 불러올 때 매번 계산해야 해 속도가 보장이 되지 않는 대신 데이터를 즉각 반영했다.

  우리는 두 코드 모두 장단점이 있다고 판단했고, 회의를 통해 주식 장 개장 여부에 따라 두 코드를 모두 사용하는 것은 어떨지 생각해 봤다. 개장 시에는 보유 주식이 바뀔 가능성이 높으므로 매번 유사도를 계산하고, 장이 마감된 경우 보유 주식은 바뀌지 않으므로 장 마감 직후 계산해 저장해 둔 유사도를 사용하는 것이다.

  ```java
  // 현재 장이 열려있다면 (현재 값에서 읽어오기)
  if (openingDateComponent.isOpen()) {
    // 생략
  }

  // 장이 닫혀있다면 (JSON에서 읽어오기)
  else {
    // 생략
  }
  ```

- **자료형 활용**  
앞서 이야기했듯이 나는 Array, List, Set, Map 등의 자료형을 사용했고, 다른 팀원분께서는 더 다양한 자료형을 활용했다. 정렬이 필요한 경우 SortedSet를 사용하거나 DTO 등을 사용했고, 적절한 자료형을 사용했기 때문인지 계산 과정은 비슷함에도 계산 속도는 내 코드보다 빨랐다.

  ```java
  SortedSet<Map.Entry<String, Double>> sortedSet = new TreeSet<>(new Comparator<Map.Entry<String, Double>>() {
    @Override
    // 원소들의 정렬 순서 및 일치 여부를 결정
    public int compare(Map.Entry<String, Double> e1, Map.Entry<String, Double> e2) {
      int comp = -e1.getValue().compareTo(e2.getValue());
      if (comp == 0) {
        return e1.getKey().compareTo(e2.getKey());
      }
      
      return comp;
    }
  });
  ```

### 아쉬운 점
설계 단계부터 추천 알고리즘을 상세히 계획했다면 더 효율적인 코드를 작성할 수 있지 않았을까 싶다. DB 설계를 다르게 해 유사도를 DB에 저장했다면 속도를 향상할 수 있었을 거 같다. 또한, 주식에 대한 사용자의 평점을 바탕으로 유사도를 계산했다면 더 정확도가 높은 추천 기능을 구현할 수 있었으리라 생각한다.

아쉽게도 프론트엔드가 완성되지 못해 이 부분에 대한 사용자 피드백이나 리팩토링도 이뤄지진 않았다. 대부분의 팀원이 취업에 성공해, 나중에 혼자서라도 백엔드 코드를 리팩토링하고 프론트엔드까지 완성할 생각이 있다. 학습을 중점으로 하고 있어, Spring에서 JSP로 구현해 봐도 괜찮을 거 같다고 생각한다.