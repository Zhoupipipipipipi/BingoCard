window.onload=initAll;
var usedCard=new Array(76);

function initAll(){
	if(document.getElementById){                    //判断浏览器是否支持js
		document.getElementById('reload').onclick=getNewCard;    //点击获得新的bingo卡片
		newCard();
	}
	else{
		alert('Your Browser does not support this script!');
	}
}

function newCard(){
	var i;
	for(i=0;i<24;i++){
		square(i);
	}
}

function square(thissquare){
	var squareName='square'+thissquare;
	var colNum=[0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4];  //确保第一行15以内，第二行15-30 以此类推
	var squareNum=colNum[thissquare]*15+Math.floor(Math.random()*15);   //15*colnum+随机

	do{                     //保证没有出现重复值
		squareNum=squareNum+1;          
	}
	while(usedCard[squareNum]);

	usedCard[squareNum]=true;              //把用过的数字改为true

	document.getElementById(squareName).innerHTML=squareNum;
	document.getElementById(squareName).className='';       //确保卡片的className为空，便于对颜色做修改
	document.getElementById(squareName).onmousedown=clickCard;  //点击卡片颜色发生变化
}

function getNewCard(){            //获得一张新的卡片
	for(var i=0;i<76;i++)
		usedCard[i]=false;

	newCard();
	return false;            //不加载html href指向的页面
}

function clickCard(evt){
	if(evt){
		var ThisSquare=evt.target;          //一般浏览器的触发事件
	}
	else{
		var ThisSquare=window.event.srcElement;         //IE浏览器必须查看才能触发事件
	}
	if(ThisSquare.className==''){           //通过修改classname修改背景颜色
		ThisSquare.className='pickedBG';
	}
	else
		ThisSquare.className='';

	checkWin();
}

function checkWin(){             //检查是否胜利
    //...
}