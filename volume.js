class Volume{

    constructor(){
  this.playbackniveau=document.getElementById("playbackniveau");
  this.niveau=document.getElementById("niveau");    
  this.audiofile=document.getElementById("audiofile");
  this.audiofile.volume=50/100;
  this.volume=document.getElementById("volume");
 
  this.niveau.value=this.volume.value;  
  this.volume.addEventListener("change",()=>{
  this.audiofile.volume=this.volume.value/100
  this.niveau.value=this.volume.value;
  });
  this.audiofile.playbackRate=1;
  this.vitesse=document.getElementById("vitesse");
  this.playbackniveau.value=this.vitesse.value;
  this.vitesse.addEventListener("change",()=>{
    this.audiofile.playbackRate=this.vitesse.value/100;
    this.playbackniveau.value=this.vitesse.value;
});
    }
}
onload=new Volume;