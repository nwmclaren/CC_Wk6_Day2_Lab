const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function(){
  beforeEach(function(){
    paint_1 = new Paint(15)
    room = new Room (10, paint_1)
  });

  it('should have an area in square metres', function(){
    const actual = room.area;
    assert.strictEqual(actual, 10);
  })
  it('should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual,false);
  })
  it('should be able to be painted', function(){
    const actual = room.canRoomBePainted()
    assert.strictEqual(actual,true)
  })


  describe('Paint', function(){
    beforeEach(function(){
      paint_1 = new Paint(15)
      paint_2 = new Paint(0)
      paint_3 = new Paint(10)
    })
    it('should have a number of litres of paint', function(){
        const actual = paint_1.litres;
        assert.strictEqual(actual, 15);
    })
    it('should be able to check if empty', function(){
        const actual = paint_2.isEmpty();
        assert.strictEqual(actual, true);
    })
    it('should be able to check if not empty', function(){
        const actual = paint_1.isEmpty();
        assert.strictEqual(actual, false);
    })
    it('should be able to empty itself', function(){
        paint_1.emptyCan();
        const actual = paint_1.litres;
        assert.strictEqual(actual, 0)
    })
  })

  describe('Decorator', function(){
    beforeEach(function(){
      decorator = new Decorator()
    })
    it('should start with an empty paint stock', function(){
      const actual = decorator.stock;
      assert.deepEqual(actual,[]);
    })
    it('should add a can of paint to stock', function(){
      decorator.addPaintToStock(paint_1)
      const actual = decorator.stock;
      assert.deepEqual(actual,[{'litres': 15}])
    })
    it('should be able to calculate total litres of paint in stock', function(){
      decorator.addPaintToStock(paint_1);
      decorator.addPaintToStock(paint_3);
      const actual = decorator.totalLitresInStock();
      assert.strictEqual(actual,25);
    })
  })


})
