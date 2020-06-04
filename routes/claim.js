var express = require('express');
var router = express.Router();
var utils = require('../lib/utils.js')
var cors = require('./cors')
var config = require('../lib/config')

// 链上的证书指纹
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

// 取消证书
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

// 证书的临时数据
router.route('/temporaryCertifyData')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    res.status(200).json({
      result: true,
      message: '',
      // 这是的数据应该标明是否哈希过
      data: {
        claim_sn: '02b22a5e81e840176d9f381ec',
        templateId: '002',
        certifyData: {
          "name": {
            "value": "张坦克",
            "hasHash": false
          },
          "identity": {
            "value": [143, 44, 80, 195, 76, 92, 163, 238, 36, 12, 103, 173, 102, 254, 37, 78, 142, 103, 178, 162, 219, 167, 180, 70, 156, 121, 216, 178, 7, 52, 58, 31],
            "hasHash": true
          },
          "gender": {
            "value": [128, 243, 244, 200, 35, 236, 75, 94, 98, 206, 76, 13, 166, 144, 106, 10, 163, 252, 188, 100, 113, 238, 42, 188, 21, 160, 73, 129, 94, 213, 59, 133],
            "hasHash": true
          },
          "startYear": {
            "value": "2007",
            "hasHash": false
          },
          "startMonth": {
            "value": "09",
            "hasHash": false
          },
          "startDay": {
            "value": "01",
            "hasHash": false
          },
          "endYear": {
            "value": "2013",
            "hasHash": false
          },
          "endMonth": {
            "value": "06",
            "hasHash": false
          },
          "endDay": {
            "value": "22",
            "hasHash": false
          },
          "school": {
            "value": "天津大学",
            "hasHash": false
          },
          "honours": {
            "value": "5",
            "hasHash": false
          },
          "major": {
            "value": "建筑系",
            "hasHash": false
          },
          "serialNumber": {
            "value": "abc-1234-123456",
            "hasHash": false
          }
        },
        expire: '1588985429',
        purpose: '仅用于展示。'
      }
    })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    // 一个证书只能一个临时数据
    res.status(200).json({
      result: true,
      message: '',
      data: {
        temporaryID: '765b7d7a-1b6d-fae1-e928-c3c24a5ad848'
      }
    })
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

// 生成签发证书的数据
router.route('/certifySignUrl')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    // req.body.certifySignUuid
    res.status(200).json({
      result: true,
      message: '',
      data: {
        claim_sn: '02b22a5e81e840176d9f381ec',
        templateId: '002',
        certifyData: {
          "name": {
            "value": "张坦克",
            "hasHash": false
          },
          "identity": {
            "value": "513436200009094961",
            "hasHash": false
          },
          "gender": {
            "value": "女",
            "hasHash": false
          },
          "startYear": {
            "value": "2007",
            "hasHash": false
          },
          "startMonth": {
            "value": "09",
            "hasHash": false
          },
          "startDay": {
            "value": "01",
            "hasHash": false
          },
          "endYear": {
            "value": "2013",
            "hasHash": false
          },
          "endMonth": {
            "value": "06",
            "hasHash": false
          },
          "endDay": {
            "value": "22",
            "hasHash": false
          },
          "school": {
            "value": "天津大学",
            "hasHash": false
          },
          "honours": {
            "value": "5",
            "hasHash": false
          },
          "major": {
            "value": "建筑系",
            "hasHash": false
          },
          "serialNumber": {
            "value": "abc-1234-123456",
            "hasHash": false
          }
        }
      }
    })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    // res.send('post')
    // 应该提供一个完整的url。投肯提供。
    // req.body.claim_sn
    // req.body.templateId
    // req.body.certifyData
    res.status(200).json({
      result: true,
      message: '',
      data: utils.getUuid()
    })
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

// 签发证书
router.route('/validate')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    res.send('get')
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    res.status(200).json({
      result: true,
      message: '',
      data: ''
    })
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

// 申请证书
router.route('/applyCertify')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) =>{
    res.send('get')
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    // res.send('post')
    // res.body.templateId
    // res.body.hashCont
    // res.body.endTime
    // res.body.sign
    res.status(200).json({
      result: true,
      message: '',
      data: {
        claim_sn: '22a5e81e840176d9f381ec6f8',
        templateId: '002',
        hashCont: 'b3429a72b515cf6664ab1ea9afac8329eec4056d43b5449c8845a8248b1d3285',
        statusCode: 0
      }
    })
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

module.exports = router;
