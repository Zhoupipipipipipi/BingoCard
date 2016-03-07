window.onload=initAll;               //页面加载后调用这个函数
var usedNums=new Array(76);          //定义可用的数字,全部为false

function initAll(){
	if(document.getElementById){            //检查浏览器是否可以使用
		document.getElementById('reload').onclick=anotherCard;
		newCard();
	}
	else 
		alert('Sorry,your browser does not support this script');
}

function newCard(){                //往表格中填写数字
	for(var i=0;i<24;i++)
		setSquare(i);
}

function setSquare(thisSquare){       //数字
	var currSquare="square"+thisSquare;           //squarei
	var colPlace=[0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4];
	var colBasis=colPlace[thisSquare]*15;
	var newNum;

	do{                             //如果newNum已存在，就+1
		newNum=colBasis+getNewNum()+1;
	}
	while(usedNums[newNum]);

	usedNums[newNum]=true;
	document.getElementById(currSquare).innerHTML=newNum;
	document.getElementById(currSquare).className='';           //确保Bingo卡片最初是空的
	document.getElementById(currSquare).onmousedown=toggleColor;        
}

function getNewNum(){           //得到数字
	return Math.floor(Math.random()*15);
}

function anotherCard(){
	for(var i=1;i<usedNums.length;i++){        //把已经用过的数字都改为false
		usedNums[i]=false;
	}

	newCard();
	return false;
}

function toggleColor(evt){
	if(evt){
		var thisSquare=evt.target;           //返回触发事件的函数
	}
	else{
		var thisSquare=window.event.srcElement;
	}
	if(thisSquare.className==''){
		thisSquare.className='pickedBG';
	}
	else{
		thisSquare.className='';
	}
}

