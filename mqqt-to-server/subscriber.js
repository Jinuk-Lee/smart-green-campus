const mqtt = require('mqtt');
const Client = require('node-rest-client').Client;  //node에서 외부 api 소비
const client = new Client();
// options = {
//     host: '203.230.103.35',
//     port: 1883
// };

var args = {
    data: {},
    headers: {"Content-Type": "application/json"}
};

//const client = mqtt.connect(options);
const subclient = mqtt.connect('mqtt://broker.hivemq.com');
//test 토픽 구독
subclient.subscribe("green-campus/sensors");

//구독한 메세지 전부 받음
//  {"sensor_name":"temperature",
//   "location":"N5",
//   "value":"26"}

subclient.on('message', function (topic, message) {
    args.data = message.toString('utf-8');
    console.log(message.toString('utf-8'));
    client.post("http://192.168.10.171:8080/api/sensors", args, function (data, response) {
        // js object로 파싱된 객체
       // console.log(data);
        // 응답 객체
       // console.log(response);
    });
   // console.log("토픽:" + topic, "메세지:" + message)
});


