// TODO: Option to manipulate speed of the game / tile
// Score / Combo UI
// Song Progress / Current Time / Duration
// Alerts for (50, 100, 150 combo...)
// Divide to modules instead of one big file
// Throttle?
// 3rd canvas to display user / song data
// Instead of time elapsed trigger events based on currentTime of the audio?!?!?!?!?!?!
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
            backgroundURL: '',
            tiles: [
                {
                    line: 1,
                    timer: 1500,
                    active: true,
                    position: -20,
                    speed: 5,
                },
                {
                    line: 2,
                    timer: 3000,
                    active: true,
                    position: -20,
                    speed: 10,
                },
                {
                    line: 3,
                    timer: 9000,
                    active: true,
                    position: -20,
                    speed: 5,
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

        // Init Song
        this.initSong();

        // Set Time
        this.startTime = Date.now();

        // Draw Frame
        this.drawFrame();

        // Draw Game UI
        this.drawGameUI();
    }

    drawStaticUI () {
        // Init Canvas
        this.staticUIcanvas = document.getElementById('gameUIstatic');
        this.staticUI = this.staticUIcanvas.getContext('2d');

        // Canvas height & width
        this.gameContainer = document.querySelector('.game');
        this.staticUIcanvas.height = this.gameContainer.clientHeight;
        this.staticUIcanvas.width = this.gameContainer.clientWidth;

        // Init Game's UI Canvas
        this.gameUIcanvas = document.getElementById('gameUI');
        this.gameUI = this.gameUIcanvas.getContext('2d');

        // Game's UI Canvas height & width
        this.gameUIcanvas.height = this.gameContainer.clientHeight;
        this.gameUIcanvas.width = this.gameContainer.clientWidth;

        // Init Game's Canvas
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // Game's Canvas height & width
        this.canvas.height = this.game.height;
        this.canvas.width = this.game.width;

        // Calculate gap between lines
        this.linesGap = (this.game.width - this.game.linesNumber * this.game.lineWidth) / (this.game.linesNumber + 1); 

        // Draw Background
        // Draw Image (Placeholder for now)
        this.staticUI.fillStyle = "#333333";
        this.staticUI.fillRect(0, 0, this.staticUIcanvas.width, this.staticUIcanvas.height);

        // Draw Black Background
        this.staticUI.fillStyle = "#000000";
        this.staticUI.fillRect((this.staticUIcanvas.width - this.game.width) / 2, 0, this.game.width, this.game.height);

        /*
        this.staticUI.fillStyle = "#000000";
        this.staticUI.fillRect(0, 0, this.staticUIcanvas.width, this.staticUIcanvas.height);
        */

        // Draw Lines & Keys
        for (let i = 1; i <= this.game.linesNumber; i++) {
            // Line
            this.staticUI.fillStyle = "#FFFFFF";
            this.staticUI.fillRect(i * this.linesGap + (this.staticUIcanvas.width - this.game.width) / 2, 0, this.game.lineWidth, this.staticUIcanvas.height - 90);
            this.staticUI.fillRect(i * this.linesGap + (this.staticUIcanvas.width - this.game.width) / 2, this.staticUIcanvas.height - 30, this.game.lineWidth, this.staticUIcanvas.height);    
        
            // Circle
            this.staticUI.beginPath();
            this.staticUI.arc(i * this.linesGap + this.game.lineWidth / 2 + (this.staticUIcanvas.width - this.game.width) / 2, this.staticUIcanvas.height - 60, 30, 2 * Math.PI, false);
            this.staticUI.fillStyle = "rgba(0, 0, 0, 0)";
            this.staticUI.fill();
            this.staticUI.lineWidth = 2.5;
            this.staticUI.strokeStyle = "#FFFFFF";
            this.staticUI.stroke();
        }
        
        // Draw Player's Info
        

        // Draw Song's Info
        // Duration Progress Bar
        this.staticUI.fillStyle = "#666666";
        this.staticUI.fillRect(20, this.staticUIcanvas.height - 40, 400, 20);
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
                tile.position += tile.speed;

                // Check if it's not out of board
                if (tile.position >= this.canvas.height) {
                    tile.active = false;

                    // User didn't hit the tile, score is resseting
                    this.player.combo = 0;
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

    drawGameUI () {
        // Score & Combo
        this.gameUI.font = "12px Arial";
        this.gameUI.fillStyle = "#FFFFFF";
        this.gameUI.fillText(`Score: ${this.player.score}`, 20, 20);
        this.gameUI.fillText(`Combo: ${this.player.combo}`, 20, 40);

        // Song's Info  
        // TODO: MAke seconds display in 0:01 not 0:1 way
        // TODO: Add progress bar
        this.audio.addEventListener('timeupdate', (e) => {
            let songCurrent = Math.floor(this.audio.currentTime / 60) + ":" + Math.floor(this.audio.currentTime % 60);

            if (this.lastTime !== Math.floor(this.audio.currentTime)) {
                this.lastTime = Math.floor(this.audio.currentTime);

                // Draw Bar (only if time've changed)
                this.gameUI.fillStyle = "#00ACED";
                this.gameUI.fillRect(20, this.staticUIcanvas.height - 40, Math.floor(this.audio.currentTime * 400 / this.audio.duration), 20);

                console.log(songCurrent);
            }
        });

        this.audio.addEventListener('durationchange', (e) => {
            let songDuration = Math.floor(this.audio.duration / 60) + ":" + Math.floor(this.audio.duration % 60);

            console.log(songDuration);
        });
    }

    activeKey (line) {
        let tileHit = false; 

        this.song.tiles.forEach(tile => {
            if (tile.position >= this.canvas.height - 90 && tile.position <= this.canvas.height - 30 && tile.line === line && tile.active) {
                this.player.score += 10 + this.player.combo;
                this.player.combo += 1;
                tile.active = false;
                tileHit = true;
            };
        });

        if (!tileHit) {
            // User missed tile, combo is resseting
            this.player.combo = 0;
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

    initSong () {
        // Init Audio
        this.audio = new Audio('./js/down.mp3');

        // Display Current Time & Duration
        this.audio.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded!');

    // Init Game
    const RockMania = new Game();
    RockMania.init();
});