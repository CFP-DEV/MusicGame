// TODO: Tiles logic
// TODO: FPS Counter
// TODO: Option to manipulate speed of the game / tile
// Score / Combo UI
// Multiple canvas Layers to optimize drawing process

class Game {
    constructor () {
        this.player = {
            score: 0,
            combo: 0,
        }

        this.setup = {
            lineWidth: 3,
            linesNumber: 3,
        }

        this.tiles = [
            {
                line: 1,
                timer: 1500,
                active: true,
                position: -20,
            },
            {
                line: 2,
                timer: 3000,
                active: true,
                position: -20,
            },
            {
                line: 3,
                timer: 9000,
                active: true,
                position: -20,
            }
        ];

        this.activeKeys = [
            {
                key: 'q',
                active: false,
            },
            {
                key: 'w',
                active: false,
            },
            {
                key: 'e',
                active: false,
            },
        ];

        this.activeTiles = [];

        // FPS Counter
        this.frames = 0;
        this.ticks = 0;
        this.lastFrames = 0;

        // Timer
        this.startTime;

        // Binds
        this.drawFrame = this.drawFrame.bind(this);
        this.drawUI = this.drawUI.bind(this);
    }

    init () {
        // Load Canvas
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = 600;

        // Set Keys
        this.setKeys();

        // Start Timer
        this.startTime = Date.now();

        // Draw Frame
        this.drawFrame();
    }

    drawUI () {
        // Draw Background
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Lines & Keys
        this.linesGap = (this.canvas.width - this.setup.linesNumber * this.setup.lineWidth) / (this.setup.linesNumber + 1); 
        for (let i = 1; i <= this.setup.linesNumber; i++) {
            // Line
            this.ctx.fillStyle = "#FFFFFF";
            this.ctx.fillRect(i * this.linesGap, 0, this.setup.lineWidth, this.canvas.height - 90);
            this.ctx.fillRect(i * this.linesGap, this.canvas.height - 30, this.setup.lineWidth, this.canvas.height);

            // Text in the Circle
            this.ctx.font = "18px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.activeKeys[i - 1].key, i * this.linesGap + this.setup.lineWidth / 2, this.canvas.height - 60);

            // Circle
            this.ctx.beginPath();
            this.ctx.arc(i * this.linesGap + this.setup.lineWidth / 2, this.canvas.height - 60, 30, 2 * Math.PI, false);

            if (this.activeKeys[i - 1].active) {
                this.ctx.fillStyle = "#FFFFFF";
            } else {
                this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
            }
            
            this.ctx.fill();
            this.ctx.lineWidth = 2.5;
            this.ctx.strokeStyle = "#FFFFFF";
            this.ctx.stroke();

        }
    }

    drawFrame () {
        requestAnimationFrame(this.drawFrame);

        // Draw UI
        this.drawUI();

        // Frames Counter
        let now = Date.now();
        if (now - this.lastFrames >= 1000) {
            this.lastFrames = now;
            this.frames = this.ticks;
            this.ticks = 0;
        }
        this.ticks++;

        // Elapsed time
        let elapsedTime = Date.now() - this.startTime;

        this.tiles.forEach(tile => {
            if (elapsedTime >= tile.timer && tile.active) {
                this.ctx.beginPath();
                this.ctx.arc(tile.line * this.linesGap + this.setup.lineWidth / 2, tile.position, 20, 2 * Math.PI, false);

                switch (tile.line) {
                    case 1:
                        this.ctx.fillStyle = "#00ACED";
                        break;
                    case 2:
                        this.ctx.fillStyle = "#f4df41";
                        break;
                    default:
                        this.ctx.fillStyle = "#f44242";
                }

                this.ctx.fill();

                // Increase position
                tile.position += 5;

                // Check if it's not out of board
                if (tile.position >= this.canvas.height) {
                    tile.active = false;

                    console.log('You\'ve missed a tile.');
                };
            }
        });
    }

    activeKey (line) {
        let tileHit = false;

        this.tiles.forEach(tile => {
            if (tile.position >= this.canvas.height - 90 && tile.position <= this.canvas.height - 30 && tile.line === line) {
                console.log('Success! Youve hit a tile.');
                tile.active = false;
                tileHit = true;
            };
        });

        if (!tileHit) {
            console.log('Youve missed. Score is should reset now');
        }
    } 

    setKeys () {
        // Click
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'q':
                    this.activeKey(1);
                    this.activeKeys[0].active = true;
                    break;
                case 'w':
                    this.activeKey(2);
                    this.activeKeys[1].active = true;
                    break;
                case 'e':
                    this.activeKey(3);
                    this.activeKeys[2].active = true;
                    break;
                default:
                    console.log('Other key was clicked');
            }
        });

        // Release
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'q':
                    this.activeKeys[0].active = false;
                    break;
                case 'w':
                    this.activeKeys[1].active = false;
                    break;
                case 'e':
                    this.activeKeys[2].active = false;
                    break;
                default:
                    console.log('Other key was released');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded!');

    // Init Game
    const RockMania = new Game();
    RockMania.init();
});