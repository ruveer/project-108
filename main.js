function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w0vtv_WNm/.json',modalReady);
}
function modalReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("detected_animal").innerHTML="Detected Dog-  , Detected Cat-  , Detected Cow-  , Detected Lion-   - "+results[0].label;
        document.getElementById("detected_voice_animal").innerHTML="Detected voice is of - "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("detected_animal").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice_animal").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById("dd5ed82b-b105-4b93-806f-1f9e718b56ec.png");
       
        if(results[0].label=="Cow"){
            img.src="cow.jpg";
         
        }
        else if(results[0].label=="Cat"){
            img.src="cat.jpg";
        }
        else if(results[0].label=="Dog"){
            img.src="dog.webp";
        }
        else if(results[0].label=="Lion"){
            img.src="lion.jpg"
        }
        
        else{
            img.src="dd5ed82b-b105-4b93-806f-1f9e718b56ec.png";
          
        }
    }
}
