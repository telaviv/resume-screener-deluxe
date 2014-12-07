var startGame = function() {
    Crafty.init(640, 400, "crafty-resume-screener-deluxe");
    Crafty.scene('StartScene');
};

Crafty.scene('StartScene', function() {
    Crafty.e('Screen');
});

Crafty.c('Screen', {
    init: function() {
        this.requires('2D, DOM, Image, Stage');
        this.attr({x: 0, y: 0, w: 640, h: 400});
        this.attach(Crafty.e('Resume'));
        this.image('img/background.png');
    }
});

Crafty.c('Window', {
    init: function() {
        this.requires('2D, DOM, Color');
        this.attr({x: 40, y: 40, w: 400, h: 300});
        this.color('white');
    }
});

Crafty.c('Resume', {
    init: function() {
        this.requires('Window');
        this.attach(this._createName());
    },

    _createName: function() {
        return Crafty.e("2D, DOM, Text").attr({
            x: this.x + 40, y: this.y + 40, w: this.w
        }).text(NAMES[0]).textColor('black').textFont({size: '15px'});
    }
});


var NAMES = ['John Smith'];
var PROGRAMMING_LANGUAGES = ['python'];
var SCHOOLS = ['UC Berkeley'];
