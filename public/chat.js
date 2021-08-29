var socket = io.connect(window.location.href);
 
let joinButton = document.getElementById("join");
let userVideo = document.getElementById("user-video");
let peerVideo = document.getElementById("peer-video");
let creator = false;
let rtcPeerConnection;
let userStream;
let roomnumber = 1010;
let iceServers = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com"},
    { urls: "stun:stun.l.google.com:19302"},
  ],
};

joinButton.addEventListener("click", function () {

    socket.emit("join", roomnumber);
    console.log("영통시작")
  
});


socket.on("created", function () {
  creator = true;
  console.log("크리에이트시작")


  navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: { width: 300 },
    })
    .then(function (stream) {
      userStream = stream;
      userVideo.srcObject = stream;
      userVideo.onloadedmetadata = function (e) {
        userVideo.play();
      };
    })
    .catch(function (err) {
    });
});


socket.on("joined", function () {
  creator = false;
  console.log("조인드시작")

  navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: { width: 300 },
    })
    .then(function (stream) {
      userStream = stream;
      userVideo.srcObject = stream;
      userVideo.onloadedmetadata = function (e) {
        userVideo.play();
      };
      socket.emit("ready", roomnumber);
    })
    .catch(function (err) {
      alert("Couldn't Access User Media");
    });
});


socket.on("full", function () {
  alert("Room is Full, Can't Join");
});


socket.on("ready", function () {
  console.log("레디시작")

  if (creator) {
    rtcPeerConnection = new RTCPeerConnection(iceServers);
    rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
    rtcPeerConnection.ontrack = OnTrackFunction;
    rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream);
    rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream);
    rtcPeerConnection
      .createOffer()
      .then((offer) => {
        rtcPeerConnection.setLocalDescription(offer);
        socket.emit("offer", offer, roomnumber);
      })

      .catch((error) => {
        console.log(error);
      });
  }
});


socket.on("candidate", function (candidate) {
  console.log("칸디데이트시작")

  let icecandidate = new RTCIceCandidate(candidate);
  rtcPeerConnection.addIceCandidate(icecandidate);
});


socket.on("offer", function (offer) {
  console.log("오퍼시작")

  if (!creator) {
    rtcPeerConnection = new RTCPeerConnection(iceServers);
    rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
    rtcPeerConnection.ontrack = OnTrackFunction;
    rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream);
    rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream);
    rtcPeerConnection.setRemoteDescription(offer);
    rtcPeerConnection
      .createAnswer()
      .then((answer) => {
        rtcPeerConnection.setLocalDescription(answer);
        socket.emit("answer", answer, roomnumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});


socket.on("answer", function (answer) {
  console.log("엔서시작")

  rtcPeerConnection.setRemoteDescription(answer);
});


function OnIceCandidateFunction(event) {
  console.log("온아이스칸디데이트시작")

  console.log("Candidate");
  if (event.candidate) {
    socket.emit("candidate", event.candidate, roomnumber);
  }
}


function OnTrackFunction(event) {
  console.log("온트랙펑션시작")

  peerVideo.srcObject = event.streams[0];
  peerVideo.onloadedmetadata = function (e) {
    peerVideo.play();
  };
}
