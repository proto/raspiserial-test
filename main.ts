loops.everyInterval(10000, function () {
    serial.setWriteLinePadding(0)
    serial.writeLine("{" + "\"temp\":" + convertToText(input.temperature()) + "," + "\"lum\":" + convertToText(input.lightLevel()) + "}")
})
