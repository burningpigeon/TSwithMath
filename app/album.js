import song from './song.js'

export default class Album {
    constructor(title, numOfSongs) {
        this.title = title;
        this.rating = 0;
        this.numOfSongs = numOfSongs;
        this.songs = []; // Array to store Song objects
    }

    addSong(songIn) {
        if (songIn instanceof song) {
            this.songs.push(song);
        } else {
            console.log("Only Song objects can be added.");
        }
    }

    calculateRating() {
        if (this.songs.length === 0) {
            return "No songs in album to rate.";
        }

        let sum = 0;
        this.songs.forEach(song => {
            sum += song.rating; 
        });

        let totalRating = sum / numOfSongs
        return totalRating.toFixed(2);
    }

    getTopSongs() {
        if (this.songs.length === 0) {
            return "No songs in album.";
        }

        let sortedSongs = [...this.songs].sort((a, b) => b.rating - a.rating);

        let topSongs = [];
        let rank = 1;
        let prevRating = null;
        let count = 0; // Track the number of top songs added

        for (let i = 0; i < sortedSongs.length; i++) {
            if (count >= 3 && sortedSongs[i].rating !== prevRating) {
                // Stop when we have at least 3 songs and the next rating is different
                break;
            }

            if (sortedSongs[i].rating !== prevRating) {
                rank = i + 1; 
            }

            topSongs.push(`${rank}. ${sortedSongs[i].title} - Rating: ${sortedSongs[i].rating}`);
            prevRating = sortedSongs[i].rating;
            count++;
        }

        return topSongs;
    }
}
