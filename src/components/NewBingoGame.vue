<template>
    <div class="NewBingoGame">
        <div class="contianer">

            <div class="center">
                <img src="../assets/img/common/center.png">
            </div>

            <div class="top">
                <img src="">
            </div>

            <div class="tip">
                總計抽出35個數字，優先連成三條線於聊天室打上”我中獎了！“，並開啟視訊完成驗證
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

			<div class="groupAll groupAllshow" v-show="groupAll">
				<!-- <div class="groupAllTxt" v-for="numbers in lotteryNumners" :key="numbers">
					<ul >
						<li v-for="n in numbers" :key="n">{{ n }}</li>
					</ul>
				</div> -->
                <div class="groupAllTxt">
                    <span v-for="n in totalNumner" :key="n" class="list-item">{{ n }}</span>
                </div>
			</div>

            <div class="groupNum groupNumshow" v-show="groupNum">
				<div class="groupNumTxt">
					<span>{{ result }}</span>
				</div>
			</div>

        </div>
		
    </div>
    
</template>

<script>
export default {
    name: 'NewBingoGame',
	created() {
      window.addEventListener('keydown', this.startBtn);
    },
    data() {
        return {
            count: 0,
            isfadeInUp: false,
            min: 1,
            max: 75,
			totalNumner: [],
            fistNumner: [],
            result : 0,
			music: require('../assets/img/common/lucky.mp3'),
			groupAll: false,
            groupNum: false,
            isrotateIn1: false,
            isrotateIn2: false
        }
    },
    methods: {
        startBtn(e){
			if(e.key == "Enter"){
				let sound = new Audio(this.music)
				if(this.totalNumner.length  == 0){
					sound.play()
				}
				let randNum = 0
				this.max = parseInt(this.max);
				this.min = parseInt(this.min);
				this.lotteryNumner = [];

                this.groupNum = false
				if(this.totalNumner.length < 35){
				this.isrotateIn1 = true
				this.isrotateIn2 = true
				}

                if(this.totalNumner.length == 0){
                    this.result = 0;
                    this.isfadeInUp = true
                    for(var i=0; i<13; i++){
                        randNum = Math.round(this.min + Math.random() * (this.max- this.min));
                        
                        for(var j=0; j<=this.fistNumner.length; j){
                            while(this.fistNumner.includes(randNum)) {
                                randNum = Math.round(this.min + Math.random() * (this.max- this.min));
                            }
                            j++;
                        }
                        this.fistNumner.push(randNum)

                    }
                }else if(this.totalNumner.length < 35 && this.totalNumner.length >= 13){
                    this.count += 1
                    randNum = Math.round(this.min + Math.random() * (this.max- this.min));

                    while(this.totalNumner.includes(randNum)) {   
                        randNum = Math.round(this.min + Math.random() * (this.max- this.min));
                    }
                }

				if(this.count == 0){
                    window.setTimeout(()=>{
                    this.groupAll = true
                    },6000)
                    window.setTimeout(()=>{
                    this.totalNumner = this.fistNumner.sort(compareNumbers)
                    },9000)
                }

				if(this.totalNumner.length < 35){
					window.setTimeout(()=>{
					this.isrotateIn1 = false;
					this.isrotateIn2 = false;
					},6000)
                    
				}

                if(this.count >= 1){
                    window.setTimeout(()=>{
                        this.groupNum = true
                        this.result = randNum
                        this.totalNumner.splice(this.totalNumner.length + 1,0,randNum);
                        this.totalNumner = this.totalNumner.sort(compareNumbers)
                    },6000)
                }

				window.setTimeout(()=>{sound.pause()},7000)
                requestAnimationFrame
			}
        }
    }
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
	animation: rotateIn 2s linear 0s 4 normal both;
}

/**/

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
	top: 25%;  
	left: 2%;
	display: flex;
	flex-wrap: wrap;
}
.groupAllTxt{
	width: 100%;
	color: #ffcd00;
	text-align: center;
	line-height: 28px;
	font-size: 30px;
	letter-spacing: 2px;
	display: flex;
    flex-wrap:wrap;
	align-items: center;
    text-indent: 50px;
    justify-content: space-between;
    flex-direction: row;
    padding-right: 25px;
}

@keyframes groupAllshow{
	0%   {height: 0;}
	10%  {height: 5%;}
	20%  {height: 10%;}
	30%  {height: 15%;}
	40%  {height: 20%;}
	50%  {height: 25%;}
	60%  {height: 30%;}
	70%  {height: 40%;}
	80%  {height: 50%;}
	90%  {height: 60%;}
	100%  {height: 70%;}
}
.groupAllshow{
	overflow:hidden;
	animation: groupAllshow 3s linear 0s 1 normal both;
}

.groupNum{
	position: absolute;
	width: 200px;
	height: 200px !important;
	background-color: rgb(91, 0, 3);
	border-width:10px;
	border-style:solid;
	border-color: rgb(116,9,13);
	top: 40%;  
	right: 12%;
	display: flex;
}

.groupNumTxt{
	width: 100%;
	height: 100%;
	color: #ffcd00;
	line-height: 28px;
	font-size: 100px;
	letter-spacing: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
