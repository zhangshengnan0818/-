/*top导航 我的聚美 begin*/
var myJM = document.getElementById("head_top_wdjm");
var subNav = document.getElementById("sub_nav");
myJM.onmouseenter = function () {
    subNav.style.display="block";
    myJM.style.backgroundColor = "white";
  /*  myJM.style.borderLeft="1px solid #ddd";
    myJM.style.borderRight="1px solid #ddd";
    myJM.style.borderBottom="1px solid white";*/
    myJM.style.height = "30px";
    animate(subNav, {height: 200, opacity: 1}, 200, 1)
};
myJM.onmouseleave = function () {
    myJM.style.backgroundColor = "#f2f2f2";
    /*myJM.style.borderLeft="1px solid #f2f2f2";
    myJM.style.borderRight="1px solid #f2f2f2";
    myJM.style.borderBottom="1px solid #f2f2f2"*/
    animate(subNav, {height: 0, opacity: 0}, 500, 1)
};
/*top导航 我的聚美 end*/
/*top导航 更多begin*/
var more = document.getElementById("more");
var headMore = document.getElementById("head_more");
more.onmouseenter = function () {
    headMore.style.display="block";
    more.style.height = "30px";
    more.style.backgroundColor = "white";
    animate(headMore, {height: 200, opacity: 1}, 200, 1)

};
more.onmouseleave = function () {
    /*headMore.style.display="none";*/
    more.style.backgroundColor = "#f2f2f2";
    animate(headMore, {height: 0, opacity: 0}, 500, 1)
};
var hLis=headMore.getElementsByTagName("li");
var sina=document.getElementById("sina");
hLis[2].onmouseenter=function(){
sina.style.display="block";
    sina.style.top="0px"

};
hLis[2].onmouseleave=function(){
    sina.style.display="none";
};
hLis[3].onmouseenter=function(){
    sina.style.display="block";
    sina.style.top="30px"
};
hLis[3].onmouseleave=function(){
    sina.style.display="none";
};
hLis[5].onmouseenter=function(){
    sina.style.display="block";
    sina.style.top="70px"
};
hLis[5].onmouseleave=function(){
    sina.style.display="none";
};
hLis[6].onmouseenter=function(){
    sina.style.display="block";
    sina.style.top="100px"
};
hLis[6].onmouseleave=function(){
    sina.style.display="none";
};
/*top导航 更多end*/
/*top导航 购物车 begin*/
 var buy=document.getElementById("head_center_cartbox");
 var content=document.getElementById("gwc");
var gwcText=document.getElementById("text");
 buy.onmouseenter=function(){
content.style.display="block";
     gwcText.style.backgroundColor="white";
     gwcText.style.borderWidth="2px";
 };
 buy.onmouseleave=function(){
 content.style.display="none";
     gwcText.style.backgroundColor="#f8f8f8";
 };
/*top导航 购物车 end*/
/*city select begin*/
var selCitys=document.getElementById("select-city").getElementsByTagName("a");
var tabCity=document.getElementById("tabcity");
var toCity=document.getElementById("city");
var boxCity=document.getElementById("head_top_box_tocity");
var cityList=document.getElementById("header-city-list");
var cityNum=document.getElementById("citynum");
cityNum.onmouseenter=function(){
    cityList.style.display="block";
    boxCity.style.backgroundColor="white";
    boxCity.style.borderLeft="1px solid #ddd";
    boxCity.style.borderRight="1px solid #ddd";
    boxCity.style.borderBottom="1px solid white";
    animate(cityList,{height:275,opacity:1},300,3)
};
cityNum.onmouseleave=function(){
    boxCity.style.backgroundColor="#f2f2f2";
    boxCity.style.borderLeft="1px solid #f2f2f2";
    boxCity.style.borderRight="1px solid #f2f2f2";
    boxCity.style.borderBottom="1px solid #f2f2f2"
    animate(cityList,{height:0,opacity:0},300,3);
};
for(var k=0;k<selCitys.length;k++){
    selCitys[k].n=k;
    selCitys[k].onclick=function(){
   tabCity.innerHTML=selCitys[this.n].innerHTML;
        for(var m=0;m<selCitys.length;m++){
            if(this.n!==m){
            selCitys[m].style.backgroundColor="white";
                selCitys[this.n].style.color="#999";}
        }
        selCitys[this.n].style.backgroundColor="#ed145b";
        toCity.innerHTML=selCitys[this.n].innerHTML;
    }
}

/*city select end*/
/*主导航 轮播图 begin*/
var box = document.getElementById("site_box");
var lis = box.getElementsByTagName("li");
var a = lis[0], n = 0;
var aIndex = document.getElementById("site_index").getElementsByTagName("a");

function auto() {
    n++;
    if (n >= 4) {
        n = 0;
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.zIndex = i == n ? 6 : 0;
    }
    cc(n);

    animate(lis[n], {opacity: 1}, 2000, 3, function () {
        for (var i = 0; i < lis.length; i++) {
            if (i != n) {
                animate(lis[i], {opacity: 0}, 0, 3);
            }
        }
    });
}
var timer = setInterval(auto, 3000);

function cc(n) {
    for (var i = 0; i < aIndex.length; i++) {
        aIndex[i].className = "";
        aIndex[n].className = "cc";
    }
};
for (var i = 0; i < aIndex.length; i++) {
    aIndex[i].x = i;
    aIndex[i].onclick = function () {
        clearInterval(timer);
        for (var j = 0; j < lis.length; j++) {
            lis[j].style.zIndex = j == this.x ? 6 : 0;
        }
        cc(this.x);
        window.n = this.x;
        animate(lis[n], {opacity: 1}, 2000, 3, function () {
            for (var k = 0; k < lis.length; k++) {
                if (k != n) {
                    animate(lis[k], {opacity: 0}, 0, 3);
                }
            }
        });
    };

}
box.onmouseover=function(){
    clearInterval(timer);
};
box.onmouseout=function(){
    window.timer = setInterval(auto, 3000);
};
/*主导航 轮播图 end*/

