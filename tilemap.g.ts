// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. 2 . . . 2 2 2 2 . 
2 2 2 2 . . . . 2 . 
. . . 2 2 2 . 2 2 . 
. 2 2 2 . . . . 2 . 
. 2 . . . 2 2 . . . 
. 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . 2 . . . . . . 
. 2 . . . 2 . . 2 . 
. . . 2 . 2 . 2 . . 
. 2 . . . . . . 2 2 
2 . . . . . . . . 2 
. . 2 2 . . . 2 . . 
. 2 . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`0a0008000000000000000000000000010000000101000100000001000100000000000100000000000101000100000100010000000000000100000100010001000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. 2 . . . 2 2 . 2 . 
. . 2 . 2 . . . . . 
2 . . . . . 2 2 . 2 
. . 2 . 2 . . . . . 
. 2 . . 2 . 2 . 2 . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
