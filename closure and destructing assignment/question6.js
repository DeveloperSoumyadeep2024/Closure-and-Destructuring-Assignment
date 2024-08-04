// Task 1: Create a function to create a playlist
function createPlaylist(playlistName) {
    const songs = []; // Private array to store songs for this playlist

    // Return an object with methods to add and list songs
    return {
        // Task 2: Function to add a song to the playlist
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },

        // Task 3: Function to list all songs in the playlist
        listSongs: function() {
            return songs.slice(); // Return a copy of the songs array
        }
    };
}

// Create playlists
const rockPlaylist = createPlaylist('Rock Classics');
const jazzPlaylist = createPlaylist('Jazz Favorites');

// Add songs to the playlists
rockPlaylist.addSong('Bohemian Rhapsody', 'Queen');
rockPlaylist.addSong('Hotel California', 'Eagles');
jazzPlaylist.addSong('So What', 'Miles Davis');
jazzPlaylist.addSong('Take Five', 'Dave Brubeck');

// List songs in the playlists
console.log('Rock Classics Playlist:', rockPlaylist.listSongs());
console.log('Jazz Favorites Playlist:', jazzPlaylist.listSongs());
