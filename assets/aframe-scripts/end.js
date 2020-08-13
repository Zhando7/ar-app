AFRAME.registerComponent('another-videohandler', {
    init: function () {
        var marker = this.el;
        this.vid = document.querySelector("#another-vid");

        marker.addEventListener('markerFound', function () {
            this.toggle = true;
            this.vid.play();
        }.bind(this));

        marker.addEventListener('markerLost', function () {
            this.toggle = false;
            this.vid.pause();
        }.bind(this));
    },
});