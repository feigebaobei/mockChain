var express = require('express');
var router = express.Router();
var utils = require('../lib/utils.js')
var cors = require('./cors')
var config = require('../lib/config')

// 获取证书详情应该内pvdata提供证书的数据。
// 根据证书id获取链上的证书详情
// 该接口的路由改为 /fingerprint
// router.route('/')
//   .options(cors.corsWithOptions, (req, res) => {
//     res.sendStatus(200)
//   })
//   .get(cors.corsWithOptions, (req, res, next) =>{
//     // req.params.claim_sn
//     res.status(200).json({
//       result: true,
//       data: {
//         title: '毕业证书',
//         data: {
//           name: '张坦克',
//           id: "a68c5fd6d964575b3d42bf959", // claim_sn
//           userId: '110121199007860374',
//           gender: '男',
//           // startTime: '1588985429000',
//           startYear: '2013',
//           startMonth: '09',
//           startDay: '01',
//           endYear: '2017',
//           endMonth: '06',
//           endDay: '22',
//           school: '天津大学',
//           honours: 5,
//           major: '建筑系',
//           serialNumber: 'abc-1234-12345',
//         },
//         expire: '1588985429000', // 过期时间
//         desc: '学生$name$身份证号$userId$性别$gender$于$startYear$年$startMonth$月到$endYear$年$endMonth$月在$school$学校$honours$年制$major$专业学习。现已修完教学计划规定的全部课程，成绩合格，获得毕业证书。证书编号：$serialNumber$'
//       },
//       message: ""
//     })
//   })
//   .post(cors.corsWithOptions, (req, res, next) => {
//     res.send('post')
//   })
//   .put(cors.corsWithOptions, (req, res, next) => {
//     res.send('put')
//   })
//   .delete(cors.corsWithOptions, (req, res, next) => {
//     res.send('delete')
//   })

router.route('/fingerprint')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    // req.params.claim_sn
    res.status(200).json({
      result: true,
      data: {
         "claim_sn": "a68c5fd6d964575b3d42bf959",
         "templateId": "t0001",
         "hashCont": "dad9ae7815efe9800998ecf8427e8d74",
         "expireTime": "1589345252000", // ms
         "signList": [
           {
             "sign": {
                r: "4e403f48d144c3077ea0cc2070535a9d9ccad580459b735f9c988b6f64851000",
                s: "6db31e8b77902d72417b4593b9e3734cb8f10389ce3382774d75b0d3a317b8a4"
              },
             "byDid": "did:ttm:u043829681e922731094502ebffdf1f10389c3ad11c8a67847c68f0482e608",
             "endtime": "1588985429123",
             "status": "submit", // submit // cancel
             "name": "张坦克"
           },
           {
             "sign": {
                r: "4e403f48d144c3077ea0cc2070535a9d9ccad580459b735f9c988b6f64851000",
                s: "6db31e8b77902d72417b4593b9e3734cb8f10389ce3382774d75b0d3a317b8a4"
              },
             "byDid": "did:ttm:u123429681e922731094502ebffdf1f10389c3ad11c8a67847c68f0482e608",
             "endtime": "1588985429123",
             "status": "checked", // checked // cancel
             "name": "去付宝"
           },
           {
             "sign": {
                r: "4e403f48d144c3077ea0cc2070535a9d9ccad580459b735f9c988b6f64851000",
                s: "6db31e8b77902d72417b4593b9e3734cb8f10389ce3382774d75b0d3a317b8a4"
              },
             "byDid": "did:ttm:u567829681e922731094502ebffdf1f10389c3ad11c8a67847c68f0482e608",
             "endtime": "1588985429123",
             "status": "checked",
             "name": "美团"
           }
         ],
         "statusCode": 1 // 0 submit 1 validated 2 cancel
      },
      message: ""
    })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    res.send('post')
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

// 请求模板
router.route('/template')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    // req.params.certifyCategoryId
    let templateId = req.params.templateId
    templateId = 't001'
    // 判断参数是否有效
    res.status(200).json({
      result: true,
      data: config.certify[templateId],
      message: ""
    })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    res.send('post')
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

// 模板列表
router.route('/templateList')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    res.status(200).json({
      result: true,
      data: [
        {
          example: 'http://localhost:9876/images/certifySale.jpeg',
          templateId: 't001',
          label: '毕业证书'
        },
        {
          example: 'http://localhost:9876/images/certifyPassword.jpeg',
          templateId: 't002',
          label: '驾驶证书'
        },
        {
          example: 'http://localhost:9876/images/certifySoftware.jpeg',
          templateId: 't003',
          label: '密码证书'
        }
      ],
      message: ""
    })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    res.send('post')
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

router.route('/cancel')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    res.send('get')
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    res.send('post')
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    // res.send('put')
    // 解密claim_sn
    // 判断该did是否是该claim_sn的拥有者
    // console.log(req.body)
    res.status(200).json({
      result: true,
      message: '',
      data: {}
    })
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

module.exports = router;
