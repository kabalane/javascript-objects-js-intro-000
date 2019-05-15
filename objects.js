var playlist = {
  artist:"AbdelHalim",
  song: "Gana El Hawa"
}
function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle;
}
function removeFromePlaylist(playlist, artistName){
 delete playlist.artistName;
}
