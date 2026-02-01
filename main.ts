namespace SpriteKind {
    export const powerUp = SpriteKind.create()
}
function youreIt () {
    it.sayText("It", 2000, false)
    it.setKind(SpriteKind.Enemy)
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    it.sayText("", 2000, false)
    it = sprite
    otherSprite.setKind(SpriteKind.Player)
    youreIt()
})
let it: Sprite = null
// This shows text at the beginning of the game
game.showLongText("Welome to Tag, once all of your friends are connected, press A to continue", DialogLayout.Center)
// This will be the next page
game.showLongText("There will be a 60 second timer and one person will randomly be assigned as \"IT\". Once the 60 second timer is up, the person that is it will lose.", DialogLayout.Center)
// changes the map to the tile map we created
tiles.setCurrentTilemap(tilemap`level4`)
// these are all the characters
let sprites2 = [
sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player),
sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b f 4 4 4 4 4 e e b b f . 
    . . f e f b d d d e 4 4 4 f . . 
    . . e 4 c d d d d e 4 4 e f . . 
    . . e f b b d b d d e e f . . . 
    . . . f f 1 1 d 1 d 1 f f . . . 
    . . . . . f b b f f f . . . . . 
    `, SpriteKind.Player),
sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player),
sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
]
// this allows the sprites to be moved by the different players
for (let value of mp.allPlayers()) {
    mp.setPlayerSprite(value, sprites2[mp.playerToIndex(value)])
    mp.moveWithButtons(value, mp.getPlayerSprite(value))
    mp.getPlayerSprite(value).setStayInScreen(true)
}
// where the players start
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(5, 15)
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(155, 15)
mp.getPlayerSprite(mp.PlayerNumber.Three).setPosition(5, 105)
mp.getPlayerSprite(mp.PlayerNumber.Four).setPosition(155, 105)
it = sprites2._pickRandom()
info.startCountdown(60)
youreIt()
