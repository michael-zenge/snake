scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    colInc = 0
    linInc = -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    colInc = -1
    linInc = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    colInc = 1
    linInc = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    colInc = 0
    linInc = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    snakeTail = sprites.create(img`
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        `, SpriteKind.Player)
    snakeTail.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(snakeTail, tiles.getTileLocation(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row))
    listSnake.unshift(snakeTail)
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(randint(1, 10), randint(1, 8)))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    game.over(false)
})
let snakeTail: Sprite = null
let colInc = 0
let linInc = 0
let listSnake: Sprite[] = []
listSnake = []
tiles.setCurrentTilemap(tilemap`level1`)
let snakeHead = sprites.create(img`
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(snakeHead)
listSnake.unshift(snakeHead)
let myFood = sprites.create(img`
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    `, SpriteKind.Food)
tiles.placeOnTile(myFood, tiles.getTileLocation(randint(1, 10), randint(1, 8)))
linInc = 0
colInc = 1
game.onUpdateInterval(350, function () {
    for (let index = 0; index <= listSnake.length; index++) {
        if (index == listSnake.length - 1) {
            break;
        }
        tiles.placeOnTile(listSnake[index], tiles.getTileLocation(listSnake[index + 1].tilemapLocation().column, listSnake[index + 1].tilemapLocation().row))
        listSnake[index].setFlag(SpriteFlag.Ghost, false)
    }
    tiles.placeOnTile(snakeHead, tiles.getTileLocation(snakeHead.tilemapLocation().column + colInc, snakeHead.tilemapLocation().row + linInc))
})
