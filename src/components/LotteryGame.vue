<template>
    <div class="LotteryGame">
        <div class="contianer">

            <div class="center">
                <img src="../assets/img/common/center.png">
            </div>

            <div class="top">
                <img src="">
            </div>

            <div class="tip">
                將抽六次，總計35個數字，只要連成三條線，先在螢幕上打字並完成視訊完成驗證
            </div>

            <div class="circle-bg" :class="{fadeInUp:isfadeInUp}">
                <div class="circle1" :class="{rotateIn1:isrotateIn1}">
                    <img src="../assets/img/page1/circle1.png">
                </div>
                <div class="circle2" :class="{rotateIn2:isrotateIn2}">
                    <img src="../assets/img/page1/circle2.png">
                </div>
                <div class="circle3">
                    <span class="BingoText" @click="startBtn">Bingo</span>
                </div>
            </div>

            <div class="group1" :class="{groupshow:isgroupshow}">
                <div class="group1Bg">
                    <img src="../assets/img/page4/group1.png">
                </div>
                <div class="group1Txt"> 
					<ul v-for="numbers in firstNumber" :key="numbers">
						<li v-for="n in numbers" :key="n">{{ n }}</li>
					</ul>
                </div>
            </div>

            <div class="group2" :class="{groupshow:isgroupshow2}">
                <div class="group2Bg">
                    <img src="../assets/img/page3/group2.png">
                </div>
                <div class="group2Txt">
                    <span v-for="n in lotteryNumners[1]" :key="n">{{ n }}<br></span>
                </div>
            </div>

			<div class="group3" :class="{groupshow:isgroupshow3}">
                <div class="group3Bg">
                    <img src="../assets/img/page3/group3.png">
                </div>
                <div class="group3Txt">
                    <span v-for="n in lotteryNumners[2]" :key="n">{{ n }}<br></span>
                </div>
            </div>

			<div class="group4" :class="{groupshow:isgroupshow4}">
                <div class="group1Bg">
                    <img src="../assets/img/page4/group4.png">
                </div>
                <div class="group4Txt">
                    <span v-for="n in lotteryNumners[3]" :key="n">{{ n }}<br></span>
                </div>
            </div>

			<div class="group5" :class="{groupshow5:isgroupshow5}">
                <div class="group5Bg">
                    <img src="../assets/img/page4/group5.png">
                </div>
                <div class="group5Txt">
                    <span v-for="n in lotteryNumners[4]" :key="n">{{ n }}<br></span>
                </div>
            </div>

			<div class="group6" :class="{groupshow5:isgroupshow6}">
                <div class="group6Bg">
                    <img src="../assets/img/page4/group5.png">
                </div>
                <div class="group6Txt">
                    <span v-for="n in lotteryNumners[5]" :key="n">{{ n }}<br></span>
                </div>
            </div>

			<div class="groupAll groupAllshow" v-show="groupAll">
				<div class="groupAllTxt" v-for="numbers in lotteryNumners" :key="numbers">
					<ul >
						<li v-for="n in numbers" :key="n">{{ n }}</li>
					</ul>
				</div>
			</div>
        </div>
		
    </div>
    
</template>

<script>
export default {
    name: 'LotteryGame',
	created() {
      window.addEventListener('keydown', this.startBtn);
    },
    data() {
        return {
            count: 0,
            isfadeInUp: false,
            isrotateIn1: false,
            isrotateIn2: false,
            isgroupshow: false,
            isgroupshow2: false,
			isgroupshow3: false,
            isgroupshow4: false,
            isgroupshow5: false,
			isgroupshow6: false,
            min: 1,
            max: 75,
            amount: 5,
			lotteryNumners: [],
			firstNumber: [],
            lotteryNumner: [],
			totalNumner: [],
            result : '',
			music: require('../assets/img/common/lucky.mp3'),
			groupAll: false
        }
    },
    methods: {
        startBtn(e){
			if(e.key == "Enter"){
				let sound = new Audio(this.music)
				if(this.count < 6){
					sound.play()
				}
				let randNum = 0
				this.warn = '';
				this.amount = parseInt(this.amount);
				this.max = parseInt(this.max);
				this.min = parseInt(this.min);
				this.lotteryNumner = [];
				this.result = '';
				if(this.count < 6){
				this.isrotateIn1 = true
				this.isrotateIn2 = true
				}
				if(this.count < 6){
					if(this.count == 0){
						for(var i=0; i<10; i++){
						randNum = Math.round(this.min + Math.random() * (this.max- this.min));
						
						for(var j=0; j<=this.totalNumner.length; j){
							while(this.totalNumner.includes(randNum)) {
								randNum = Math.round(this.min + Math.random() * (this.max- this.min));
							}
							
							j++;
						}
						this.lotteryNumner[i] = randNum;
						this.totalNumner.push(randNum)
						}
						this.lotteryNumners[this.count] = this.lotteryNumner
					}else{
						for(var k=0; k<this.amount; k++){
							randNum = Math.round(this.min + Math.random() * (this.max- this.min));
							
							for(var l=0; l<=this.totalNumner.length; l){
								while(this.totalNumner.includes(randNum)) {
									randNum = Math.round(this.min + Math.random() * (this.max- this.min));
								}
								
								l++;
							}
							this.lotteryNumner[k] = randNum;
							this.totalNumner.push(randNum)
						}
						this.lotteryNumners[this.count] = this.lotteryNumner
					}
				}
				switch(this.count){
					case 0:
						this.isfadeInUp = true
						this.isgroupshow = true
						this.firstNumber = getNewArray(this.lotteryNumners[0],5)
						console.log(this.firstNumber)
						break
					case 1:
						this.isgroupshow2 = true
						break
					case 2:
						this.isgroupshow3 = true
						break
					case 3:
						this.isgroupshow4 = true
						break
					case 4:
						this.isgroupshow5 = true
						break
					case 5:
						this.isgroupshow6 = true
						break
					default:
						this.isgroupshow = false 
						this.isgroupshow2 = false 
						this.isgroupshow3 = false 
						this.isgroupshow4 = false 
						this.isgroupshow5 = false
						this.isgroupshow6 = false
						this.groupAll = true
						this.lotteryNumners = getNewArray(this.totalNumner.sort(compareNumbers),5)
				}
				if(this.count < 6){
					window.setTimeout(()=>{
					this.isrotateIn1 = false
					this.isrotateIn2 = false
					},6000)
				}
				window.setTimeout(()=>{
				sound.pause()
				},7000)
				this.count += 1

				
			}
        }
    }

}
function getNewArray(arr, size){
	const arrNum = Math.ceil(arr.length/size, 10); // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
	let index = 0; // 定义初始索引
	let resIndex = 0; // 用来保存每次拆分的长度
	const result = [];
	while(index< arrNum){
		result[index]= arr.slice(resIndex,size+resIndex);
		resIndex += size;
		index++;
	}
	return result;
}
function compareNumbers(a, b) {
  return a - b;
}

</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	font-family:"Microsoft YaHei","SimSun";
}
body{
	font-family: "Microsoft YaHei","SimSun";
	background: #fff;
}


.clear{
	clear: both;
}
.clearfix:after{
	content: '';
	height: 0;
	clear:both;
}

a{
	text-decoration: none;
}
ul li{
	list-style-type: none;
}
img{
	display: block;
	margin: 0;
	padding: 0;
}

.contianer{
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	left: 0;
	overflow: hidden;
	background: url(../assets/img/common/bg1.jpg) no-repeat;
	background-size: 100% 100%;
}

.top,.btm{
	width: 100%;
	height: auto;
	position: absolute;
}

.top img,.center img,.btm img{
	width: 100%;
}

.top{
	top: 0;
	left: 0;
}

.center{
	width: 70%;
	height: auto;
	position: absolute;
	top: -8%;
	left: 15%;
}

.btm{
	bottom: 0;
	left: 0;
}


.start{
	width: 26%;
	height: 10%;
	position: absolute;
	bottom: 0;
	left: 37%;
}
.start a{
	display: block;
	width: 100%;
	height: 100%;
}



.tip{
	width: 100%;
	height: 20px;
	position: absolute;
	top: 20%;
	left: 0;
	color: #fff;
	font-size: 30px;
	text-align: center;
}



.back{
	width: 8%;
	height: 17%;
	position: absolute;
	top: 3%;
	left: 0.5%;
}
.back a{
	display: block;
	width: 100%;
	height: 100%;
}

/*上升*/
.circle-bg{
	width: 30%;
	height: 40%;
	position: absolute;
	top: 35%;
	left: 35%;
	background: url(../assets/img/page1/circle-bg.png) no-repeat;
	background-size: 100% 100%;
}



@-webkit-keyframes fadeInUp{
	0%{
		opacity:1;
		-webkit-transform:translate3d(0,0,0);
		transform:translate3d(0,0,0)
	}
	to{
		opacity:1;
		
		-webkit-transform:translate3d(0,-90px,0);
		transform:translate3d(0,-90px,0)
	}
}
@keyframes fadeInUp{
	0%{
		opacity:1;
		-webkit-transform:translate3d(0,0,0);
		transform:translate3d(0,0,0)
	}
	to{
		opacity:1;
		-webkit-transform:translate3d(0,-90px,0);
		transform:translate3d(0,-90px,0)
	}
}
.fadeInUp{
	animation: fadeInUp 2s linear 0s 1 normal both;
}

/*旋转*/
.circle1,.circle2,.circle3{
	width: 44%;
	height: auto;
	position: absolute;
	top: 28%;
	left: 28%;
}

.circle1 img,.circle2 img,.circle3 img{
	width: 100%;
	height: 100%;
}

@-webkit-keyframes rotateIn{
	0%{
		-webkit-transform:rotate(0deg)
	}
	to{
		-webkit-transform:rotate(1turn)
	}
}
@keyframes rotateIn{
	0%{
		transform:rotate(0deg)
	}
	to{
		transform:rotate(1turn)
	}
}
.rotateIn1{
	animation: rotateIn 3s linear 0s 2 normal both;
	/*animation: rotateIn 2s linear 0s infinite normal both;*/
}
.rotateIn2{
	animation: rotateIn 1.3s linear 0s 4 normal both;
}

/**/
.group1,.group2,.group4{
	width: 0;
	height: 160px;
	position: absolute;
	overflow:hidden;
}
.group1{
	top: 23%;
	left: 20%;
}
.group2{
	top: 25%;
	left: 55%;
}
.group3{
	width: 0;
	height: 200px;
	position: absolute;
	overflow:hidden;
	top: 49%;
	left: 60%;
}
.group4{
	top: 48%;
	left: 22%;
}

.group1Bg,.group2Bg,.group3Bg{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.group1Bg img,.group2Bg img,.group3Bg img{
	height: 100%;
}

.group1Txt,.group2Txt,.group4Txt{
	width: 180px;
	height: 145px;
	position: absolute;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 20px;
	letter-spacing: 2px;
}
.group1Txt{
	top: 9px;
	left: 70px;
	display: flex;
	flex-wrap: wrap;
}
.group1Txt ul{
	padding-right: 20px;
}
.group2Txt{
	top: 9px;
	left: 230px;
}

.group3Txt{
	width: 170px;
	height: 145px;
	position: absolute;
	top: 51px;
	left: 145px;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 20px;
	letter-spacing: 2px;
}

.group4Txt{
	top: 9px;
	left: 0px;
}



@keyframes groupshow{
	0%   {width: 0;}
	10%  {width: 10%;}
	20%  {width: 20%;}
	30%  {width: 30%;}
	40%  {width: 40%;}
	50%  {width: 50%;}
	60%  {width: 60%;}
	70%  {width: 70%;}
	80%  {width: 80%;}
	90%  {width: 90%;}
	100%  {width: 100%;}
}
.groupshow{
	overflow:hidden;
	animation: groupshow 3s linear 6s 1 normal both;
}

@keyframes groupshow5{
	0%   {height: 0;}
	10%  {height: 10%;}
	20%  {height: 20%;}
	30%  {height: 30%;}
	40%  {height: 40%;}
	50%  {height: 50%;}
	60%  {height: 60%;}
	70%  {height: 70%;}
	80%  {height: 80%;}
	90%  {height: 90%;}
	100%  {height: 100%;}
}
.groupshow5{
	overflow:hidden;
	animation: groupshow5 3s linear 6s 1 normal both;
}

.group5{
	width: 200px;
	height: 0;
	position: absolute;
	top: 60%;
	left: 45%;
	margin-left: -90px;
	overflow:hidden;
}
.group5Bg{
	width: 100%;
	height: auto;
}
.group5Bg img{
	width: 100%;
}

.group5Txt{
	width: 170px;
	height: 145px;
	position: absolute;
	top: 115px;
	left: 1px;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 20px;
	letter-spacing: 2px;
}

.groupshow6{
	overflow:hidden;
	animation: groupshow5 3s linear 6s 1 normal both;
}

.group6{
	width: 200px;
	height: 0;
	position: absolute;
	top: 60%;
	left: 60%;
	margin-left: -90px;
	overflow:hidden;
}
.group6Bg{
	width: 100%;
	height: auto;
}
.group6Bg img{
	width: 100%;
}

.group6Txt{
	width: 170px;
	height: 145px;
	position: absolute;
	top: 115px;
	left: 1px;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 20px;
	letter-spacing: 2px;
}

.BingoText{
	position: absolute;
	margin-top: 39%;
	margin-left: -23%;
	font-size: 40px;
	color: #FFCE30;
	text-shadow: black 0.1em 0.1em 0.2em;
	font-weight:bold;
	
}

.groupAll{
	position: absolute;
	width: 500px;
	height: 500px;
	background-color: rgb(91, 0, 3);
	border-width:10px;
	border-style:solid;
	border-color: rgb(116,9,13);
	top: 55%;  
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-wrap: wrap;
}
.groupAllTxt{
	width: 150px;
	height: 160px;
	top: 115px;
	left: 1px;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 20px;
	letter-spacing: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
}

@keyframes groupAllshow{
	0%   {height: 0;}
	10%  {height: 5%;}
	20%  {height: 10%;}
	30%  {height: 15%;}
	40%  {height: 20%;}
	50%  {height: 25%;}
	60%  {height: 30%;}
	70%  {height: 35%;}
	80%  {height: 40%;}
	90%  {height: 45%;}
	100%  {height: 65%;}
}
.groupAllshow{
	overflow:hidden;
	animation: groupAllshow 3s linear 0s 1 normal both;
}
</style>
