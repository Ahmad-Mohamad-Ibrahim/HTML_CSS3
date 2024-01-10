const getLivePosBtn = document.getElementById("getLivePos");
const clearWatchBtn = document.getElementById("clearWatch");
const bodyEl = document.querySelector('body');

let watchHandlerId = -1;
// let iframeEle = null;
let win = null;

getLivePosBtn.addEventListener('click', () => {
    if(watchHandlerId == -1) {
        // add watch handler
        watchHandlerId = navigator.geolocation.watchPosition(openLoc, error, {

        });
        // console.log(watchHandlerId);
    }

    else {
        // do nothing

    }
});
function error(e) {
    console.log(`error happend:  ${e.message}`);
}

function openLoc(position) {
    console.log(position);
    // add iframe
    // security issue with iframes
    // iframeEle = document.createElement('iframe');
    // iframeEle.src = `https://www.google.com/maps?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
    // bodyEl.insertAdjacentElement("beforeend" , iframeEle);
    win = open(`https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`, "_new",  "location=yes,width=600,height=600");
}

clearWatchBtn.addEventListener('click', () => {
    if(watchHandlerId > -1) {
        // clear handler
        navigator.geolocation.clearWatch(watchHandlerId);
        watchHandlerId = -1;
        win.close();
        win = null;
    }
    else {
        // no handler exists
    }
});


