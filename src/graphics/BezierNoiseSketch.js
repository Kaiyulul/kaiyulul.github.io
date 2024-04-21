import React from "react";
import { ReactP5Wrapper } from 'react-p5-wrapper';
import "../styles/Sketch.css";

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

const Sketch = p5 => {
    class Mover {
        constructor(x, y, vx, vy, m, color) {
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(vx, vy);
        this.acc = p5.createVector(0, 0);
        this.mass = m;
        this.r = p5.sqrt(this.mass) * 2;
        this.color = p5.random(colorMatrix);
        }
    
        applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
        }
    
        attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = p5.constrain(force.magSq(), 100, 1000);
        let G = 1;
        let strength = (G * (this.mass * mover.mass)) / distanceSq;
        force.setMag(strength);
        mover.applyForce(force);
        }
    
        update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        }
    
        show() {
        p5.stroke(this.color);
        p5.strokeWeight(2);
        p5.fill(this.color);
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
        }
    }

    const p5Container = document.querySelector('#sketch');
    let w = p5Container.clientWidth;
    let h = p5Container.clientHeight;
    let movers = [];
    let n = 3;

    p5.setup = () => {
        let cnv = p5.createCanvas(w, h);
        for (let i = 0; i < n; i++) {
            movers[i] = new Mover(p5.random(500, 1500), p5.random(500, 1500), 0, p5.random(-10, 10), 1000);
        }
        p5.background(40);
    }
        

    p5.draw = () => {
        p5.background(40, 50);
        
        for (let mover of movers) {
            for (let other of movers) {
            if (mover !== other) {
                mover.attract(other);
            }
            }
        }

        for (let mover of movers) {
            mover.update();
            mover.show();
            
            if (0 < mover.x < w || 0 < mover.y < h) {

            }
        }

        if (p5.frameCount % 300 === 0) {
            p5.setup();
            p5.draw();
        }
    }
}

class BezierNoiseSketch extends React.Component {
    render() {
        return (
            <section>
                <div id="sketch">
                    <ReactP5Wrapper sketch={Sketch} />
                </div>
            </section>
        )
    }
}

export default BezierNoiseSketch;