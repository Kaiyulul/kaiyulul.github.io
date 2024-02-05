import { ReactP5Wrapper } from 'react-p5-wrapper';
import "../../styles/Sketch.css";

let colorMatrix = [
    [183, 156, 237],
    // [190, 120, 80],
    // [120, 20, 120],
    [214, 143, 214],
    [242, 208, 164],
    // [53, 88, 52],
    [222, 192, 241],
    [254, 93, 38], [242, 192, 120], [250, 237, 202], [193, 219, 179], [126, 188, 137]
]

let temp;

const Sketch = p5 => {
    const p5Container = document.querySelector('#sketch');
    console.log(p5Container);
    console.log(p5Container.clientWidth);
    console.log(p5Container.clientHeight);
    let w = p5Container.clientWidth;
    let h = p5Container.clientHeight;

    let t, canvasSize;

    p5.setup = () => {
        let cnv = p5.createCanvas(w, h, p5.WEBGL);
        cnv.parent(p5Container);
        p5.angleMode(p5.DEGREES);
        p5.noFill();

        // Bezier Noise
        // p5.stroke(255, 10);  
        t = 0;
        canvasSize = w * h;
        temp = p5.random(colorMatrix);
    };

    p5.draw = () => {
        // var r = p5.map(p5.frameCount, 1, p5.frameCount, 140, 255)
        // var g = p5.map(p5.cos(p5.frameCount/2), -1, 1, 120, 160)
        // var b = p5.map(p5.sin(p5.frameCount/2), -1, 1, 20, 80)

        let r = temp[0];
        let g = temp[1];
        let b = temp[2];

        p5.stroke(r, g, b, 10);

        p5.translate(-w, -h);
        // p5.rotateX(p5.mouseX/100);
        // p5.rotateY(p5.mouseY/100);

        var x1 = w * p5.noise(t + canvasSize*100) * 2;
        var x2 = w * p5.noise(t + canvasSize*200) * 2;
        var x3 = w * p5.noise(t + canvasSize*300) * 2;
        var x4 = w * p5.noise(t + canvasSize*400) * 2;
        var y1 = h * p5.noise(t + canvasSize*500) * 2;
        var y2 = h * p5.noise(t + canvasSize*600) * 2;
        var y3 = h * p5.noise(t + canvasSize*700) * 2;
        var y4 = h * p5.noise(t + canvasSize*800) * 2;

        if (p5.frameCount % 2 === 0) {
            p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
        } 
        else {
            // p5.curve(x1, y1, x2, y2, x3, y3, x4, y4);
        }
        t += 0.002;
        
        if (p5.frameCount % 300 === 0) {
            p5.clear();
            temp = p5.random(colorMatrix);
        }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5Container.clientWidth, p5Container.clientHeight);
    }
};

const BezierNoiseSketch = () => (
    <div id="sketch">
        <ReactP5Wrapper sketch={Sketch} />
    </div>
);

export default BezierNoiseSketch;