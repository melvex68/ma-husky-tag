huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(1)
        huskylens.writeOSD("1", 150, 30)
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(2)
        huskylens.writeOSD("2", 150, 30)
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(3)
        huskylens.writeOSD("3", 150, 30)
    }
    if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(4)
        huskylens.writeOSD("4", 150, 30)
    }
})
