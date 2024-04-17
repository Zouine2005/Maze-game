// Namespace declaration
var Demonixis = window.Demonixis || {};
Demonixis.GameHelper = Demonixis.GameHelper || {};

// Constructor function for LevelHelper object
Demonixis.GameHelper.LevelHelper = function(start, end) {
    // Properties
    this.current = start || 1;
    this.next = this.current + 1;
    this.count = end || 5;
    this.isFinished = false;

    // Method to get the next level
    this.getNext = function() {
        // Check if the next level exceeds the total count
        if (this.next > this.count) {
            // Reset to the first level if exceeded
            this.current = 1;
            this.next = 2;
            this.isFinished = true;
        } else {
            // Move to the next level
            this.current = this.next;
            this.next++;
        }

        return this.current;
    }
};

// Constructor function for CameraHelper object
Demonixis.GameHelper.CameraHelper = function(camera) {
    // Properties
    this.translation = 5;
    this.rotation = 0.035;
    this.origin = {
        position: {
            x: 0,
            y: 0,
            z: 0,
            mapX: 0,
            mapY: 0,
            mapZ: 0
        },
        x: 0,
        y: 0,
        z: 0
    };
    
    this.camera = camera;
};
