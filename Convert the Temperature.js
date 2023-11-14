/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    far=(celsius*1.80)+32.00
    kel=celsius+273.15
    return [kel,far]
};