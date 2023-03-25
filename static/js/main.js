$(document).ready(function () {
  let currentAudio = null;
  $(".songs-row").on("click", function (event) {
    currentPlaySongIcon = $(this).find(".fa-solid");
    currentElementID = $(this).attr("id");

    audioId = "audio-" + currentElementID;

    audioElement = $(this).find("#" + audioId)[0];

    if (currentAudio != null && currentAudio != audioElement) {
      currentAudio.pause();

      $(".songs-row").each(function () {
        if ($(this).attr("id") != currentElementID) {
          $(this).find(".fa-solid").addClass("fa-play");
          $(this).find(".fa-solid").removeClass("fa-pause");
        }
      });
    }

    if (audioElement.paused) {
      audioElement.play();
      currentAudio = audioElement;
      currentPlaySongIcon.removeClass("fa-play");
      currentPlaySongIcon.addClass("fa-pause");
    } else {
      audioElement.pause();
      currentAudio = null;
      currentPlaySongIcon.addClass("fa-play");
      currentPlaySongIcon.removeClass("fa-pause");
    }
  });
});
