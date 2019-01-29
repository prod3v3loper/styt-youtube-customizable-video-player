# ***STYT*** - YouTube Customizable Video Player
> Customize the YouTube Player

![Preview of STYT](https://github.com/prod3v3loper/img/styt-youtube-customizable-video-player.png "Preview")

Add the html, the video id and to end of body the javascript file, play!

# Usage

Just copy this HTML snippet and add the video id of youtube to the `data-v` attribute.
```html
    <div class="st-yt">
        <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
        <div id="st-yt-player" data-v="THIEjxJAtA0"></div>
        <ul class="st-yt-control">
            <li>
                <div class="st-yt-control__play">Play</div>
            </li>
            <li>
                <div class="st-yt-control__stop">Stop</div>
            </li>
            <li>
                <div class="st-yt-control__pause">Pause</div>
            </li>
            <li>
                <div class="st-yt-control__mute">Mute</div>
            </li>
            <li>
                <div class="st-yt-control__unmute">Unmute</div>
            </li>
        </ul>
    </div>
```
And add the minifyed javascript file
```html
    <script src="js/styt.js" type="text/javascript"></script>
</body>
```

# Contribute

Please [file an issue](https://github.com/prod3v3loper/styt-youtube-customizable-video-player/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/prod3v3loper/styt-youtube-customizable-video-player/blob/master/LICENSE)