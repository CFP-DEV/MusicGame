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
        //this.drawFrame = this.drawFrame.bind(this);
        //this.drawUI = this.drawUI.bind(this);
    }

    init () {
        // Draw Static UI
        this.drawStaticUI();
    }

    drawStaticUI () {
        // Init Canvas
        this.staticUIcanvas = document.getElementById('gameUI');
        this.staticUI = this.staticUIcanvas.getContext('2d');

        // Canvas height & width
        this.staticUIcanvas.height = this.game.height;
        this.staticUIcanvas.width = this.game.width;

        // Calculate gap between lines
        this.linesGap = (this.staticUIcanvas.width - this.game.linesNumber * this.game.lineWidth) / (this.game.linesNumber + 1); 

        // Draw Background
        this.staticUI.fillStyle = "#000000";
        this.staticUI.fillRect(0, 0, this.staticUIcanvas.width, this.staticUIcanvas.height);

        // Draw Lines
        for (let i = 1; i <= this.game.linesNumber; i++) {
            // Line
            this.staticUI.fillStyle = "#FFFFFF";
            this.staticUI.fillRect(i * this.linesGap, 0, this.game.lineWidth, this.staticUIcanvas.height - 90);
            this.staticUI.fillRect(i * this.linesGap, this.staticUIcanvas.height - 30, this.game.lineWidth, this.staticUIcanvas.height);    
        }

        // Draw Player's Info

        // Draw Song's Info
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded!');

    // Init Game
    const RockMania = new Game();
    RockMania.init();
});