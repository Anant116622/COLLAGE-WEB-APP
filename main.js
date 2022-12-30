var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="#TAKEMYSELFI"){
        console.log("#TAKINGSELFI___________");
        speak();
    }
}

function take_snapshot()
{

    console.log(img_id);

    Webcam.span(function(data_uri)  {
if(img_id =="selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id =="selfie2"){
    document.getElementById("result2").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id =="selfie3"){
    document.getElementById("result3").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
    })
}

setTimeout(function ()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking you next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
 




