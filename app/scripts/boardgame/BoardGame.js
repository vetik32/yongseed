'use strict';

var RULES = {
  colors: 3,
  getRandomColor: function() {
    return Math.floor((Math.random() * this.colors));
  },
  boardSize: 3
};


function BidimensionalCoordinates(x, y) {
  var _x, _y;

  if (x > RULES.boardSize || y > RULES.boardSize ||
    x < 0 || y < 0) {

    throw new Error('BidimensionalCoordinates: Invalid coordinates');
  }

  _x = x;
  _y = y;

  return {
    getX: function() {
      return _x;
    },

    getY: function() {
      return _y;
    }
  }
}


function Tile() {
  var _adjacentTiles = [],

    _color,
    _coordinates;

  return {
    getColor: function() {

      if (_.isUndefined(_color)) {
        throw new TypeError('Tile: has undefined color.');
      }

      return _color
    },

    setColor: function(color) {
      _color = color;

      return this;
    },

    setCoordinates: function(coordinates) {
      _coordinates = coordinates
    },

    getCoordinates: function() {
      return _coordinates;
    },

    addAdjacentTile: function(tile) {

      if (_adjacentTiles.length === 4) {
        throw new Error('Tile: all adjacent tiles are defined.');
      }

      _adjacentTiles.push(tile);
    },

    getAdjacentTiles: function() {
      return _adjacentTiles;
    }
  }
}


function Board() {
  var _tileConnector;
  var _size;
  var _map;

  function getATile(x, y) {
    var _tile = new Tile();

    _tile
      .setColor(RULES.getRandomColor())
      .setCoordinates(new BidimensionalCoordinates(x, y));

    return _tile;
  }


  function forAllTiles(iterator) {
    _.each(_map, function(_vector) {
      _.each(_vector, function(_tile) {
        iterator(_tile);
      });
    });
  }


  return {
    build: function(size) {
      _size = size;

      this.reset();
    },

    reset: function() {
      _map = [];

      for (var x = 0; x < _size; x += 1) {
        var _vector = [];

        for (var y = 0; y < _size; y += 1) {
          _vector.push(getATile(x, y));
        }

        _map.push(_vector);
      }

    },

/*    setTileConnector: function(TileConnector) {
      _tileConnector = new TileConnector(this);
    },

    buildTheConnections: function() {

      if (!_tileConnector) {
        throw new Error('Board: tile Connector is not defined.');
      }

      forAllTiles(function(tile) {
        _tileConnector.connectWithOthers(tile);
      })
    },*/

    getTile: function(x, y) {
      console.log(_map);
      return _map[x][y];
    },

    toString: function() {
      var _output = '\n';

      forAllTiles(function(tile) {
        _output += ' ' + tile.getColor();

        if (tile.getCoordinates().getY() === RULES.boardSize - 1) {
          _output += '\n';
        }
      });

      return _output;
    }
  }

}


function BidimensionalTileConnector(board) {
  var _board = board;

  return {
    connectWithOthers: function(tile) {
      var tileCoordiantes = tile.getCoordinates();

      if (tileCoordiantes.getX() < RULES.boardSize - 1) {
        var _leftTile = board.getTile(tileCoordiantes.getX() + 1, tileCoordiantes.getY());
        tile.addAdjacentTile(_leftTile);
      }
    }
  }
}
