sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    helado.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let helado: Sprite = null
scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
helado = sprites.create(img`
    ............3333bb..bb33333.....
    ........3bb31111d3b311d111d33...
    .......3bdd11111dbd11d11111113..
    .......bdddd1111bd11d111dd11113.
    ......3d111dd111b11d111dd33d11d3
    ......3d11111dd1d11d111d11d33113
    ....bb3d111111dd13dd111d1dd3b31b
    ...b3d3dd111111dd13dd11d1dddbbdb
    ...3ddd31d111111dd133dddddddb.b.
    ..311111d1ddd1111dd11dddddd33...
    ..3111111d111dd111dd1111dd3313..
    ..bddd1111ddd11dd111d111111113..
    ..311ddd111dddd11dd11ddd1111ddb.
    ..31111dd111dddd11dd111dddddddb.
    ...bd1111d1113ddd11dd1111111d3b.
    ...4dd1111d1113ddd11ddd111d333b.
    ..4dbdddd11d11133ddddddddddddb..
    .4ddbddddd11d111d33ddddddddd3b..
    .4dddb11ddd11dd111d333dddd3bb...
    .4dd55b111d11dd11111d3333bbb....
    .445555b111d11dddd111111ddb.....
    .4455555bd1d311ddddddddddd3.....
    .45455555bb1d3111ddddddd113.....
    .4554555555b333d1111111113......
    455554555555bbb33d11111d33......
    4d555545555555dbbb3d11d33.......
    4dd5555455555ddddd43333.........
    45dd555544ddddddd4..............
    .45dd5555d44dddd4...............
    ..45dd55dddd4444................
    ...45dd55444....................
    ....44444.......................
    `, SpriteKind.Food)
