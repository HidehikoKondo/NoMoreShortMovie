//削除する要素のクラス名と何世代上の親を削除するかのパラメータを取得
const URL = 'https://udonko.net/nomoreshortmovie.json';
var classname = "";
var parentnumber = 1;
fetch(URL)
    .then(response => response.json())
    .then(responseData => {
        classname = responseData.classname;
        parentnumber = Number(responseData.parent);
    });


// 親要素の削除処理
var timeoutId;
var parent;
window.addEventListener("scroll", function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        console.log("search!!");
        // console.log(classname);
        // console.log(parentnumber);


        //リールとショート動画と書かれた要素のクラスを指定
        var ary = document.getElementsByClassName(classname);

        const ary2 = Array.prototype.slice.call(ary);
        ary2.forEach(function (element) {
            if (element.innerHTML == "リール") {
                console.log("delete ShortMovie!!");

                // n世代上の親を削除
                parent = element.parentNode;
                for (var i = 0; i < parentnumber; i++) {
                    parent = parent.parentNode;
                }
                parent.remove();
            } else {
            }
        });
    }, 100);
});
