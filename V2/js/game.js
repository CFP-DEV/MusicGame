class Game {
    constructor () {
        // Game's Options
        this.game = {
            width: 440,
            height: 600,
            lineWidth: 3,
            linesGap: 60,
            mode: 1,
            speed: 5,
            recordMode: false,
        }

        // Player's Info
        this.player = {
            score: 0,
            streak: 0,
            multiplier: 1,
        }

        // Song's Info
        this.song = {
            name: 'Capone - Oh No',
            tiles: [
                {
                  "line": 1,
                  "timer": 11178,
                  "position": -20,
                },
                {
                  "line": 2,
                  "timer": 11783,
                  "position": -20,
                },
                {
                  "line": 3,
                  "timer": 12472,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 13890,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 15306,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 18097,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 19476,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 20810,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 23479,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 23803,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 24126,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 24773,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 25137,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 25501,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 26189,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 26556,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 26879,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 27202,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 27525,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 27891,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 28216,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 28864,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 29227,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 29590,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 30277,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 30601,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 30926,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 31615,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 31939,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 32303,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 32627,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 32991,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 33356,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 33681,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 34331,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 34655,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 34978,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 35667,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 36033,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 36357,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 37087,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 37451,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 37775,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 38098,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 38463,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 38787,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 39108,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 39839,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 40163,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 40486,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 41134,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 41499,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 41822,
                   
                  "position": -20,
                   
                },
                {
                  "line": 1,
                  "timer": 42513,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 42876,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 43200,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 43522,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 43926,
                   
                  "position": -20,
                   
                },
                {
                  "line": 3,
                  "timer": 44289,
                   
                  "position": -20,
                   
                },
                {
                  "line": 2,
                  "timer": 44614,
                   
                  "position": -20,
                   
                }
            ],
        }

        // Keys
        this.keys = [
            {
                key: 'q',
            },
            {
                key: 'w',
            },
            {
                key: 'e',
            },
        ];

        // Colors
        this.colors = {
            dark: '#120f2c',
            white: '#ffffff',
            red: '#ee1848',
            yellow: '#ffcc00',
            green: '#47c9af',
            transparent: 'rgba(0, 0, 0, 0)',
        }

        // Record Mode
        this.recordTiles = [];

        // FPS Counter
        this.frames = 60;
        this.ticks = 0;
        this.lastFrames = 60;
        this.delay = 0;

        // Binds
        this.drawFrame = this.drawFrame.bind(this);

        // Custom Events
        this.scoreChange = new Event('scoreChange');
    }

    init () {
        // Init Canvas
        this.staticUIcanvas = document.getElementById('gameUIstatic');
        this.staticUI = this.staticUIcanvas.getContext('2d');

        // Init Game's UI Canvas
        this.gameUIcanvas = document.getElementById('gameUI');
        this.gameUI = this.gameUIcanvas.getContext('2d');

        // Init Game's Canvas
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // Container
        this.gameContainer = document.querySelector('.game');

        // Canvas height & width
        this.staticUIcanvas.height = this.gameContainer.clientHeight;
        this.staticUIcanvas.width = this.gameContainer.clientWidth;

        // Game's UI Canvas height & width
        this.gameUIcanvas.height = this.gameContainer.clientHeight;
        this.gameUIcanvas.width = this.gameContainer.clientWidth;

        // Game's Canvas height & width
        this.canvas.height = this.game.height;
        this.canvas.width = this.game.width;


        // Init Game
        this.initGame();
    }

    initGame () {
        // Draw Static UI
        this.drawStatic();

        // Update Score
        this.updateScore();

        // Controls
        document.addEventListener('keydown', (e) => {
            let key = e.key.toLowerCase();

            switch (key) {
                case this.keys[0].key:
                    this.activeKey(1);
                    break;
                case this.keys[1].key:
                    this.activeKey(2);
                    break;
                case this.keys[2].key:
                    this.activeKey(3);
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            let key = e.key.toLowerCase();

            switch (key) {
                case this.keys[0].key:
                    this.deactiveKey(1);
                    break;
                case this.keys[1].key:
                    this.deactiveKey(2);
                    break;
                case this.keys[2].key:
                    this.deactiveKey(3);
                    break;
            }
        })

        // Timer
        // TODO: Draw Timer on canvas
        let timer = 3;
        let timerFunc = setInterval(() => {
            if (timer === 0) {
                clearInterval(timerFunc);

                // Start Audio
                this.audio = new Audio('./assets/capone.mp3');
                this.audio.play();

                // Draw Game's UI
                this.drawUI();

                // Start Animation
                this.drawFrame();
            }

            console.log(timer);
            timer -= 1;
        }, 1000);
    }

    drawStatic () {
        // Draw Game's Background
        this.staticUI.fillStyle = this.colors.dark;
        this.staticUI.fillRect(this.staticUIcanvas.width / 2 - this.game.width / 2, 0, this.game.width, this.game.height);
    
        // Draw Lines & Keys
        this.linesNumber = this.game.mode === 1 ? 3 : 5;
        this.linesStart = this.staticUIcanvas.width / 2 - this.game.width / 2 + (this.game.width - this.linesNumber * 60 - this.linesNumber * this.game.linesGap) / 2;

        // Calculate Line Start for the tiles
        this.tilesStart = (this.game.width - (this.linesNumber - 1) * (this.game.linesGap + 60)) / 2;

        for (let i = 1; i <= this.linesNumber; i++) {
            // Line
            this.staticUI.fillStyle = this.colors.white;
            this.staticUI.fillRect(this.linesStart + (this.game.linesGap + 30) * i, 0, this.game.lineWidth, this.game.height - 140);

            // Circle
            this.staticUI.beginPath();
            this.staticUI.arc(this.linesStart + (this.game.linesGap + 30) * i, this.staticUIcanvas.height - 110, 30, 2 * Math.PI, false);
            this.staticUI.fillStyle = this.colors.transparent;
            this.staticUI.fill();
            this.staticUI.lineWidth = this.game.lineWidth;
            this.staticUI.strokeStyle = this.colors.white;
            this.staticUI.stroke();
        }

        // Draw Player's Score
        this.staticUI.fillStyle = this.colors.white;
        this.staticUI.font = "12px 'Montserrat', sans-serif";
        this.staticUI.fillText('Score', 40, 52);
        this.staticUI.fillText('Streak', 160, 52);
        this.staticUI.fillText('Multiplier', 280, 52);

        // Draw Progress background
        this.staticUI.fillStyle = this.colors.dark;
        this.staticUI.fillRect(40, this.game.height - 48, 300, 8);
    }

    drawUI () {
        // Track Score / Streak / Multiplier
        document.addEventListener('scoreChange', () => {
            this.updateScore();
        });

        // Track song's progress
        this.audio.addEventListener('timeupdate', (e) => {
            // Print recoreded tiles into console
            if (this.game.recordMode &&
                this.audio.currentTime >= this.audio.duration) {
                console.log(this.recordTiles);
            }

            if (this.lastTime !== Math.floor(this.audio.currentTime)) {
                this.lastTime = Math.floor(this.audio.currentTime);

                // Clear
                this.gameUI.clearRect(40, this.game.height - 100, 300, 100);
                

                // Draw Song's name
                this.gameUI.fillStyle = this.colors.white;
                this.gameUI.font = "12px 'Montserrat', sans-serif";
                this.gameUI.fillText(this.song.name, 40, this.game.height - 58);

                // Calculate duration
                let durationM = Math.floor(this.audio.duration / 60);
                let durationS = Math.floor(this.audio.duration % 60) < 10 ? '0' + Math.floor(this.audio.duration % 60) : Math.floor(this.audio.duration % 60);
                let duration = `${durationM}:${durationS}`;


                // Calculate currentTime and duration
                let currentTimeM = Math.floor(this.audio.currentTime / 60);
                let currentTimeS = Math.floor(this.audio.currentTime % 60) < 10 ? '0' + Math.floor(this.audio.currentTime % 60) : Math.floor(this.audio.currentTime % 60);
                let currentTime = `${currentTimeM}:${currentTimeS}`;

                // Print Text
                this.gameUI.save();
                this.gameUI.fillStyle = this.colors.white;
                this.gameUI.font = "12px 'Montserrat', sans-serif";
                this.gameUI.textAlign = "right";
                this.gameUI.fillText(`${currentTime} / ${duration}`, 340, this.game.height - 58);
                this.gameUI.restore();
            }
        });
    }

    drawFrame () {
        requestAnimationFrame(this.drawFrame);

        // Clear Canvas
        this.ctx.clearRect(0, 0, this.game.width, this.game.height);

        // Frames Counter
        let currentTime = Date.now();

        if (currentTime - this.lastFrames >= 1000) {
            this.lastFrames = currentTime;
            this.frames = this.ticks;
            this.ticks = 0;
        }

        this.ticks++;

        // Drawing tiles
        if (!this.game.recordMode) {
            this.song.tiles.forEach((tile, index) => {
                if (Math.round(this.audio.currentTime * 1000) >= tile.timer - Math.round(510 / 300) * 1000) {
                    this.ctx.beginPath();
                    this.ctx.arc(this.tilesStart + (tile.line - 1) * (30 + this.game.linesGap) + 30, tile.position, 20, 2 * Math.PI, false);

                    // Set proper color based on line
                    switch (tile.line) {
                        case 1:
                            this.ctx.fillStyle = this.colors.red;
                            break;
                        case 2:
                            this.ctx.fillStyle = this.colors.yellow;
                            break;
                        default:
                            this.ctx.fillStyle = this.colors.green;
                    }

                    this.ctx.fill();
                    this.ctx.lineWidth = 2;
                    this.ctx.strokeStyle = this.colors.dark;
                    this.ctx.stroke();

                    // Increase position
                    tile.position += this.game.speed;

                    // Check if it's not out of board
                    if (tile.position >= this.game.height - 60) {
                        this.song.tiles.splice(index, 1);

                        // User didn't hit the tile, streak is resseting
                        this.setStreak(0)

                        // Dispatch event
                        document.dispatchEvent(this.scoreChange);
                    };
                }
            });
        }
    }

    updateScore () {
         // Clear
         this.gameUI.clearRect(0, 0, this.gameUIcanvas.width, 200);

         // Draw Score
         this.gameUI.font = "700 24px 'Montserrat', sans-serif";
         this.gameUI.fillStyle = this.colors.white;
         this.gameUI.fillText(this.player.score, 40, 86);
         this.gameUI.fillText(this.player.streak, 160, 86);
         this.gameUI.fillText(`x ${this.player.multiplier}`, 280, 86);
    }

    setStreak (streak) {
        // Set Streak && Calculate multiplier
        this.player.streak = streak;
        this.player.multiplier = 1 + Math.floor(this.player.streak / 50);
    }

    activeKey (line) {
        let tileHit = false;

        this.song.tiles.forEach((tile, index) => {
            if (tile.position >= this.game.height - 140 && 
                tile.position <= this.game.height - 80 && 
                tile.line === line) {
                // Add score
                this.player.score += 10 * this.player.multiplier;

                // Add streak point
                this.setStreak(this.player.streak + 1);

                // Confirm that tile was hit
                tileHit = true;

                // Display special alerts

                // Remove tile
                this.song.tiles.splice(index, 1);

                // Dispatch event
                document.dispatchEvent(this.scoreChange);
            };
        });

        // Draw Circle
        this.gameUI.beginPath();
        this.gameUI.arc(this.linesStart + (this.game.linesGap + 30) * line, this.game.height - 110, 30 - this.game.lineWidth, 2 * Math.PI, false);

        if (!tileHit) {
            this.gameUI.fillStyle = this.colors.white;

            // User missed tile, combo is resseting
            this.setStreak(0);

            // Dispatch event
            document.dispatchEvent(this.scoreChange);
        } else {
            switch (line) {
                case 1:
                    this.gameUI.fillStyle = this.colors.red;
                    break;  
                case 2:
                    this.gameUI.fillStyle = this.colors.yellow;
                    break;  
                case 3:
                    this.gameUI.fillStyle = this.colors.green;
                    break;  
            }
        }

        this.gameUI.fill();
    }

    deactiveKey (line) {
        this.gameUI.clearRect(this.linesStart - 30 + (this.game.linesGap + 30) * line, this.game.height - 140, 60, 60);
    }
}

window.onload = () => {
    const Rock = new Game();

    Rock.init();
}