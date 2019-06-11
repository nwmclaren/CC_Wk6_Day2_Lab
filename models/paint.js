const Paint = function (litres){
  this.litres = litres;
}

Paint.prototype.isEmpty = function(){
  if (this.litres > 0){
    return false
  }
  else if (this.litres == 0){
    return true
  }
}

Paint.prototype.emptyCan = function(){
  this.litres = 0;
}


module.exports = Paint;
