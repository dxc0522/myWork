
import box from './index'
import Vue from '../node_modules/vue';
$("#box").html(box.getTxt("新增内容"))
$("img").css({
    height:"200px",
    width:"100px"
})
new Vue()
var json=require("../config.json");
$("#json").html(JSON.stringify(json.data))