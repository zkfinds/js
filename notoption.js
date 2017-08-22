//可通过长时间未操作登出
(function() {
    var count = 0;
    var outTime = 1; //分钟
    function go() {
        count++;
        if (count == outTime * 60) {
            #to do 
            
            alert('您长时间未操作页面');
        }
    }
    //页面倒计时
    window.setInterval(go, 1000);
    //监听鼠标
    var x;
    var y;
    document.onmousemove = function(event) {
        /* Act on the event */
        var x1 = event.clientX;
        var y1 = event.clientY;
        if (x != x1 || y != y1) {
            count = 0;
        }
        x = x1;
        y = y1;
    };
    document.onkeydown = function(event) {
        count = 0;
    };
})();
