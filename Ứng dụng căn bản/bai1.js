const CANVAS = document.getElementById("myCanvas");
const CONTEXT = CANVAS.getContext("2d");

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return console.log(`The rectangle area is ${this.width * this.height}`);
    }

    getPerimeter() {
        return console.log(`The rectangle perimeter is ${(this.width + this.height) * 2}`);
    }

    setCoor(x, y) {
        this.x = x;
        this.y = y;
    }

    setLineWidth(lineWidth) {
        CONTEXT.lineWidth = lineWidth;
    }

    setStrokeStyle(strokeStyle) {
        CONTEXT.strokeStyle = strokeStyle;
    }

    // setFillStyle(fillStyle) {
    //     CONTEXT.fillStyle = fillStyle;
    // }

    //draw no filled
    draw() {
        CONTEXT.strokeRect(this.x, this.y, this.width, this.height);
    }

    //draw filled
    drawFilledRect() {
        CONTEXT.fillRect(this.x, this.y, this.width, this.height);
    }

    //delete rectangle
    erase(x, y) {
        CONTEXT.clearRect(
            x - this.lineWidth - 1,
            y - this.lineWidth - 1,
            this.width + this.lineWidth + 1,
            this.height + this.lineWidth + 1
        );
    }
}

let myRectangle = new Rectangle(400, 200);

myRectangle.setLineWidth(2);

myRectangle.setCoor(10, 20);
myRectangle.draw();

myRectangle.setCoor(10, 250);
myRectangle.setStrokeStyle('red');
myRectangle.draw();

myRectangle.setCoor(10, 480);
//myRectangle.setFillStyle('blue');
myRectangle.drawFilledRect();

//myRectangle.erase(10, 20)

myRectangle.getArea();
myRectangle.getPerimeter();