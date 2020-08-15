AFRAME.registerComponent('video2-handler', {
    init: function() {
        var marker = this.el;
        
        this.video = document.querySelector("#video2");

        marker.addEventListener('markerFound', function() {
            this.video.play();
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            this.video.pause();
        }.bind(this));
    }
});