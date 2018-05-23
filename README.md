# backgroundAudie

A method for making to run audio in the background

## Examples

```code
$("#test").backgroundAudio({
    autoplay: true,
    controls: false,
    buffered: false, // Start and End time in the console
    preload: false, // "auto" | "metadata" | "none"
    muted: true,
    loop: true,
    volume: "0.0", // 0.0 until 1.0
    notSupportedText: "Your browser does not support HTML5 audio.",
    settingID: "myAudio",
    mpeg: "path/to/mpeg-file",
    mp4: "path/to/mp4-file",
    webm: "path/to/webm-file",
    ogg: "path/to/ogg-file",
    wav: "path/to/quicktime-file",
    flac: "path/to/x-msvideo-file",
    track: false,
    track_src: "path/to/vvt-file",
    track_kind: "subtitle",
    track_srclang: "en",
    track_label: "test"
});
```