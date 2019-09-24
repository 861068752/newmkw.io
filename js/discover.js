$(function(){
    slider();
    swiper();
})

//轮播图
function slider(){
    $(window).on('resize',function(){
        //获取浏览器窗口宽度
        var width = $(window).width();
        if(width<768){
            var isMobile = true;
        }else{
            var isMobile = false;
        }
        //作为小，中，大屏幕的背景图数据和作为超小屏幕的图片数据在json中
        var json = [
            {
                bac:"url(img/discover-1.jpg)",
               
            },
            {
                bac:"url(img/discover-2.jpg)",
               
            },
            {
                bac:"url(img/discover-3.jpg)",
             
            },
           
        ];
        //var data = {"json":json,"isMobile":isMobile} //es5写法
        var data = {json,isMobile};//es6语法
        var html = template("slider",data);//可以得到编译好的纯html
        //选中slider的容器,并渲染
        $("#inner").html(html);

        //bootstrap的轮播图没有滑动功能，自己添加
        var isMove = false;
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;


        $("#inner").on("touchstart",function(e){
            startX = e.originalEvent.touches[0].clientX;
        });
        $("#inner").on("touchmove",function(e){
            moveX = e.originalEvent.touches[0].clientX;
            isMove = true;
        });
        $("#inner").on("touchend",function(e){
            distanceX = moveX - startX;
            if(isMove){
                if(distanceX>0){
                    //前一张
                    $("#carousel-example-generic").carousel('prev');
                }else if(distanceX<0){
                    //后一张
                    $("#carousel-example-generic").carousel('next');
                }
            }
            //滑动完成后把所有值重置回初始值
            isMove = false;
            startX = 0;
            moveX = 0;
            distanceX = 0;
        });
    }).trigger("resize")
}

//滑动
function swiper(){
    var $parent = $(".wjs_product_tabs_parent");
    var $ul = $parent.find("ul");
    var $lis = $ul.find("li");
    var sum = 0;
    //index表示遍历到的li的索引，item表示遍历到的哪个li(Dom)
    $lis.each(function(index,item){
        sum+=$(item).innerWidth();
    })
    $ul.width(sum);
    wjs.iScroll({
        swipeDom:$parent[0],
        swipeType:"x",
        swipeDistance:20
    })

}