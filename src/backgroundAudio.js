(function ($) {

    $.fn.backgroundAudio = function (options) {

        var settings = $.extend({
            autoplay: true,
            controls: false,
            buffered: false, // Start and End time in the console
            preload: false, // "auto" | "metadata" | "none"
            muted: true,
            loop: true,
            volume: "1.0", // 0.0 until 1.0
            notSupportedText: "Your browser does not support HTML5 video.",
            settingID: "myAudio",
            mpeg: "path/to/mpeg-file",
            mp4: "path/to/mp4-file",
            webm: "path/to/webm-file",
            ogg: "path/to/ogg-file",
            wav: "path/to/wav-file",
            flac: "path/to/rtf-file",
            track: false,
            track_src: "path/to/vvt-file",
            track_kind: "subtitle",
            track_srclang: "en",
            track_label: "test"

        }, options);

        this.append('<video id=' + settings.settingID + '></video>');

        if (settings.autoplay == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('autoplay', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('autoplay');
        
        }

        if (settings.controls == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('controls', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('controls');
        
        }

        if (settings.buffered == true) {
            
            console.log("Start: " + document.getElementById('' + settings.settingID + '').buffered.start(0) + ", End: " + document.getElementById('' + settings.settingID + '').buffered.end(0));
        
        } else {
            
            console.log("Buffered is does not set.");
        
        }

        if (settings.preload != true || settings.preload != false || settings.preload != "" || settings.preload != "none") {
            
            document.getElementById('' + settings.settingID + '').setAttribute('preload', '' + settings.preload + '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('preload');
        
        }

        if (settings.muted == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('muted', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('muted');
        
        }

        if (settings.loop == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('loop', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('loop');
        
        }

        if (settings.volume != "" || settings.volume != "none") {
            
            document.getElementById('' + settings.settingID + '').setAttribute('volume', '' + settings.volume + '');
        
        } else {

            document.getElementById('' + settings.settingID + '').removeAttribute('volume');

        }
        
        if (settings.notSupportedText != true || settings.notSupportedText != false || settings.notSupportedText != "" || settings.notSupportedText != "none") {
            
            $('#' + settings.settingID + '').append('' + settings.notSupportedText + '');

        } else {

            $('#' + settings.settingID + '').append("");

        }

        if (settings.mpeg != "" || settings.mpeg != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.mpeg + " type='audio/mpeg'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.mp4 != "" || settings.mp4 != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.mp4 + " type='audio/mp4'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.webm != "" || settings.webm != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.webm + " type='audio/webm'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.ogg != "" || settings.ogg != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.ogg + " type='audio/ogg'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.wav != "" || settings.wav != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.wav + " type='audio/wav'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.flac != "" || settings.flac != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.flac + " type='audio/flac'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.track == true) {
            
            $("#" + settings.settingID + "").append("<track src=" + settings.track_src + " kind=" + settings.track_kind + " srclang=" + settings.track_srclang + " label=" + settings.track_label + ">");
        
        } else {
            
            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");
        
        }

        $("#" + settings.settingID + "").css({ "position": "fixed", "top": "0", "left": "0", "min-width": "100%", "min-height": "100%" });

    };

}(jQuery));