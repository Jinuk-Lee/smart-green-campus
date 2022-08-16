# smart-green-campus
스마트 그린 캠퍼스의 데이터를 관리하는 서비스를 만들어 봅니다.

그 안에서 MQTT를 통해 받은 값을 API Server로 보내는 Broker를 구현합니다.
구현 과정은 [노션](https://jinuk.notion.site/MQTT-Broker-957da591568846b3a30b205bfe7ee845)에 정리합니다.

-----
#### 22/8/17
- 아두이노의 코드를 수정해서 MQTT로 수신받는 데이터를 변경했습니다.
- 그리고 콤마(,)를 통해서 데이터베이스로 보내기위해 포맷을 관리하였습니다.
#### 22/8/1
- 컴퓨터 공학과 역할을 대신해 온도센서를 아두이노에 연결하여 
  MQTT를 활용해 센서값을 수신해보았습니다.
- 수신한 센서값을 DB의 형식에 맞게 수정하였습니다.
#### 22/6/30
- MQTT Broker로 받은 데이터를 node-rest-client를 사용하여 API Server에 전송하는 코드를 추가하였습니다.

#### 22/6/27
총 3부분으로 계획을 세웁니다.

- MQTT Broker를 통해 받은 데이터를 API Server로 전송합니다.
- API Serve는 받은 데이터를 DB에 저장합니다.
    - 현재는 node.js로 구현, 나중에 nest.js로 수정합니다.
- DB는 MySQL을 사용하며, 추후에 PostgreSQL로 수정합니다.
