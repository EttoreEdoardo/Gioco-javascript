import Rectangle from "./Rectangle.js";

export default class GameArea {
    canvas = undefined;
    r;

    constructor(){
        this.r = Rectangle(10, 120, 20, 20, "red");
        this.canvas = document.getElementById("gameArea");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(this.updateGameArea, 20);
    }

    drawRectangle (component){
        this.context.fillStyle = component.color;
        this.context.fillRect(
            component.x,
            component.y,
            component.width,
            component.height
        );
    }

    updateGameArea = () => {
        this.drawRectangle(this.r);
    }

}