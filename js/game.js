// TODO: Tiles logic
// TODO: FPS Counter
// TODO: Option to manipulate speed of the game / tile
// Score / Combo UI

class Game {
    constructor () {
        // Game's Info
        this.game = {
            width: 400,
            height: 600,
            lineWidth: 3,
            linesNumber: 3,
        }

        // Player's Info
        this.player = {
            score: 0,
            combo: 0,
        }

        // Song's Info
        this.song = {
            tiles: [
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
                },
            ],
        }

        // Keys
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

        // FPS Counter
        this.frames = 0;
        this.ticks = 0;
        this.lastFrames = 0;

        // Timer
        this.startTime;

        // Binds
        this.drawFrame = this.drawFrame.bind(this);
    }

    init () {
        // Draw Static UI
        this.drawStaticUI();

        // Init Controls
        this.initControls();

        // Set Time
        this.startTime = Date.now();

        // Draw Frame
        this.drawFrame();
    }

    drawStaticUI () {
        // Init Canvas
        this.staticUIcanvas = document.getElementById('gameUI');
        this.staticUI = this.staticUIcanvas.getContext('2d');

        // Canvas height & width
        this.staticUIcanvas.height = this.game.height;
        this.staticUIcanvas.width = this.game.width;

        // Init Game's Canvas
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // Game's Canvas height & width
        this.canvas.height = this.game.height;
        this.canvas.width = this.game.width;

        // Calculate gap between lines
        this.linesGap = (this.staticUIcanvas.width - this.game.linesNumber * this.game.lineWidth) / (this.game.linesNumber + 1); 

        // Draw Background
        this.staticUI.fillStyle = "#000000";
        this.staticUI.fillRect(0, 0, this.staticUIcanvas.width, this.staticUIcanvas.height);

        // Draw Lines & Keys
        for (let i = 1; i <= this.game.linesNumber; i++) {
            // Line
            this.staticUI.fillStyle = "#FFFFFF";
            this.staticUI.fillRect(i * this.linesGap, 0, this.game.lineWidth, this.staticUIcanvas.height - 90);
            this.staticUI.fillRect(i * this.linesGap, this.staticUIcanvas.height - 30, this.game.lineWidth, this.staticUIcanvas.height);    
        
            // Circle
            this.staticUI.beginPath();
            this.staticUI.arc(i * this.linesGap + this.game.lineWidth / 2, this.staticUIcanvas.height - 60, 30, 2 * Math.PI, false);
            this.staticUI.fillStyle = "rgba(0, 0, 0, 0)";
            this.staticUI.fill();
            this.staticUI.lineWidth = 2.5;
            this.staticUI.strokeStyle = "#FFFFFF";
            this.staticUI.stroke();
        }
        
        // Draw Player's Info
        

        // Draw Song's Info
    }

    drawFrame () {
        requestAnimationFrame(this.drawFrame);

        // Clear Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Frames Counter
        let currentTime = Date.now();

        if (currentTime - this.lastFrames >= 1000) {
            this.lastFrames = currentTime;
            this.frames = this.ticks;
            this.ticks = 0;
        }

        this.ticks++;

        // Elapse Time & Drawing tiles
        let elapsedTime = currentTime - this.startTime;

        this.song.tiles.forEach(tile => {
            if (elapsedTime >= tile.timer && tile.active) {
                this.ctx.beginPath();
                this.ctx.arc(tile.line * this.linesGap + this.game.lineWidth / 2, tile.position, 20, 2 * Math.PI, false);

                // Set proper color based on line
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

        // Draw Keys
        for (let i = 1; i <= this.game.linesNumber; i++) {
            if (this.activeKeys[i - 1].active) {
                // Activated Circle
                this.ctx.beginPath();
                this.ctx.arc(i * this.linesGap + this.game.lineWidth / 2, this.canvas.height - 60, 30, 2 * Math.PI, false);
                this.ctx.fillStyle = "#FFFFFF";
                this.ctx.fill();
            }
        }
    }

    activeKey (line) {
        let tileHit = false; 

        this.song.tiles.forEach(tile => {
            if (tile.position >= this.canvas.height - 90 && tile.position <= this.canvas.height - 30 && tile.line === line && tile.active) {
                console.log('Success! Youve hit a tile.');
                tile.active = false;
                tileHit = true;
            };
        });

        if (!tileHit) {
            console.log('Youve missed. Score is should reset now');
        }
    } 

    initControls () {
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