// var music=document.getElementById("music");

// function play(){
// music.play();
// }
// function pause(){
//     music.pause();
// }
// function load(){
//     music.load();
// }
// function mute(){
//     music.volume=0;
// }
// function activateaudio(){
//     music.volume=1;
// }

class Player{

    constructor(){
        
     var heightScreen=document.getElementById("player");
     heightScreen.style.height=screen.height+"px";
     if(screen.width<500){
         heightScreen.style.width=screen.width+"px";
     }
     var heightDiv=document.getElementById("content");
     heightDiv.style.height=screen.height-300 +"px";
    }
}
onload=new Player();




//////////////////////////////////class AUDIPLAYER

class AudioPlayer{

constructor(){
    this.volume=document.getElementById("volume");
    this.vitesse=document.getElementById("vitesse");
    //classe vloume
    this.audiofile=document.getElementById("audiofile");
    this.trackfile=document.getElementById("track");
    this.playfile=document.getElementById("play");
    this.next=document.getElementById("next");
    this.back=document.getElementById("back");
    this.audiofile=document.getElementById("audiofile");
    this.trackname=document.getElementById("track");
   
    this.isPlayed;

     

this.playfile.addEventListener("click",()=>{
this.palymusic();
});
this.audiofiles=["o....  الفاتحة ....o","o....   البقرة ....o","o....   آل عمران ....o","o....   النساء ....o","o....   المائدة ....o","o....   الأنعام ....o","o....   الأعراف ....o","o....   الأنفال ....o","o....   التوبة ....o","o....   هود ....o","o....   يوسف ....o","o....   الرعد ....o","o....   إبراهيم ....o","o....   الحجر ....o","o....   النحل ....o","o....   الإسراء ....o","o....   الكهف ....o","o....   مريم ....o","o....   طه ....o","o....   الأنبياء ....o","o....   الحج ....o","o....   المؤمنون ....o","o....   النور ....o","o....   الفرقان ....o","o....   الشعراء ....o","o....   النمل ....o","o....   القصص ....o","o....   العنكبوت ....o","o....   الروم ....o","o....   لقمان ....o","o....   السجدة ....o","o....   الأحزاب ....o","o....   سبأ ....o","o....   فاطر ....o","o....   يس ....o","o....   الصافات ....o","o....   ص ....o","o....   الزمر ....o","o....   غافر ....o","o....   فصلت ....o","o....   الشورى ....o","o....   الزخرف ....o","o....   الدّخان ....o","o....   الجاثية ....o","o....   الأحقاف ....o","o....   محمد ....o","o....   الفتح ....o","o....   الحجرات ....o","o....   ق ....o","o....   الذاريات ....o","o....   الطور ....o","o....   النجم ....o","o....   القمر ....o","o....   الرحمن ....o","o....   الواقعة ....o","o....   الحديد ....o","o....   المجادلة ....o","o....   الحشر ....o","o....   الممتحنة ....o","o....   الصف ....o","o....   الجمعة ....o","o....   المنافقون ....o","o....   التغابن ....o","o....   الطلاق ....o","o....   التحريم ....o","o....   الملك ....o","o....   القلم ....o","o....   الحاقة ....o","o....   المعارج ....o","o....   نوح ....o","o....   الجن ....o","o....   المزمل ....o","o....   المدثر ....o","o....   القيامة ....o","o....   الإنسان ....o","o....   المرسلات ....o","o....   النبأ ....o","o....   النازعات ....o","o....   عبس ....o","o....   التكوير ....o","o....   الإنفطار ....o","o....   المطففين ....o","o....   الإنشقاق ....o","o....   البروج ....o","o....   الطارق ....o","o....   الأعلى ....o","o....   الغاشية ....o","o....   الفجر ....o","o....   البلد ....o","o....   الشمس ....o","o....   الليل ....o","o....   الضحى ....o","o....   الشرح ....o","o....   التين ....o","o....   العلق ....o","o....   القدر ....o","o....   البينة ....o","o....   الزلزلة ....o","o....   العاديات ....o","o....   القارعة ....o","o....   التكاثر ....o","o....   العصر ....o","o....   الهمزة ....o","o....   الفيل ....o","o....   قريش ....o","o....   الماعون ....o","o....   الكوثر ....o","o....   الكافرون ....o","o....   النصر ....o","o....   المسد ....o","o....   الإخلاص ....o","o....   الفلق ....o","o....   الناس"];

this.sourceaudio=[];
for(this.i=0;this.sourceaudio.length<115;++this.i){
    if(this.i<10){
        
        this.sourceaudio[this.i]="https://server10.mp3quran.net/jleel/00"+(this.i+1)+".mp3"
        //
    }
    else if(this.i>10 && this.i<100){
        this.sourceaudio[this.i]="https://server10.mp3quran.net/jleel/"+"0"+(this.i+1)+".mp3"
    }
    else if(this.i>100&&this.i<116){
        this.sourceaudio[this.i]="https://server10.mp3quran.net/jleel/"+(this.i+1)+".mp3"
    }
    }
this.server=0;
this.setressourcefile();
this.next.addEventListener("click",()=>{
 
    this.vitesse.value=100;
    if(this.server<this.sourceaudio.length){
        
        this.server++;
        
    }else{
    }
    this.isPlayed=false;
    this.setressourcefile();

});
this.back.addEventListener("click",()=>{
    this.vitesse.value=100;

    if(this.server>0){
     
        this.server--;
     
        this.isPlayed=false;
    }else{
        
    }
    this.setressourcefile();
});
}

   
setressourcefile(){
    
this.audiofile.src=this.sourceaudio[this.server];
this.trackname.innerHTML=this.audiofiles[this.server]+"  :سورة";
this.palymusic();

}
palymusic(){


    if(this.isPlayed==false){
        this.audiofile.play();
        this.isPlayed=true;
        this.playfile.src="img/pause.png"
       
    }else{
        this.audiofile.pause();
        this.playfile.src="img/play.png"
        this.isPlayed=false;
    }
}
}
onload=new AudioPlayer;
function rachid(event){
    alert(event.key);
    }
    