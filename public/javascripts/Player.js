var Player = function(initX, initY, initColor) {
    var id;
    var x = initX;
    var y = initY;
    var color = initColor;

    var setId = function(newId) {
        id = newId;
    };

    var getId = function() {
        return id;
    };

    var getColor = function() {
        return color;
    };

    var setX = function(newX) {
        x = newX;
    };

    var getX = function() {
        return x;
    };

    var setY = function(newY) {
        y = newY;
    };

    var getY = function() {
        return y;
    };

    var draw = function(context) {
        context.fillRect(x, y, 20, 20);
    };

    return {
        setId:  setId,
        getId:  getId,
        getColor: getColor,
        setX:   setX,
        getX:   getX,
        setY:   setY,
        getY:   getY,
        draw:   draw
    };
};