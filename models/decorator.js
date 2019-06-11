const Decorator = function(){
  this.stock = [];
}


Decorator.prototype.addPaintToStock = function(paint){
  this.stock.push(paint);
}


module.exports = Decorator;
