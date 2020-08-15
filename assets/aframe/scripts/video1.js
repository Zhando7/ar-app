AFRAME.registerComponent('video1-handler', {
    init: function () {
        var marker = this.el;
        this.video = document.querySelector("#video1");

        marker.addEventListener('markerFound', function () {
            this.video.play();
        }.bind(this));

        marker.addEventListener('markerLost', function () {
            this.video.pause();
        }.bind(this));
    },
});