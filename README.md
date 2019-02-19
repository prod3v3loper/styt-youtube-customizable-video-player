# ***STYT*** - YouTube Customizable Video Player

![Language](https://img.shields.io/github/languages/top/prod3v3loper/styt-youtube-customizable-video-player.svg?style=flat "Language")
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cea6a0256b6541ec94c05e6068240d79)](https://www.codacy.com/app/prod3v3loper/styt-youtube-customizable-video-player?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prod3v3loper/styt-youtube-customizable-video-player&amp;utm_campaign=Badge_Grade)
![License](https://img.shields.io/github/license/prod3v3loper/styt-youtube-customizable-video-player.svg?style=flat "License")

> Customize the YouTube Player

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
