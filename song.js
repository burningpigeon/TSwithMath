export default class Song {
    constructor(title) {
        this.title = title
        this.rating = 0
    }

    setRating(ratingIn){
        this.rating = ratingIn
    }
}