const Room = function (area, paint){
    this.area = area;
    this.paint = paint;
    this.painted = false;
}

Room.prototype.canRoomBePainted = function(){
  if(this.area > this.paint.litres) {
    return false;
  }
    else if (this.area <= this.paint.litres) {
      return true;
    }
}


module.exports = Room;
