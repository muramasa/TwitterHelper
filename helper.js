(function() {
    function installEvent() {
        var target = document.getElementById('new-tweets-bar');
        if (target) {
            target.addEventListener('mousedown', markAsRead, false);
        }
    }

    function markAsRead() {
        var items = document.getElementsByClassName('stream-item');
        for (var i = 0, l = items.length; i < l; i++) {
            items[i].style.opacity = 0.5;
        }
    }

    document.addEventListener("DOMNodeInserted", installEvent, false);
})();
// vim:set ts=4 sw=4 expandtab: