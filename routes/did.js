var express = require('express');
var router = express.Router();
// var utils = require('../lib/utils.js')
var cors = require('./cors')
// var Base64 = require('js-base64').Base64

// router.route('/keystore')
router.route('/didttm')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) => {
    // req.params.did
    res.status(200).json({result: true, message: '',
      // data: {"privatekey":"01837f014db7fc5acd914f53839bdb5dbf4cd80ecbbb7bf966ba9619f34b627a"}
      // data: '{"privatekey":"01837f014db7fc5acd914f53839bdb5dbf4cd80ecbbb7bf966ba9619f34b627a"}'
      data: 'Jhiji55Hf7kh6L17QyLKvNTCwEMA/fj8ivMvk1BHlc8uWuVnuMvmx0ypNuwMv2eNJZVIk1F2dOawXZ88ZkA965CXN0JK+Cc/MDcSqfuY8H50GqaFqlbQG9aUfhjCvWJP' // ct
    })
  })
  // 接收用户属性
  .post(cors.corsWithOptions, (req, res, next) => {
    // 检查mongodb里是否有uuid。
    // 使用`·utils.getUuid()`生成一个key，其对应值为用户属性。保存在mongodb里。
    res.send(true)
  })
  .put(cors.corsWithOptions, (req, res, next) => {
    res.send('put')
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    res.send('delete')
  })

router.route('/pvdata')
  // did是被base64编码后的可见字符串
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200)
  })
  .get(cors.corsWithOptions, (req, res, next) => {
    // req.params.did
    console.log('did to test')
    res.status(200).json({result: true, message: '',
      // data: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 52, 245, 90, 179, 236, 45, 165, 192, 233, 248, 7, 135, 194, 251, 227, 159, 93, 128, 185, 131, 132, 92, 117, 245, 27, 39, 95, 184, 227, 244, 202, 147, 31, 97, 195, 26, 93, 142, 14, 163, 66, 48, 153, 98, 60, 65, 107, 237, 188, 110, 152, 175, 47, 128, 221, 46, 4, 40, 178, 209, 15, 142, 18, 104, 62, 160, 147, 193, 147, 23, 95, 27, 247, 205, 205, 100, 149, 37, 35, 181, 40, 107, 160, 37, 100, 97, 237, 97, 89, 7, 145, 223, 229, 105, 149, 165, 115, 8, 165, 57, 198, 132, 215, 62, 123, 99, 154, 38, 54, 35, 48, 89, 132, 154, 72, 35, 109, 78, 204, 152, 179, 131, 29, 136, 231, 165, 65, 0, 127, 79, 169, 1, 229, 84, 47, 157, 136, 155, 250, 177, 47, 226, 123, 49, 75, 1, 26, 125, 238, 56, 189, 68, 57, 46, 114, 110, 168, 37, 200, 123, 130, 142, 74, 66, 134, 187, 154, 17, 168, 20, 63, 192, 175, 249, 164, 119, 223, 216, 170, 247, 124, 227, 126, 67, 152, 59, 203, 222, 32, 129, 67, 147, 221, 173, 117, 99, 145, 25, 139, 250, 85, 162, 91, 171, 251, 227, 87, 178, 206, 49, 82, 138, 95, 10, 200, 10, 157, 6, 250, 130, 183, 81, 234, 153, 93, 151, 20, 72, 86, 117, 111, 221, 85, 199, 208, 144, 51, 93, 31, 153, 13, 231, 59, 208, 16, 59, 138, 244, 96, 68, 38, 241, 148, 33, 19, 189, 39, 234, 208, 56, 156, 45, 101, 193, 240, 5, 186, 69, 231, 156, 141, 211, 118, 124, 170, 51, 226, 8, 126, 138, 36, 213, 234, 20, 160, 205, 10, 89, 246, 159, 77, 116, 241, 123, 6, 12, 141, 11, 189, 198, 143, 96, 114, 227, 245, 240, 137, 12, 56, 104, 131, 47, 91, 128, 55, 165, 34, 199, 253, 102, 116, 175, 77, 158, 250, 214, 40, 122, 243, 158, 25, 151, 166, 11, 51, 252, 85, 120, 223, 20, 165, 209, 13, 36, 40, 16, 124, 47, 17, 141, 118, 2, 220, 192, 61, 126, 236, 176, 211, 70, 151, 119, 249, 18, 137, 254, 131, 67, 30, 240, 185, 247, 63, 164, 195, 77, 235, 119, 104, 54, 5, 115, 116, 226, 58, 85, 155, 123, 117, 231, 100, 40, 178, 93, 123, 56, 117, 32, 239, 101, 86, 93, 15, 20, 26, 211, 239, 221, 6, 119, 108, 22, 209, 200, 27, 171, 54, 106, 197, 105, 199, 204, 74, 190, 159, 34, 247, 34, 153, 242, 253, 57, 177, 190, 139, 145, 104, 56, 232, 3, 164, 101, 27, 157, 115, 198, 203, 76, 161, 134, 219, 177, 213, 243, 83, 232, 204, 73, 20, 108, 17, 48, 194, 239, 47, 15, 206, 53, 197, 113, 12, 254, 154, 201, 184, 41, 99, 85, 60, 231, 186, 123, 213, 176, 142, 39, 6, 49, 172, 249, 192, 90, 3, 242, 104, 203, 224, 64, 26, 44, 198, 99, 242, 226, 152, 189, 211, 76, 221, 22, 193, 35, 49, 4, 48, 40, 234, 186, 254, 130, 192, 62, 104, 107, 202, 80, 49, 177, 248, 234, 176, 224, 119, 216, 169, 158, 238, 135, 151, 90, 0, 240, 148, 164, 181, 18, 185, 236, 67, 187, 228, 247, 112, 145, 223, 200, 95, 209, 87, 119, 17, 89, 78, 33732, 35527, 35743, 20029, 201, 83, 252, 93, 164, 127, 159, 226, 124, 219, 22, 126, 177, 162, 220, 213, 249, 169, 213, 25, 223, 154, 218, 97, 136, 24, 17, 208, 222, 199, 155, 153, 207, 44, 214, 121, 106, 12, 73, 154, 185, 119, 22, 118, 101, 115, 108, 113, 112, 51, 79, 211, 171, 120, 231, 5, 188, 112, 117, 172, 127, 91, 89, 98, 172, 116, 69, 146, 160, 51, 25, 233, 100, 163, 219, 167, 138, 64, 182, 147, 146, 189, 124, 182, 117, 45, 160, 44, 9, 204, 197, 234, 154, 68, 202, 130, 107, 189, 81, 180, 51, 74, 51, 22, 45, 233, 200, 83, 209, 167, 100, 130, 133, 52, 166, 86, 137, 152, 68, 188, 44, 125, 46, 115, 60, 211, 117, 92, 241, 119, 130, 253, 24, 120, 137, 186, 253, 244, 217, 177, 83, 179, 156, 102, 56, 216, 82, 13, 160, 14, 195, 28, 64, 214, 85, 125, 115, 221, 242, 75, 245, 32, 102, 40, 90, 101, 20, 49, 238, 196, 200, 244, 212, 33, 166, 192, 68, 241, 177, 166, 40, 65, 132, 122, 73, 167, 142, 48, 45, 165, 120, 250, 217, 103, 162, 243, 138, 152, 136, 162, 229, 248, 99, 212, 175, 237, 135, 123, 219, 251, 216, 52, 109, 35, 234, 126, 1, 131, 116, 49, 30, 221, 124, 202, 73, 253, 91, 101, 131, 102, 217, 85, 156, 206, 155, 208, 180, 40, 131, 64, 37, 1, 120, 132, 12, 50, 89, 134, 170, 201, 108, 65, 95, 123, 79, 65, 21, 17, 88, 1, 180, 184, 5, 121, 20, 5, 185, 109, 222, 4, 246, 186, 20, 86, 230, 238, 163, 207, 205, 216, 234, 95, 242, 244, 199, 14, 92, 115, 133, 103, 208, 45, 174, 201, 12, 141, 52, 15, 8, 162, 179, 200, 154, 92, 123, 110, 116, 163, 92, 223, 223, 40, 250, 15, 154, 21, 126, 182, 235, 86, 3, 44, 138, 24, 239, 112, 181, 76, 233, 33754, 35549, 35823, 20050, 15, 217, 100, 114, 20, 155, 174, 207, 197, 119, 5, 152, 64, 98, 134, 114, 69, 4, 157, 243, 168, 47, 185, 175, 209, 19, 148, 16, 74, 21, 245, 210, 29, 153, 65, 49, 247, 9, 43, 142, 119, 49, 184, 242, 47, 221, 143, 17, 234, 108, 229, 222, 197, 96, 228, 22, 105, 109, 95, 132, 7, 46, 254, 217, 124, 137, 97, 70, 82, 216, 106, 119, 5, 44, 247, 86, 208, 206, 195, 105, 19, 7, 88, 50, 63, 23]
      // data: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 153, 201, 139, 180, 123, 149, 105, 84, 143, 197, 33, 118, 243, 185, 237, 245, 42, 96, 167, 132, 13, 227, 23, 143, 63, 130, 196, 122, 99, 8, 181, 13, 31, 97, 195, 26, 93, 142, 14, 163, 66, 48, 153, 98, 60, 65, 107, 237, 188, 110, 152, 175, 47, 128, 221, 46, 4, 40, 178, 209, 15, 142, 18, 104, 62, 160, 147, 193, 147, 23, 95, 27, 247, 205, 205, 100, 149, 37, 35, 181, 40, 107, 160, 37, 100, 97, 237, 97, 89, 7, 145, 223, 229, 105, 149, 165, 115, 8, 165, 57, 198, 132, 215, 62, 123, 99, 154, 38, 54, 35, 48, 89, 132, 154, 72, 35, 109, 78, 204, 152, 179, 131, 29, 136, 231, 165, 65, 0, 127, 79, 169, 1, 229, 84, 47, 131, 156, 151, 223, 191, 46, 213, 48, 111, 99, 88, 2, 66, 252, 126, 251, 23, 127, 104, 33, 40, 246, 56, 216, 44, 204, 156, 23, 64, 129, 238, 147, 71, 172, 28, 110, 153, 175, 175, 249, 124, 218, 140, 254, 247, 124, 225, 122, 68, 205, 105, 206, 139, 116, 215, 23, 146, 140, 252, 116, 99, 194, 25, 142, 252, 87, 161, 93, 253, 241, 176, 2, 189, 151, 51, 82, 209, 93, 5, 205, 12, 145, 88, 248, 215, 184, 90, 189, 140, 72, 131, 95, 0, 4, 107, 111, 143, 24, 129, 195, 155, 32, 93, 31, 153, 30, 250, 40, 128, 89, 117, 153, 229, 101, 74, 60, 220, 146, 43, 117, 238, 97, 172, 131, 126, 194, 48, 117, 150, 190, 16, 231, 32, 231, 218, 204, 239, 117, 40, 172, 9, 182, 87, 46, 201, 63, 195, 172, 90, 225, 156, 29, 81, 230, 154, 87, 104, 156, 111, 22, 77, 219, 72, 254, 150, 212, 59, 96, 235, 178, 163, 218, 82, 100, 55, 138, 124, 94, 130, 61, 191, 55, 211, 238, 34, 35, 185, 24, 216, 182, 157, 107, 119, 185, 142, 68, 220, 233, 66, 9, 228, 72, 120, 223, 20, 165, 195, 78, 102, 97, 91, 35, 66, 7, 149, 114, 4, 159, 136, 121, 37, 162, 171, 194, 79, 203, 127, 225, 89, 207, 233, 210, 72, 18, 246, 180, 224, 113, 177, 195, 73, 178, 56, 61, 104, 11, 111, 39, 229, 60, 35, 216, 23, 71, 184, 15, 75, 180, 53, 33, 117, 0, 121, 252, 50, 96, 38, 6, 110, 107, 214, 182, 133, 70, 108, 48, 82, 204, 216, 68, 252, 103, 63, 155, 105, 149, 206, 73, 188, 144, 55, 242, 119, 158, 248, 171, 62, 177, 176, 140, 194, 121, 111, 183, 13, 180, 127, 31, 147, 103, 139, 140, 6, 233, 204, 158, 162, 153, 238, 64, 170, 136, 9, 85, 39, 23, 22, 203, 252, 47, 15, 199, 50, 228, 107, 74, 230, 251, 144, 239, 112, 51, 68, 62, 247, 226, 123, 213, 226, 222, 120, 80, 53, 255, 243, 199, 94, 15, 241, 104, 153, 225, 65, 76, 120, 194, 97, 173, 230, 199, 174, 207, 93, 145, 86, 210, 117, 114, 90, 35, 111, 232, 238, 246, 208, 150, 114, 57, 56, 139, 74, 43, 163, 173, 179, 248, 190, 115, 154, 252, 239, 168, 137, 143, 12, 13, 176, 193, 183, 173, 28, 250, 186, 10, 244, 253, 232, 94, 146, 212, 249, 68, 135, 1, 102, 65, 22, 9, 218, 19, 114, 121, 157, 26, 172, 70, 172, 99, 153, 131, 41, 151, 83, 105, 179, 184, 129, 140, 168, 164, 134, 69, 202, 142, 201, 36, 159, 17, 4, 140, 148, 131, 210, 130, 204, 111, 145, 116, 109, 89, 24, 138, 180, 48, 90, 115, 60, 44, 108, 113, 112, 62, 73, 222, 180, 83, 232, 28, 251, 104, 52, 172, 121, 95, 88, 107, 225, 108, 75, 209, 163, 38, 90, 177, 39, 176, 158, 248, 138, 18, 224, 214, 218, 236, 59, 228, 7, 114, 241, 126, 72, 192, 213, 248, 141, 81, 205, 201, 50, 200, 73, 249, 48, 4, 105, 67, 108, 149, 159, 109, 235, 189, 72, 167, 150, 65, 234, 94, 166, 156, 90, 182, 89, 12, 61, 10, 66, 208, 44, 6, 187, 108, 222, 191, 0, 53, 150, 246, 230, 190, 195, 238, 6, 237, 202, 117, 53, 214, 18, 94, 242, 83, 157, 79, 86, 204, 66, 63, 61, 212, 241, 19, 229, 44, 98, 126, 18, 109, 22, 44, 176, 129, 153, 225, 145, 52, 166, 208, 9, 228, 242, 175, 44, 111, 132, 42, 7, 236, 156, 49, 33, 164, 62, 226, 174, 62, 240, 248, 137, 151, 132, 238, 128, 169, 60, 206, 160, 252, 210, 120, 213, 175, 213, 107, 57, 55, 243, 26, 27, 149, 55, 103, 71, 214, 43, 207, 9, 170, 93, 64, 223, 33, 148, 30, 214, 133, 138, 198, 251, 98, 180, 90, 115, 13, 85, 194, 20, 42, 26, 128, 162, 155, 123, 11, 25, 57, 78, 21, 83, 73, 12, 66, 228, 142, 95, 105, 76, 82, 249, 49, 197, 33618, 35398, 35673, 20062, 86, 190, 181, 183, 203, 155, 131, 234, 19, 232, 186, 192, 11, 80, 98, 194, 57, 208, 24353, 22506, 20982, 75, 204, 102, 26, 12, 183, 164, 163, 196, 92, 115, 124, 50, 163, 78, 194, 223, 119, 172, 26, 141, 12, 90, 179, 231, 71, 68, 66, 193, 94, 179, 36, 174, 24066, 250, 137, 26460, 31, 4, 26056, 215, 106, 56, 16, 134, 162, 216, 195, 116, 20, 152, 64, 98, 208, 35, 19, 14, 24200, 167, 175, 26399, 185, 170, 25937, 87, 140, 5, 80, 81, 188, 155, 65, 131, 30, 112, 254, 70, 113, 217, 50, 118, 253, 186, 99, 203, 206, 81, 169, 102, 228, 239, 194, 107, 168, 88, 105, 54, 18, 158, 10, 122, 245, 216, 104, 215, 122, 17, 4, 142, 127, 110, 69, 126, 244, 7, 192, 150, 135, 97, 30, 28, 7, 99, 64, 30, 155, 100, 245, 231, 216, 47, 95, 140, 212, 65, 232, 14, 69, 24, 194, 224, 52, 61, 90, 210, 213, 212, 162, 141, 111, 168, 249, 97, 36, 70, 57, 50, 192, 54, 33559, 35567, 35712, 20206, 207, 134, 232, 76, 174, 172, 201, 222, 192, 158, 63, 186, 51, 81, 90, 19, 253, 172, 24362, 20147, 222, 59, 43, 47, 83, 230, 200, 56, 81, 11, 241, 164, 13, 213, 172, 167, 36, 233, 98, 228, 211, 8, 45, 8, 113, 194, 251, 216, 88, 212, 63, 128, 177, 24198, 224, 15, 26554, 49, 74, 26035, 108, 222, 252, 27, 117, 164, 70, 139, 238, 250, 228, 81, 198, 189, 131, 108, 65, 24114, 59, 127, 26424, 234, 115, 25949, 160, 199, 130, 129, 152, 181, 13, 107, 249, 176, 209, 193, 80, 144, 37, 168, 138, 175, 75, 126, 179, 233, 251, 121, 31, 152, 247, 97, 150, 104, 117, 219, 44, 245, 173, 80, 76, 232, 149, 255, 212, 62, 120, 209, 240, 38, 237, 181, 102, 86, 116, 225, 193, 243, 183, 189, 108, 156, 121, 171, 68, 20, 109, 230, 239, 136, 11, 46, 207, 81, 110, 121, 255, 132, 246, 130, 218, 108, 255, 9, 110, 241, 238, 160, 205, 183, 83, 76, 183, 68, 144, 172, 106, 244, 109, 220, 137, 27475, 20047, 35587, 20118, 197, 164, 35, 209, 239, 164, 239, 106, 127, 209, 16, 130, 116, 242, 12, 222, 130, 77, 24484, 22469, 20936, 124, 29, 137, 239, 29, 200, 247, 178, 176, 11, 77, 247, 29, 223, 104, 119, 187, 91, 166, 61, 66, 75, 149, 55, 59, 172, 138, 209, 25, 131, 42, 88, 4, 194, 154, 11, 71, 181, 204, 221, 101, 114, 255, 104, 23026, 108, 130, 104, 255, 116, 180, 152, 67, 162, 116, 176, 102, 218, 4, 13, 129, 232, 238, 66, 159, 116, 192, 82, 154, 125, 18, 224, 37, 203, 43, 242, 7, 220, 127, 19, 5, 149, 136, 42, 165, 38, 4, 180, 36, 24, 193, 54, 80, 225, 101, 238, 105, 68, 76, 44, 4, 87, 188, 62, 61, 178, 147, 149, 169, 102, 5, 189, 254, 106, 160, 249, 40, 95, 83, 17, 151, 204, 24, 135, 104, 203, 240, 215, 113, 66, 200, 40, 226, 77, 199, 222, 55, 240, 56, 112, 168, 164, 0, 213, 17, 115, 223, 216, 204, 250, 13, 101, 226, 205, 114, 250, 54, 22890, 28017, 22871, 23309, 79, 206, 251, 148, 7, 121, 30, 194, 164, 145, 123, 15, 132, 2, 60, 255, 72, 212, 64, 71, 155, 123, 118, 130, 149, 24140, 31503, 31845, 86, 210, 137, 244, 185, 1, 210, 215, 84, 235, 235, 98, 60, 166, 9, 42, 22, 160, 151, 109, 210, 66, 198, 191, 45, 83, 19, 86, 1, 225, 232, 49, 253, 245, 181, 213, 105, 145, 28, 6, 137, 209, 213, 170, 195, 245, 82, 39, 86, 194, 240, 183, 142, 49, 71, 134, 4, 236, 128, 26, 190, 165, 19, 213, 244, 67, 198, 119, 102, 130, 20, 29, 241, 155, 188, 189, 105, 223, 193, 23, 87, 90, 178, 97, 141, 198, 238, 8, 209, 101, 112, 63, 126, 43, 232, 165, 164, 70, 5, 154, 67, 61, 234, 243, 184, 184, 209, 156, 9, 109, 132, 70, 65, 140, 138, 159, 11, 140, 89, 71, 110, 230, 137, 33, 74, 8, 40, 128, 34, 176, 197, 186, 9, 62, 149, 62, 17, 168, 125, 35, 123, 148, 28, 161, 202, 172, 173, 233, 81, 203, 23572, 20397, 35722, 20132, 83, 12, 238, 160, 222, 209, 130, 163, 152, 242, 107, 206, 234, 177, 61, 145, 39, 254, 24410, 20058, 157, 151, 199, 24, 69, 151, 24, 200, 220, 75, 41, 245, 30168, 247, 210, 231, 136, 8, 213, 250, 154, 113, 78, 216, 239, 27845, 10, 2, 60, 6, 176, 220, 219, 99, 113, 221, 36, 185, 195, 32, 18, 81, 153, 249, 158, 158, 239, 166, 128, 154, 216, 202, 107, 149, 202, 5, 179, 137, 132, 177, 19, 196, 150, 185, 123, 205, 210, 0, 167, 86, 168, 5, 111, 192, 128, 21440, 20019, 24187, 26439, 38549, 21448, 21424, 33421, 32370, 20815, 33999, 196, 21378, 34, 124, 186, 239, 171, 128, 60, 205, 187, 28, 135, 29, 66, 118, 127, 157, 244, 117, 21385, 20142, 24189, 39018, 20117, 21389, 21530, 27815, 23804, 20117, 23589, 26042, 25911, 23312, 22256, 46, 21418, 27081, 134, 21467, 20935, 67, 226, 137, 240, 36, 150, 43, 123, 154, 28, 248, 185, 39, 153, 139, 204, 197, 111, 103, 106, 103, 208, 24170, 121, 26514, 84, 26095, 98, 35, 122, 184, 126, 74, 120, 126, 178, 4, 209, 114, 100, 56, 212, 188, 132, 24155, 3, 26439, 12, 25871, 14, 123, 211, 89, 93, 247, 236, 172, 49, 178, 173, 160, 67, 137, 232, 151, 250, 166, 109, 109, 38, 196, 246, 111, 236, 115, 251, 116, 144, 134, 203, 151, 179, 60, 211, 12, 208, 131, 43, 105, 42, 95, 50, 203, 246, 10, 241, 231, 62, 50, 225, 230, 228, 30, 232, 101, 217, 168, 235, 201, 163, 34, 48, 3, 197, 250, 209, 2, 244, 41, 92, 140, 207, 105, 18, 134, 163, 80, 252, 249, 36488, 20129, 35644, 20087, 47, 42, 73, 179, 163, 224, 39, 182, 193, 103, 168, 48, 79, 28, 236, 122, 240, 79, 24472, 20167, 62, 12, 49, 139, 141, 121, 49, 217, 78, 132, 182, 196, 30004, 15, 175, 132, 5, 173, 233, 73, 118, 188, 122, 112, 158, 27782, 171, 252, 26, 57, 101, 199, 37, 21, 8, 106, 56, 156, 73, 99, 86, 198, 129, 193, 83, 233, 223, 163, 215, 181, 135, 125, 113, 90, 55, 229, 159, 128, 116, 184, 229, 104, 28, 71, 11, 6, 12, 165, 138, 147, 77, 201, 170, 192, 148, 48, 46, 10, 7, 71, 203, 32, 254, 174, 39, 8, 245, 63, 108, 62, 150, 21, 197, 115, 25, 192, 74, 158, 61, 94, 22, 64, 125, 68, 125, 238, 140, 86, 183, 7, 7, 54, 252, 201, 47, 189, 6, 156, 186, 87, 166, 112, 88, 211, 225, 215, 93, 92, 21473, 20221, 24300, 39111, 20166, 21481, 21678, 27796, 23619, 20032, 23759, 26025, 26067, 23513, 22180, 40, 21450, 27124, 160, 21354, 20801, 43, 156, 233, 225, 155, 66, 96, 129, 149, 146, 103, 152, 37, 65, 140, 221, 168, 198, 165, 192, 211, 227]
      data: [246, 106, 106, 40, 249, 239, 104, 205, 94, 25, 74, 123, 117, 222, 186, 157, 161, 54, 72, 5, 161, 55, 231, 22, 35, 1, 41, 120, 226, 18, 197, 95, 143, 44, 190, 238, 171, 248, 247, 163, 91, 234, 30, 56, 158, 201, 3, 172, 214, 151, 42, 167, 104, 91, 90, 12, 34, 99, 41, 73, 16, 156, 197, 27, 104, 185, 202, 15, 132, 244, 210, 199, 108, 101, 171, 73, 166, 194, 149, 170, 55, 221, 149, 99, 44, 105, 202, 57, 175, 198, 234, 204, 216, 203, 75, 14, 31, 97, 195, 26, 93, 142, 14, 163, 66, 48, 153, 98, 60, 65, 107, 237, 188, 110, 152, 175, 47, 128, 221, 46, 4, 40, 178, 209, 15, 142, 18, 104, 62, 160, 147, 193, 147, 23, 95, 27, 247, 205, 205, 100, 149, 37, 35, 181, 40, 107, 160, 37, 100, 97, 237, 97, 89, 7, 145, 223, 229, 105, 149, 165, 115, 8, 165, 57, 198, 132, 215, 62, 123, 99, 154, 38, 54, 35, 48, 89, 132, 154, 72, 35, 109, 78, 204, 152, 179, 131, 29, 136, 231, 165, 65, 0, 127, 79, 169, 1, 229, 84, 47, 131, 156, 151, 223, 191, 46, 213, 48, 111, 99, 88, 2, 66, 252, 126, 251, 23, 127, 104, 33, 40, 246, 56, 216, 44, 204, 156, 23, 64, 129, 238, 147, 71, 172, 28, 110, 153, 175, 175, 249, 124, 218, 140, 254, 247, 124, 225, 122, 68, 205, 105, 206, 139, 116, 215, 23, 146, 140, 252, 116, 99, 194, 25, 142, 252, 87, 161, 93, 253, 241, 176, 2, 189, 151, 51, 82, 209, 93, 5, 205, 12, 145, 88, 248, 215, 184, 90, 189, 140, 72, 131, 95, 0, 4, 107, 111, 143, 24, 129, 195, 155, 32, 93, 31, 153, 30, 250, 40, 128, 89, 117, 153, 229, 101, 74, 60, 220, 146, 43, 117, 238, 97, 172, 131, 126, 194, 48, 117, 150, 190, 16, 231, 32, 231, 218, 204, 239, 117, 40, 172, 9, 182, 87, 46, 201, 63, 195, 172, 90, 225, 156, 29, 81, 230, 154, 87, 104, 156, 111, 22, 77, 219, 72, 254, 150, 212, 59, 96, 235, 178, 163, 218, 82, 100, 55, 138, 124, 94, 130, 61, 191, 55, 211, 238, 34, 35, 185, 24, 216, 182, 157, 107, 119, 185, 142, 68, 220, 233, 66, 9, 228, 72, 120, 223, 20, 165, 195, 78, 102, 97, 91, 35, 66, 7, 149, 114, 4, 159, 136, 121, 37, 162, 171, 194, 79, 203, 127, 225, 89, 207, 233, 210, 72, 18, 246, 180, 224, 113, 177, 195, 73, 178, 56, 61, 104, 11, 111, 39, 229, 60, 35, 216, 23, 71, 184, 15, 75, 180, 53, 33, 117, 0, 121, 252, 50, 96, 38, 6, 110, 107, 214, 182, 133, 70, 108, 48, 82, 204, 216, 68, 252, 103, 63, 155, 105, 149, 206, 73, 188, 144, 55, 242, 119, 158, 248, 171, 62, 177, 176, 140, 194, 121, 111, 183, 13, 180, 127, 31, 147, 103, 139, 140, 6, 233, 204, 158, 162, 153, 238, 64, 170, 136, 9, 85, 39, 23, 22, 203, 252, 47, 15, 199, 50, 228, 107, 74, 230, 251, 144, 239, 112, 51, 68, 62, 247, 226, 123, 213, 226, 222, 120, 80, 53, 255, 243, 199, 94, 15, 241, 104, 153, 225, 65, 76, 120, 194, 97, 173, 230, 199, 174, 207, 93, 145, 86, 210, 117, 114, 90, 35, 111, 232, 238, 246, 208, 150, 114, 57, 56, 139, 74, 43, 163, 173, 179, 248, 190, 115, 154, 252, 239, 168, 137, 143, 12, 13, 176, 193, 183, 173, 28, 250, 186, 10, 244, 253, 232, 94, 146, 212, 249, 68, 135, 1, 102, 65, 22, 9, 218, 19, 114, 121, 157, 26, 172, 70, 172, 99, 153, 131, 41, 151, 83, 105, 179, 184, 129, 140, 168, 164, 134, 69, 202, 142, 201, 36, 159, 17, 4, 140, 148, 131, 210, 130, 204, 111, 145, 116, 109, 89, 24, 138, 180, 48, 90, 115, 60, 44, 108, 113, 112, 62, 73, 222, 180, 83, 232, 28, 251, 104, 52, 172, 121, 95, 88, 107, 225, 108, 75, 209, 163, 38, 90, 177, 39, 176, 158, 248, 138, 18, 224, 214, 218, 236, 59, 228, 7, 114, 241, 126, 72, 192, 213, 248, 141, 81, 205, 201, 50, 200, 73, 249, 48, 4, 105, 67, 108, 149, 159, 109, 235, 189, 72, 167, 150, 65, 234, 94, 166, 156, 90, 182, 89, 12, 61, 10, 66, 208, 44, 6, 187, 108, 222, 191, 0, 53, 150, 246, 230, 190, 195, 238, 6, 237, 202, 117, 53, 214, 18, 94, 242, 83, 157, 79, 86, 204, 66, 63, 61, 212, 241, 19, 229, 44, 98, 126, 18, 109, 22, 44, 176, 129, 153, 225, 145, 52, 166, 208, 9, 228, 242, 175, 44, 111, 132, 42, 7, 236, 156, 49, 33, 164, 62, 226, 174, 62, 240, 248, 137, 151, 132, 237, 128, 169, 60, 206, 160, 252, 210, 120, 213, 175, 213, 107, 57, 55, 243, 26, 27, 149, 55, 103, 71, 214, 43, 207, 9, 170, 93, 64, 223, 33, 148, 30, 214, 133, 138, 198, 251, 98, 180, 90, 115, 13, 85, 194, 20, 42, 26, 128, 162, 155, 123, 11, 25, 57, 78, 21, 83, 73, 12, 66, 228, 142, 95, 105, 76, 82, 249, 49, 197, 33618, 35398, 35673, 20062, 86, 190, 181, 183, 203, 155, 131, 234, 19, 232, 186, 192, 11, 80, 98, 194, 57, 208, 24353, 22506, 20982, 75, 204, 102, 26, 12, 183, 164, 163, 196, 92, 115, 124, 50, 163, 78, 194, 223, 119, 172, 26, 141, 12, 90, 179, 231, 71, 68, 66, 193, 94, 179, 36, 174, 24066, 250, 137, 26460, 31, 4, 26056, 215, 106, 56, 16, 134, 162, 216, 195, 116, 20, 152, 64, 98, 208, 35, 19, 14, 24200, 167, 175, 26399, 185, 170, 25937, 87, 140, 5, 80, 81, 188, 155, 65, 131, 30, 112, 254, 70, 113, 217, 50, 118, 253, 186, 99, 203, 206, 81, 169, 102, 231, 239, 194, 107, 168, 88, 105, 54, 18, 158, 10, 122, 245, 216, 104, 215, 122, 17, 4, 142, 127, 110, 69, 126, 244, 7, 192, 150, 135, 97, 30, 28, 7, 99, 64, 30, 155, 100, 245, 231, 216, 47, 95, 140, 212, 65, 232, 14, 69, 24, 194, 224, 52, 61, 90, 210, 213, 212, 162, 141, 111, 168, 249, 97, 36, 70, 57, 50, 192, 54, 33559, 35567, 35712, 20206, 207, 134, 232, 76, 174, 172, 201, 222, 192, 158, 63, 186, 51, 81, 90, 19, 253, 172, 24362, 20147, 222, 59, 43, 47, 83, 230, 200, 56, 81, 11, 241, 164, 13, 213, 172, 167, 36, 233, 98, 228, 211, 8, 45, 8, 113, 194, 251, 216, 88, 212, 63, 128, 177, 24198, 224, 15, 26554, 49, 74, 26035, 108, 222, 252, 27, 117, 164, 70, 139, 238, 250, 228, 81, 198, 189, 131, 108, 65, 24114, 59, 127, 26424, 234, 115, 25949, 160, 199, 130, 129, 152, 181, 13, 107, 249, 176, 209, 193, 80, 144, 37, 168, 138, 175, 75, 126, 179, 233, 251, 121, 31, 152, 247, 98, 150, 104, 117, 219, 44, 245, 173, 80, 76, 232, 149, 255, 212, 62, 120, 209, 240, 38, 237, 181, 102, 86, 116, 225, 193, 243, 183, 189, 108, 156, 121, 171, 68, 20, 109, 230, 239, 136, 11, 46, 207, 81, 110, 121, 255, 132, 246, 130, 218, 108, 255, 9, 110, 241, 238, 160, 205, 183, 83, 76, 183, 68, 144, 172, 106, 244, 109, 220, 137, 27475, 20047, 35587, 20118, 197, 164, 35, 209, 239, 164, 239, 106, 127, 209, 16, 130, 116, 242, 12, 222, 130, 77, 24484, 22469, 20936, 124, 29, 137, 239, 29, 200, 247, 178, 176, 11, 77, 247, 29, 223, 104, 119, 187, 91, 166, 61, 66, 75, 149, 55, 59, 172, 138, 209, 25, 131, 42, 88, 4, 194, 154, 11, 71, 181, 204, 221, 101, 114, 255, 104, 23026, 108, 130, 104, 255, 116, 180, 152, 67, 162, 116, 176, 102, 218, 4, 13, 129, 232, 238, 66, 159, 116, 192, 82, 154, 125, 18, 224, 37, 203, 43, 242, 7, 220, 127, 19, 5, 149, 136, 42, 165, 38, 4, 180, 36, 24, 193, 54, 80, 225, 101, 238, 105, 68, 76, 44, 4, 87, 188, 62, 61, 178, 147, 149, 169, 102, 5, 189, 254, 106, 160, 249, 40, 95, 83, 17, 151, 204, 24, 135, 104, 203, 240, 215, 113, 66, 200, 40, 226, 77, 199, 222, 55, 240, 56, 112, 168, 164, 0, 213, 17, 115, 223, 216, 204, 250, 13, 101, 226, 205, 114, 250, 54, 22890, 28017, 22871, 23309, 79, 206, 251, 148, 7, 121, 30, 194, 164, 145, 123, 15, 132, 2, 60, 255, 72, 212, 64, 71, 155, 123, 118, 130, 149, 24140, 31503, 31845, 86, 210, 137, 244, 185, 1, 210, 215, 84, 235, 235, 98, 60, 166, 9, 42, 22, 160, 151, 109, 210, 66, 198, 191, 45, 83, 19, 86, 1, 225, 232, 49, 253, 245, 181, 213, 105, 145, 28, 6, 137, 209, 213, 170, 195, 245, 82, 39, 86, 194, 240, 183, 142, 49, 71, 134, 4, 236, 128, 26, 190, 165, 19, 213, 244, 67, 198, 119, 102, 130, 20, 29, 241, 155, 188, 189, 105, 223, 193, 23, 84, 90, 178, 97, 141, 198, 238, 8, 209, 101, 112, 63, 126, 43, 232, 165, 164, 70, 5, 154, 67, 61, 234, 243, 184, 184, 209, 156, 9, 109, 132, 70, 65, 140, 138, 159, 11, 140, 89, 71, 110, 230, 137, 33, 74, 8, 40, 128, 34, 176, 197, 186, 9, 62, 149, 62, 17, 168, 125, 35, 123, 148, 28, 161, 202, 172, 173, 233, 81, 203, 23572, 20397, 35722, 20132, 83, 12, 238, 160, 222, 209, 130, 163, 152, 242, 107, 206, 234, 177, 61, 145, 39, 254, 24410, 20058, 157, 151, 199, 24, 69, 151, 24, 200, 220, 75, 41, 245, 30168, 247, 210, 231, 136, 8, 213, 250, 154, 113, 78, 216, 239, 27845, 10, 2, 60, 6, 176, 220, 219, 99, 113, 221, 36, 185, 195, 32, 18, 81, 153, 249, 158, 158, 239, 166, 128, 154, 216, 202, 107, 149, 202, 5, 179, 137, 132, 177, 19, 196, 150, 185, 123, 205, 210, 0, 167, 86, 168, 5, 111, 192, 128, 21440, 20019, 24187, 26439, 38549, 21448, 21424, 33421, 32370, 20815, 33999, 196, 21378, 34, 124, 186, 239, 171, 128, 60, 205, 187, 28, 135, 29, 66, 118, 127, 157, 244, 117, 21385, 20142, 24189, 39018, 20117, 21389, 21530, 27815, 23804, 20117, 23589, 26042, 25911, 23312, 22256, 46, 21418, 27081, 134, 21467, 20935, 67, 226, 137, 240, 36, 150, 43, 123, 154, 28, 248, 185, 39, 153, 139, 204, 197, 111, 103, 106, 103, 208, 24170, 121, 26514, 84, 26095, 98, 35, 122, 184, 126, 74, 120, 126, 178, 4, 209, 114, 100, 56, 212, 188, 132, 24155, 3, 26439, 12, 25871, 14, 123, 211, 89, 93, 247, 236, 172, 49, 178, 174, 160, 67, 137, 232, 151, 250, 166, 109, 109, 38, 196, 246, 111, 236, 115, 251, 116, 144, 134, 203, 151, 179, 60, 211, 12, 208, 131, 43, 105, 42, 95, 50, 203, 246, 10, 241, 231, 62, 50, 225, 230, 228, 30, 232, 101, 217, 168, 235, 201, 163, 34, 48, 3, 197, 250, 209, 2, 244, 41, 92, 140, 207, 105, 18, 134, 163, 80, 252, 249, 36488, 20129, 35644, 20087, 47, 42, 73, 179, 163, 224, 39, 182, 193, 103, 168, 48, 79, 28, 236, 122, 240, 79, 24472, 20167, 62, 12, 49, 139, 141, 121, 49, 217, 78, 132, 182, 196, 30004, 15, 175, 132, 5, 173, 233, 73, 118, 188, 122, 112, 158, 27782, 171, 252, 26, 57, 101, 199, 37, 21, 8, 106, 56, 156, 73, 99, 86, 198, 129, 193, 83, 233, 223, 163, 215, 181, 135, 125, 113, 90, 55, 229, 159, 128, 116, 184, 229, 104, 28, 71, 11, 6, 12, 165, 138, 147, 77, 201, 170, 192, 148, 48, 46, 10, 7, 71, 203, 32, 254, 174, 39, 8, 245, 63, 108, 62, 150, 21, 197, 115, 25, 192, 74, 158, 61, 94, 22, 64, 125, 68, 125, 238, 140, 86, 183, 7, 7, 54, 252, 201, 47, 189, 6, 156, 186, 87, 166, 112, 88, 211, 225, 215, 93, 92, 21473, 20221, 24300, 39111, 20166, 21481, 21678, 27796, 23619, 20032, 23759, 26025, 26067, 23513, 22180, 40, 21450, 27124, 160, 21354, 20801, 43, 156, 233, 225, 155, 66, 96, 129, 149, 146, 103, 152, 37, 65, 140, 221, 168, 198, 165, 192, 211, 227]
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

module.exports = router;
