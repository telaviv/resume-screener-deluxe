var startGame = function() {
    Crafty.init(640, 400, "crafty-resume-screener-deluxe");
    Crafty.scene('StartScene');
};

Crafty.scene('StartScene', function() {
    Crafty.e('Screen');
});

Crafty.c('Screen', {
    init: function() {
        this.requires('2D, DOM, Color');
        this.attr({x: 0, y: 0, w: 640, h: 400});
        this.color('red');
    }
});
