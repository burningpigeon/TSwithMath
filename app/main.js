import album from './album.js'
import song from './song.js'

// Albums

let debut = new album('Taylor Swift/Debut', 14)
let fearless = new album('Fearless', 26)
let speakNow = new album('Speak Now', 22)
let red = new album('Red', 30)
let TV1989 = new album('1989', 21)
let reputation = new album('Reputation', 15)
let lover = new album('Lover', 18)
let folklore = new album('Folklore', 17)
let evermore = new album('Evermore', 17)
let midnights = new album('Midnights', 20)
let ttpd = new album('The Tortured Poets Department', 31)

// Debut

let timMcgraw = new song ('Tim McGraw')
let pictureToBurn = new song ('Picture To Burn')
let teardropsOnMyGuitar = new song ('Teardrops On My Guitar')
let aPlaceInThisWorld = new song('A Place in this World')
let coldAsYou = new song('Cold as You')
let theOutside = new song('The Outside')
let tiedTogetherWithASmile = new song('Tied Together with a Smile')
let stayBeautiful = new song('Stay Beautiful')
let shouldveSaidNo = new song('Shouldve Said No')
let marysSong = new song ('Marys Song')
let ourSong = new song ('Our Song')
let imOnlyMeWhenImWithYou = new song('Im Only Me When Im With you')
let invisible = new song('Invisible')
let aPerfectlyGoodHeart = new song('A Perfectly Good Heart')

let debutSongs = [timMcgraw, pictureToBurn, teardropsOnMyGuitar, aPlaceInThisWorld, coldAsYou, theOutside, tiedTogetherWithASmile,
stayBeautiful, shouldveSaidNo, marysSong, ourSong, imOnlyMeWhenImWithYou, invisible, aPerfectlyGoodHeart]

debutSongs.forEach(song => debut.addSong(song));
