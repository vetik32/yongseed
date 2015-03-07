'use strict';

describe("Board Game", function() {

  describe("BidimensionalCoordinates", function() {
    var coordinate;

    beforeEach(function() {
      coordinate = new BidimensionalCoordinates(1, 2);
    });

    it("should be defined", function() {
      expect(typeof BidimensionalCoordinates).toEqual('function');
      expect(coordinate).toBeDefined();
    });

    it('should return X', function() {
      expect(typeof coordinate.getX).toEqual('function');
      expect(coordinate.getX()).toEqual(1);
    });

    it('should return Y', function() {
      expect(typeof coordinate.getY).toEqual('function');
      expect(coordinate.getY()).toEqual(2);
    });

    it('should throw an exception when coordinates are invalid', function() {

      expect(function() {
        new BidimensionalCoordinates(3, 5);
      }).toThrow(new Error('BidimensionalCoordinates: Invalid coordinates'));

      expect(function() {
        new BidimensionalCoordinates(5, 2);
      }).toThrow(new Error('BidimensionalCoordinates: Invalid coordinates'));
    });

  });

  describe("Tile", function() {

    var tile;

    beforeEach(function() {
      tile = new Tile();
    });

    it("should be defined", function() {
      expect(typeof Tile).toEqual('function');
      expect(tile).toBeDefined();
    });

    it("should trigger an exception if color is not defined", function() {
      expect(function() {
        tile.getColor();
      }).toThrow(new TypeError('Tile: has undefined color.'))
    });

    it("should have setter/getter for color", function() {
      expect(typeof tile.getColor).toEqual('function');
      expect(typeof tile.setColor).toEqual('function');

      tile.setColor(2);

      expect(tile.getColor()).toEqual(2);
    });

    it("should have setter/getter for coordinates", function() {
      expect(typeof tile.getCoordinates).toEqual('function');
      expect(typeof tile.setCoordinates).toEqual('function');

      var coordinates = new BidimensionalCoordinates(3, 2);
      tile.setCoordinates(coordinates);

      expect(tile.getCoordinates().getX()).toEqual(3);
      expect(tile.getCoordinates().getY()).toEqual(2);
    });

    it("should add adjacent tile", function() {
      expect(typeof tile.addAdjacentTile).toEqual('function');
      expect(typeof tile.getAdjacentTiles).toEqual('function');


      tile.addAdjacentTile(new Tile());
      expect(tile.getAdjacentTiles().length).toEqual(1);

      tile.addAdjacentTile(new Tile());
      tile.addAdjacentTile(new Tile());
      tile.addAdjacentTile(new Tile());
      expect(tile.getAdjacentTiles().length).toEqual(4);

      expect(function(){
        tile.addAdjacentTile(new Tile());
      }).toThrow(new Error('Tile: all adjacent tiles are defined.'))

    });

  });

  describe("Board", function() {

    var nBoard;

    beforeEach(function() {
      nBoard = new Board();
      nBoard.build(RULES.boardSize);
    });

    it('should throw error is size is not specified', function() {
      expect(typeof Board).toEqual('function');
      expect(nBoard).toBeDefined();
    });

    it("should build the boards", function() {
      expect(typeof nBoard.build).toEqual('function');

      // console.log(nBoard.toString());
    });

    it('should return a tile', function(){
      expect(typeof nBoard.getTile).toEqual('function');

      // STOPPED HERE - could find out for moment why it's not working...

     /* var aTile = nBoard.geTile(0, 0);
      var aTileCoordinates = aTile.getCoordinates();

      expect(aTileCoordinates.getX()).toEqual(0);
      expect(aTileCoordinates.getY()).toEqual(0);*/
    })

  });

  describe("BidimensionalTileConnector", function() {

    var tileConnector;
    var board;

    beforeEach(function() {
      board = jasmine.createSpyObj('board', ['getTile']);
      tileConnector = new BidimensionalTileConnector(board);
    });

    it('should connect a tile with adjacent tiles', function(){
      expect(typeof tileConnector.connectWithOthers).toEqual('function');
      var aTile = new Tile();
      aTile.setCoordinates(new BidimensionalCoordinates(0, 0));

      tileConnector.connectWithOthers(aTile);

      expect(board.getTile).toHaveBeenCalledWith(1, 0);
    });
  });

  describe("Rules", function() {

    it("should have defined colors", function() {
      expect(RULES.colors).toBeDefined();
    });

    it("should have defined size", function() {
      expect(RULES.boardSize).toBeDefined();
    });

    it("should return a color in the [0..m] range", function() {
      expect(typeof RULES.getRandomColor).toEqual('function');
      expect(RULES.getRandomColor()).toBeLessThan(RULES.colors);
      expect(RULES.getRandomColor()).toBeLessThan(RULES.colors);
      expect(RULES.getRandomColor()).toBeLessThan(RULES.colors);
    });
  });
});
