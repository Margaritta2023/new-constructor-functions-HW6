function Playlist(){
    
    this.playList = [];
    this.currentIndex = 0;
}

function Song(title, artist) {

    this.title = title;
    this.artist = artist;
    this.isplaying = false;

}

Playlist.prototype.add = function (song) {
    this.playList.push(song)
}

Playlist.prototype.play = function () {
    this.playList[this.currentIndex].isplaying = true;
    return `${ this.playList[this.currentIndex].title} started to play`
    }

Playlist.prototype.stop = function () {
    this.playList[this.currentIndex].isplaying = false
    return `${ this.playList[this.currentIndex].title} stopped to play`
    }

Playlist.prototype.next = function () {
  
    this.playList[this.currentIndex].isplaying = false
    let previousSongName = this.playList[this.currentIndex].title;
    if(this.currentIndex === this.playList.length - 1)  {
        this.currentIndex = 0
    }
    else {
        this.currentIndex++
    };
    this.playList[this.currentIndex].isplaying = true;
    return `${previousSongName } stopped,${ this.playList[this.currentIndex].title} started`
        
     }

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const clocks = new Song("Clocks", "Coldplay");
playlist.add(heyJude);
playlist.add(jaded);
playlist.add(clocks);
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Clocks started
console.log(playlist.next()); // Clocks stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
