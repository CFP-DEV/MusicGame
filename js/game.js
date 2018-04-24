// Alerts for (50, 100, 150 combo...)
// Divide to modules instead of one big file
// Throttle?
// Window resize support
// Support for 'long' tiles
// Menu
// Optimization
// better UI, UX
class Game {
    constructor () {
        // Game's Info
        this.game = {
            width: 400,
            height: 600,
            lineWidth: 3,
            linesNumber: 3,
            recordMode: false,
        }

        // Player's Info
        this.player = {
            score: 0,
            combo: 0,
            multiplier: 1,
        }

        // Song's Info
        this.song = {
            backgroundURL: '',
            tiles: [
              {
                "line": 1,
                "timer": 11178,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 11783,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 12472,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 13890,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 15306,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 18097,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 19476,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 20810,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 23479,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 23803,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 24126,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 24773,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 25137,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 25501,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 26189,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 26556,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 26879,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 27202,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 27525,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 27891,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 28216,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 28864,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 29227,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 29590,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 30277,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 30601,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 30926,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 31615,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 31939,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 32303,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 32627,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 32991,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 33356,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 33681,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 34331,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 34655,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 34978,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 35667,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 36033,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 36357,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 37087,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 37451,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 37775,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 38098,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 38463,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 38787,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 39108,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 39839,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 40163,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 40486,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 41134,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 41499,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 41822,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 1,
                "timer": 42513,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 42876,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 43200,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 43522,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 43926,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 3,
                "timer": 44289,
                "active": true,
                "position": -20,
                "speed": 5
              },
              {
                "line": 2,
                "timer": 44614,
                "active": true,
                "position": -20,
                "speed": 5
              }
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

        // Record Mode
        this.recordTiles = [];

        // FPS Counter
        this.frames = 0;
        this.ticks = 0;
        this.lastFrames = 0;
        this.delay = 0;

        // Binds
        this.drawFrame = this.drawFrame.bind(this);

        // Custom Events
        this.scoreChange = new Event('scoreChange');
    }

    init () {
        // Draw Static UI
        this.drawStaticUI();

        // Init Controls
        this.initControls();

        // Init Song
        this.initSong();

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

        // Draw Black Background
        this.staticUI.fillStyle = "#000000";
        this.staticUI.fillRect((this.staticUIcanvas.width - this.game.width) / 2, 0, this.game.width, this.game.height);

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
        this.staticUI.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.staticUI.fillRect(20, 20, 400, 80);

        this.staticUI.fillStyle = "#000000";
        this.staticUI.font = "18px 'Montserrat', sans-serif";
        this.staticUI.fillText('Score', 40, 58);
        this.staticUI.fillText('Streak', 155, 58);
        this.staticUI.fillText('Multiplier', 280, 58);

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
        if (!this.game.recordMode) {
            this.song.tiles.forEach(tile => {
                if (Math.round(this.audio.currentTime * 1000) >= tile.timer - Math.round(530 / 300) * 1000 && tile.active) {
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

                    // If tile is 'long' then draw rest of it
                    // if (tile.length) {
                    //     this.ctx.fillRect(tile.line * this.linesGap - 5, tile.position - 20 - tile.length, 10, tile.length);
                    // }

                    // Increase position
                    tile.position += tile.speed;

                    // Check if it's not out of board
                    if (tile.position >= this.canvas.height) {
                        tile.active = false;

                        // User didn't hit the tile, combo is resseting
                        this.player.combo = 0;

                        // Dispatch event
                        document.dispatchEvent(this.scoreChange);
                    };
                }
            });
        }

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

    drawScore () {
        // Clear
        this.gameUI.clearRect(0, 0, 400, 200);

        // Draw Score
        this.gameUI.font = "14px 'Arial'";
        this.gameUI.fillStyle = "#000000";
        this.gameUI.fillText(this.player.score, 40, 82);
        this.gameUI.fillText(this.player.combo, 155, 82);
        this.gameUI.fillText(this.player.multiplier, 280, 82);
    }

    drawGameUI () {
        this.drawScore();

        // Score & Combo
        document.addEventListener('scoreChange', () => {
            this.drawScore();
        });

        // Song's Info  
        this.audio.addEventListener('timeupdate', (e) => {
            if (this.game.recordMode && this.audio.currentTime >= this.audio.duration) {
                console.log(this.recordTiles);

                return;
            }

            if (this.lastTime !== Math.floor(this.audio.currentTime)) {
                this.lastTime = Math.floor(this.audio.currentTime);

                // Clear Bar
                this.gameUI.clearRect(0, this.staticUIcanvas.height - 40, this.staticUIcanvas.width, 40);

                // Draw Bar
                this.gameUI.fillStyle = "#00ACED";
                this.gameUI.fillRect(20, this.staticUIcanvas.height - 40, Math.floor(this.audio.currentTime * 400 / this.audio.duration), 20);

                // Calculate currentTime and duration
                let currentTimeM = Math.floor(this.audio.currentTime / 60);
                let currentTimeS = Math.floor(this.audio.currentTime % 60) < 10 ? '0' + Math.floor(this.audio.currentTime % 60) : Math.floor(this.audio.currentTime % 60);
                let currentTime = `${currentTimeM}:${currentTimeS}`;

                let durationM = Math.floor(this.audio.duration / 60);
                let durationS = Math.floor(this.audio.duration % 60) < 10 ? '0' + Math.floor(this.audio.duration % 60) : Math.floor(this.audio.duration % 60);
                let duration = `${durationM}:${durationS}`;

                // Print Text
                this.gameUI.fillStyle = "#FFFFFF";
                this.gameUI.font = "14px 'Arial'";
                this.gameUI.fillText(`${currentTime} / ${duration}`, 440, this.staticUIcanvas.height - 26);
            }
        });
    }

    createAlert (message) {
      // Clear current displayed alert
      if (this.alert) {
        clearTimeout(this.alert);

        this.alert = '';
        this.gameUI.clearRect(this.gameUIcanvas.width / 2 - this.game.width / 2, 0, this.game.width, this.game.height);
      }

      // Create new alert
      this.gameUI.save();
      this.gameUI.fillStyle = "#FFFFFF";
      this.gameUI.font = "18px 'Arial'";
      this.gameUI.textAlign = "center";
      this.gameUI.fillText(message, this.gameUIcanvas.width / 2, this.gameUIcanvas.height / 2 + 18);
      this.gameUI.restore();

      this.alert = setTimeout(() => {
        // Clear screen
        this.gameUI.clearRect(this.gameUIcanvas.width / 2 - this.game.width / 2, 0, this.game.width, this.game.height);
      }, 2000);
    }

    activeKey (line) {
        if (!this.game.recordMode) {
            let tileHit = false; 

            this.song.tiles.forEach(tile => {
                if (tile.position >= this.canvas.height - 90 && tile.position <= this.canvas.height - 30 && tile.line === line && tile.active) {
                    this.player.score += 10 + this.player.combo;
                    this.player.combo += 1;
                    tile.active = false;
                    tileHit = true;

                    switch (this.player.combo) {
                        case 10: 
                            this.createAlert('10 STREAK !!!');
                            break;

                        case 50:
                            this.createAlert('50 STREAK !!!');
                            break;
                    }

                    // Dispatch event
                    document.dispatchEvent(this.scoreChange);
                };
            });

            if (!tileHit) {
                // User missed tile, combo is resseting
                this.player.combo = 0;

                // Dispatch event
                document.dispatchEvent(this.scoreChange);
            }
        } else {
            this.recordTiles.push({
                line: line,
                timer: Math.round(this.audio.currentTime * 1000),
                active: true,
                position: -20,
                speed: 5,
            });
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
        this.audio = new Audio('./js/capone.mp3');

        // Display Current Time & Duration
        this.audio.play();
    }
}

window.onload = () => {
    // Init Game
    const RockMania = new Game();
    RockMania.init();
};