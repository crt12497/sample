const openCameraButton = document.getElementById('openCamera');
const videoElement = document.getElementById('preview');

let scanner = new Instascan.Scanner({ video: videoElement });

openCameraButton.addEventListener('click', function() {
  Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
      videoElement.style.display = 'allow'; // Show the video element
    } else {
      console.error('No cameras found.');
    }
  }).catch(function(e) {
    console.error(e);
  });
});

scanner.addListener('scan', function(content) {
  alert('Scanned: ' + content);
});
