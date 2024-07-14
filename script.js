setInterval(function(){
  var skipBtn = document.getElementsByClassName("ytp-skip-ad-button");
  if(skipBtn != undefined && skipBtn.length > 0){
    console.log("ad detected");
    skipBtn[0].click();
  }
 },3000)