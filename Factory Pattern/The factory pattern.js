// 两个子类GeneralProductsBicycleShop
// GeneralProductsBicycleShop来决定一个成员变量因该是那个具体的类的实例
var BicycleShop = function() {}; // abstract class
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle = this.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    },
    createBicycle: function() {
        throw new Error('Upported operation on an abstract class');
    }
};

function extend(a, b) {
    for (var i in b) {
        a[i] = b[i];
    }
    return a;
}
var AcmeBicycleShop = function() {};
extend(AcmeBicycleShop, BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function(model) {
    var bicycle;
    switch (modle) {
        case 'The Speedster':
            bicycle = new AcmeSpeedster();
            break;
        case 'The Lowrider':
            bicycle = new AcmeLowrider();
        default:
            bicycle = new AcmeComfort();
    }
    return bicycle;
};

var GeneralProductsBicycleShop = function() {};
extend(GeneralProductsBicycleShop, BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function(model) {
    var bicycle;
    switch (model) {
        case 'The Speedster':
            bicycle = new GeneralProductsSpeedster();
            break;
        case 'The Lowrider':
            bicycle = new GeneralProductsLowrider();
            break;
        case 'The Flatlander':
            bicycle = new GeneralProductsFlatlander();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new GeneralProductsComfortCruiser();
    }
    return bicycle;
};
// Usage
var alecsCruisers = new AcmeBicycleShop();
var yourNewBike = alecsCruisers.sellBicycle('The Lowrider');


var bobsCruisers = new GeneralProductsBicycleShop();
var yourSecondNewBike = bobsCruisers.sellBicycle('The Lowrider');