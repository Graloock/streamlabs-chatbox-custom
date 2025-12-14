let isEven = false;

// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event

    const messageId = obj.detail.messageId;
    const message = document.querySelector(`[data-id="${messageId}"]`);
    const meta = message.querySelector(".meta");


    message.classList.add(isEven ? "right" : "left");
    meta.classList.add(isEven ? "meta-right" : "meta-left");
    isEven && meta.insertBefore(meta.lastElementChild, meta.children[0]);
    isEven = !isEven;
});