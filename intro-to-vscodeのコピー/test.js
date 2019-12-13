
var move_flg = "";
var move_start_x = 0;
var move_start_y = 0;
var CountBox = 0;
var PartsspaceChecker = "OK";


box.onclick = function(e){
  CountBox++;
  for(var n=1; n<19; n++){
    var Pnum = "Ps"+n;
    var Pclass = document.getElementById(Pnum);
  if(Pclass.classList.contains("PsIN")){
    continue;
  }else{
    PsNO = Pnum;
    Pclass.classList.add("PsIN");
    break;
  }
}
  if(n == "19"){
    alert("まな板がいっぱいです！！！");
    PartsspaceChecker = "OUT";
  }
  var elem = document.createElement('div');
  var elemspan = document.createElement('span');
  function objcopy(Ps0) {
    elem.id = "PsID"+CountBox;
    elem.style="width:100%;height:100%;position:absolute;top:0;left:0;";
    elemspan.style="position:absolute;width:100%;height:100%;z-index:2;top:0;left:0;";
    document.getElementById(Ps0).appendChild(elem);
    document.getElementById(Ps0).appendChild(elemspan);
    }
  var PsName = e.target.parentNode.id;

  if(PartsspaceChecker == "OK"){
    switch(PsName){
      case "PsST":
        var img1 = document.createElement('img');
        img1.src = 'img/strawberry.png';
        img1.style="width:100%";
        elem.appendChild(img1);
        objcopy(PsNO);
        break;

      case "PsPE":
        var img2 = document.createElement('img');
        img2.src = 'img/peach1.png';
        img2.style="width:100%";
        elem.appendChild(img2);
        objcopy(PsNO);
        break;

      case "PsBL":
        var img3 = document.createElement('img');
        img3.src = 'img/blueberry.png';
        img3.style="width:100%";
        elem.appendChild(img3);
        objcopy(PsNO);
        break;

      case "PsMI":
        
        var img4 = document.createElement('img');
        img4.src = 'img/mint1.png';
        img4.style="width:100%";
        elem.appendChild(img4);
        objcopy(PsNO);
        break;

      case "PsMIMI":
        var img5 = document.createElement('img');
        img5.src = 'img/mint2.png';
        img5.style="width:100%";
        elem.appendChild(img5);
        objcopy(PsNO);
        break;

      case "PsKI":
        var img6 = document.createElement('img');
        img6.src = 'img/kinoko.png';
        img6.style="width:100%";
        elem.appendChild(img6);
        objcopy(PsNO);
        break;

      case "PsCho":
        var img7 = document.createElement('img');
        img7.src = 'img/chocorose.png';
        img7.style="width:100%";
        elem.appendChild(img7);
        objcopy(PsNO);
        break;

        case "PsWhi":
          var img8 = document.createElement('img');
          img8.src = 'img/whip.png';
          img8.style="width:100%";
          elem.appendChild(img8);
          objcopy(PsNO);
          break;
    }
  }
    label.innerHTML=(n);
    label2.innerHTML=(Pnum);
}

partsspace.onmousedown = function(e) {
    move_flg = "true";
    var obj = e.target.previousElementSibling;
    var objMom = e.target.parentNode;
    var protector = e.target;
    move_start_x = e.clientX - parseInt(obj.style.left.replace("px",""));
    move_start_y = e.clientY - parseInt(obj.style.top.replace("px",""));
    move_start_x = e.clientX - parseInt(protector.style.left.replace("px",""));
    move_start_y = e.clientY - parseInt(protector.style.top.replace("px",""));

document.onmousemove = function(e) {
  if(move_flg == "true") {
    obj.style.left = (e.clientX - move_start_x) + "px";
    obj.style.top = (e.clientY - move_start_y) + "px";   
    protector.style.left = (e.clientX - move_start_x) + "px";
    protector.style.top = (e.clientY - move_start_y) + "px";
  if(obj.style.left!=0 && obj.style.top!=0){
    objMom.classList.remove("PsIN");
  }
  }
}
document.onmouseup = function(e) {
  move_flg = "false";
  if(PartsspaceChecker == "OUT"){
    PartsspaceChecker = "OK";
  }
}
}
