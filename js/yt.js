/**
 * YouTube iFrame API
 * 
 * @author      Samet Tarim
 * @copyright   (c) 2016, Samet Tarim
 * @link        https://www.tando.com/
 * @package     MelAbu
 * @subpackage  YouTube Player API
 * @since       1.0
 * @see         https://developers.google.com/youtube/iframe_api_reference
 * @see         https://developers.google.com/youtube/player_parameters
 */
var _MBTYouTubeAPI = {
    name: "MBT YouTube Player API",
    player: null,
    videoID: "",
    /**
     * 2. This code loads the IFrame Player API code asynchronously. And set the eventlisteners
     */
    __init: function () {

        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/player_api";

        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        _MBTYouTubeAPI.__event();
    },
    /**
     * Set all events
     */
    __event: function () {

        var played = document.querySelector(".st-yt-control__play");
        played.addEventListener("click", _MBTYouTubeAPI.play, false);

        var stoped = document.querySelector(".st-yt-control__stop");
        stoped.addEventListener("click", _MBTYouTubeAPI.stop, false);

        var paused = document.querySelector(".st-yt-control__pause");
        paused.addEventListener("click", _MBTYouTubeAPI.pause, false);

        var muted = document.querySelector(".st-yt-control__mute");
        muted.addEventListener("click", _MBTYouTubeAPI.mute, false);

        var unmuted = document.querySelector(".st-yt-control__unmute");
        unmuted.addEventListener("click", _MBTYouTubeAPI.unmute, false);
    },
    getVideoID: function () {
        return document.getElementById("st-yt-player").getAttribute("data-v");
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#playVideo
     */
    play: function () {
        _MBTYouTubeAPI.player.playVideo();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#pauseVideo
     */
    pause: function () {
        _MBTYouTubeAPI.player.pauseVideo();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#mute
     */
    mute: function () {
        _MBTYouTubeAPI.player.mute();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#unmute
     */
    unmute: function () {
        _MBTYouTubeAPI.player.unMute();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#ismuted
     */
    ismuted: function () {
        _MBTYouTubeAPI.player.isMuted();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#stopVideo
     */
    stop: function () {
        _MBTYouTubeAPI.player.stopVideo();
        clear();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#playVideo
     */
    clear: function () {
        _MBTYouTubeAPI.player.clearVideo();
    },
    /**
     * @see https://developers.google.com/youtube/iframe_api_reference#getPlayerState
     * @returns {boolean}
     */
    state: function () {
        return _MBTYouTubeAPI.player.getPlayerState();
    },
    /**
     * 4. The API will call this function when the video player is ready.
     * @param {type} event
     */
    onPlayerReady: function (event) {

        console.log("YouTube Player is now ready" + event);
        _MBTYouTubeAPI.mute();
    },
    /**
     * 5. The API calls this function when the player's state changes.
     * @see https://developers.google.com/youtube/iframe_api_reference#onStateChange
     * @param {type} event
     */
    onPlayerStateChange: function () {

        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.

        if (event.data === YT.PlayerState.ENDED) {

        } else if (event.data === YT.PlayerState.PLAYING) {

        } else if (event.data === YT.PlayerState.PAUSED) {

        } else if (event.data === YT.PlayerState.BUFFERING) {

        } else if (event.data === YT.PlayerState.CUED) {

        }
    },
    onPlayerError: function (errors) {
        // Error output
    }
};

/**
 * 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
 */
function onYouTubeIframeAPIReady() {

    _MBTYouTubeAPI.videoID = _MBTYouTubeAPI.getVideoID();
    // Set youtube player
    _MBTYouTubeAPI.player = new YT.Player("st-yt-player", {
        videoId: _MBTYouTubeAPI.videoID,
        playerVars: {
            "autoplay": 1,
            "controls": 0,
            "rel": 0,
            "theme": "dark",
            "enablejsapi": 0,
            "modestbranding": 1,
            "autohide": 1,
            "loop": 1
        },
        events: {
            "onReady": _MBTYouTubeAPI.onPlayerReady,
            "onStateChange": _MBTYouTubeAPI.onPlayerStateChange,
            "onError": _MBTYouTubeAPI.onPlayerError
        }
    });
}

_MBTYouTubeAPI.__init();