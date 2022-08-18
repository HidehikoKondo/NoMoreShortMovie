var timeoutId;
window.addEventListener("scroll", function () {
    // スクロールを停止して500ms後に終了とする
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        console.log("search!!!!!!!!");
        var ary = document.getElementsByClassName("gvxzyvdx");

        const ary2 = Array.prototype.slice.call(ary);
        ary2.forEach(function (element) {
            //            console.log(element.innerHTML);
            if (element.innerHTML == "リールとショート動画") {
                console.log("発見！！！！！");
                var parent = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                parent.remove();
            } else {

            }
        });
    }, 500);
});
