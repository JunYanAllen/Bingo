<template>
    <div class="LotteryGame">
        <!-- <audio src="../assets/img/common/lucky.mp3" preload id="bg-music"></audio> -->

        <div class="contianer">

            <div class="center">
                <img src="../assets/img/common/center.png">
            </div>

            <div class="top">
                <img src="">
            </div>

            <div class="tip">
                每次抽取5個數字，總共5次，優先連成三條線將完成
            </div>

            <div class="btm">
                <img src="../assets/img/common/btm.png">
            </div>

            <div class="start">
                <a class="startBtn" @click="startBtn"></a>
            </div>

            <div class="circle-bg" :class="{fadeInUp:isfadeInUp}">
                <div class="circle1" :class="{rotateIn1:isrotateIn1}">
                    <img src="../assets/img/page1/circle1.png">
                </div>
                <div class="circle2" :class="{rotateIn2:isrotateIn2}">
                    <img src="../assets/img/page1/circle2.png">
                </div>
                <div class="circle3">
                    <span class="BingoText">Bingo</span>
                </div>
            </div>

            <div class="group1" :class="{groupshow:isgroupshow}">
                <div class="group1Bg">
                    <img src="../assets/img/page4/group1.png">
                </div>
                <div class="group1Txt">
					<li v-for="n in lotteryNumners[0]" :key="n">{{ n }}</li>
                </div>
            </div>

            <div class="group2" :class="{groupshow:isgroupshow2}">
                <div class="group2Bg">
                    <img src="../assets/img/page3/group2.png">
                </div>
                <div class="group2Txt">
                    <li v-for="n in lotteryNumners[1]" :key="n">{{ n }}</li>
                </div>
            </div>

			<div class="group3" :class="{groupshow:isgroupshow3}">
                <div class="group3Bg">
                    <img src="../assets/img/page3/group3.png">
                </div>
                <div class="group3Txt">
                    <li v-for="n in lotteryNumners[2]" :key="n">{{ n }}</li>
                </div>
            </div>

			<div class="group4" :class="{groupshow:isgroupshow4}">
                <div class="group1Bg">
                    <img src="../assets/img/page4/group4.png">
                </div>
                <div class="group4Txt">
                    <li v-for="n in lotteryNumners[3]" :key="n">{{ n }}</li>
                </div>
            </div>

			<div class="group5" :class="{groupshow5:isgroupshow5}">
                <div class="group5Bg">
                    <img src="../assets/img/page4/group5.png">
                </div>
                <div class="group5Txt">
                    <li v-for="n in lotteryNumners[4]" :key="n">{{ n }}</li>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
export default {
    name: 'LotteryGame',
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
            min: 0,
            max: 99,
            amount: 5,
			lotteryNumners: [],
            lotteryNumner: [],
            result : ''
        }
    },
    methods: {
        startBtn(){
            var randNum
            this.warn = '';
            this.amount = parseInt(this.amount);
            this.max = parseInt(this.max);
            this.min = parseInt(this.min);
            this.lotteryNumner = [];
            this.result = '';
            this.isrotateIn1 = true
            this.isrotateIn2 = true
			
            for(var i=0; i<this.amount; i++){
                randNum = Math.round(this.min + Math.random() * (this.max- this.min));
                
                for(var j=0; j<this.amount; j){
					for(var k=0; k<this.amount; k){
						if(this.lotteryNumners.length > 0 ){
							if(this.lotteryNumners[j] != undefined && randNum == this.lotteryNumners[j][k]){
								randNum = Math.round(this.min + Math.random() * (this.max- this.min));
							}
							
						}
						k++;
					}
                    j++;
                }
                this.lotteryNumner[i] = randNum;
            }
			this.lotteryNumners[this.count] = this.lotteryNumner
			// console.log(this.lotteryNumners[0][0])

			switch(this.count){
				case 0:
					this.isfadeInUp = true
					this.isgroupshow = true
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
				default:
					alert('已抽獎完畢！')
			}
			this.count += 1

            window.setTimeout(()=>{
                this.isrotateIn1 = false
                this.isrotateIn2 = false
            },9000)
        }
    }

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
	animation: rotateIn 3s linear 0s 3 normal both;
	/*animation: rotateIn 2s linear 0s infinite normal both;*/
}
.rotateIn2{
	animation: rotateIn 1.3s linear 0s 6 normal both;
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
	left: 25px;
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
	animation: groupshow 3s linear 9s 1 normal both;
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
	animation: groupshow5 3s linear 9s 1 normal both;
}

.group5{
	width: 200px;
	height: 0;
	position: absolute;
	top: 60%;
	left: 50%;
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

.BingoText{
	position: absolute;
	margin-top: 39%;
	margin-left: -23%;
	font-size: 40px;
	color: #FFCE30;
	text-shadow: black 0.1em 0.1em 0.2em;
	font-weight:bold;
}
</style>
