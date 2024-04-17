// Namespace declaration
var Demonixis = window.Demonixis || {};
Demonixis.Gui = Demonixis.Gui || {};

// Constructor function for MiniMap object
Demonixis.Gui.MiniMap = function(width, height, parent) {
    // Properties
    this.parent = parent;
    this.width = width;
    this.height = height;
    this.blockSize = {
        width: 5,
        height: 5
    };
    this.playerPosition = {
        x: 0,
        y: 0
    };

    // Canvas creation
    this.miniMap = document.createElement("canvas");
    this.ctx = this.miniMap.getContext("2d");

    // Method to create and position the mini-map
    this.create = function(top, left, position, border) {
        var stylePosition = "position:absolute;";
        var styleTop = (top || "10") + "px;";
        var styleLeft = (left || "10") + "px;";
        var styleBorder = (border || "1px solid black") + ";";

        this.miniMap.setAttribute("width", this.width * this.blockSize.width);
        this.miniMap.setAttribute("height", this.height * this.blockSize.height);
        this.miniMap.setAttribute("id", "miniMap");
        this.miniMap.setAttribute("style", stylePosition + "top:" + styleTop + "left:" + styleLeft + styleBorder);

        var domElement = document.getElementById(this.parent);
        if (domElement[0] != "undefined") {
            domElement.removeChild[domElement[0]];
        }
        domElement.appendChild(this.miniMap);
    };

    // Method to draw elements on the mini-map
    this.draw = function(x, y, id) {
        if (id == 1) {
            this.ctx.fillStyle = "white";
        } else if (id == 'D') {
            this.ctx.fillStyle = "red";
            this.playerPosition = {
                x: x,
                y: y
            };
        } else if (id == 'J') {
            this.ctx.fillStype = "yellow"; // Typo: should be "fillStyle"
        } else if (id == 'A') {
            this.ctx.fillStyle = "blue";
        } else {
            this.ctx.fillStyle = "rgb(200, 200, 200)";
        }

        this.ctx.fillRect(x * 5, y * 5, 5, 5);
    };

    // Method to update the mini-map with new player position
    this.update = function(newPlayerPosition) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.playerPosition.x * this.blockSize.width, this.playerPosition.y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(newPlayerPosition.x * this.blockSize.width, newPlayerPosition.y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
        this.playerPosition = newPlayerPosition;
    };

    // Method to draw at specific position on the mini-map
    this.drawAt = function(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.blockSize.width, y * this.blockSize.height, this.blockSize.width, this.blockSize.height);
    };
};
