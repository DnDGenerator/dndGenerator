class Cartographer{
    constructor(locationTile){
        this.location = locationTile;
        this.facingDirection = '';
        this.frontFacingTile = locationTile.getNeighbors().n;
        this.orientation = {
            opposite:'n',
            right:'e',
            same:'s',
            left:'w'
        };

        this.getOrientation = this.getOrientation.bind(this);
        this.startWalking = this.startWalking.bind(this);
    }
    getOrientation(){
        return this.orientation;
    }

    startWalking(direction){
        this.facingDirection = direction;
        this.frontFacingTile = this.location.getNeighbors()[direction];
    }
}