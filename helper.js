/*辅助函数*/

/**
 * 函数使指定标签下的子标签隔行改变背景色
 * @param id 主体对象的id
 * @param oddColor 奇数行颜色
 * @param evenColor 偶数行颜色
 */
function lineCgColor(id,oddColor,evenColor) {
    var obj = document.getElementById(id); //隔行换色主体对象
    var name; //主体标签下的子标签名

    /*若不指定奇数行颜色，则默认颜色为白色*/
    if(oddColor === undefined){
        oddColor = "white";
    }

    /*若不指定偶数数行颜色，则默认颜色为白色*/
    if(evenColor === undefined){
        evenColor = "white";
    }

    /*判断获取的是什么类型的标签对象*/
    var tag = obj.tagName; //获取标签名
    if(tag === "TABLE"){
        name = "tr";
    }else if(tag === "UL"){
        name = "li"
    }else{
        return; //若主体对象无子标签，则不做任何效果
    }

    var objs = obj.getElementsByTagName(name); //隔行换色对象
    for(var i=0; i<objs.length; i++){
        if(i%2){
            objs[i].style.backgroundColor = evenColor;
        }else{
            objs[i].style.backgroundColor = oddColor;
        }
    }
}