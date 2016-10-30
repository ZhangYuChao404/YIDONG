var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    loop : true,
    onSlideChangeEnd :function(swiper){
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var trueSlideNum = slides.length-2;
        var lastSlideNum  = trueSlideNum+1;
        [].forEach.call(slides,function(item,index){
            item.id = "";
            if(index == curIndex){
                switch (index){
                    case 0 :
                        item.id = "page"+ trueSlideNum;
                        break;
                    case lastSlideNum :
                        item.id = "page1";
                        break;
                    default  :
                        item.id = "page"+curIndex;
                }
            }
        })

    }
});
