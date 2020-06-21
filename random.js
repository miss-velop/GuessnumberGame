var compGuess;
var userGuessLog=[];
var attempt=0;
var maxGues=10;
function gameEnded()
{
    document.getElementById('newgamebtn').style.display='inline';
    document.getElementById('easybtn').style.display='none';
    document.getElementById('hardbtn').style.display='none';
    document.getElementById('inputBox').setAttribute('readonly','readonly');
}




 function easyMode(){
     maxGues=10;
     document.getElementById('easybtn').className="activeButton";
     document.getElementById('hardbtn').className=""; 
 }
 function hardMode(){
    maxGues=5;
    document.getElementById('hardbtn').className="activeButton";
    document.getElementById('easybtn').className=""; 
}
//
function init()
{
    compGuess=Math.floor(Math.random() *100 +1);
    console.log(compGuess);
    document.getElementById('newgamebtn').style.display='none';

}
//for when you click the new game button to generate a new button
function newgame()
{
    window.location.reload();
}
function compareGuess()
{

    var userGuess=" "+ document.getElementById('inputBox').value;
    console.log(userGuess);
    //adding to the aray
    userGuessLog.push(userGuess);
    document.getElementById('guesslog').innerHTML=userGuessLog;
    console.log(userGuessLog);
    attempt++;
    document.getElementById('attempt').innerHTML=attempt;
    if(userGuessLog.length < maxGues)
    {
        if(userGuess>compGuess)
        {
            document.getElementById('textOutput').innerHTML='your guess is too high';
            document.getElementById('inputBox').value='';
        
        }
        else if(userGuess<compGuess)
        {
            document.getElementById('textOutput').innerHTML='your guess is too low';
            document.getElementById('inputBox').value='';
        
        }
        else{
            document.getElementById('textOutput').innerHTML='great guess you got it in '+attempt+'attempts';
           document.getElementById('container').style.backgroundColor='green';
            gameEnded();
        }

    }
    else
    {
        if(userGuess>compGuess)
        {
            document.getElementById('textOutput').innerHTML='you loose' + compGuess +'was the number';
            document.getElementById('container').style.backgroundColor='red';
            gameEnded();
        }
        else if(userGuess<compGuess)
        {
            document.getElementById('textOutput').innerHTML='you loose'+ compGuess +'was the number';
            document.getElementById('container').style.backgroundColor='red';
            gameEnded();
        }
        else
        {
            document.getElementById('textOutput').innerHTML='great guess you got it in ' + attempt + 'attempts';
            document.getElementById('container').style.backgroundColor='green';
            gameEnded();
        }
    }
}