/*

function play(){
    // console.log('this is my fist project with js , i am happy ');
// step 1 hide the home screen
//  show the play-ground 

const homeSection= document.getElementById('home-screen');
homeSection.classList.add('hidden');
// show the playground 

const playgroundSection = document.getElementById('play-ground');
playgroundSection.classList.remove('hidden');

}
*/


function keyBoardKeyupEvent(event) {
    const playerPressed= event.key;
    console.log (playerPressed);


    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedCurrentAlphabet=currentAlphabet.toLowerCase();

    console.log(playerPressed,expectedCurrentAlphabet) ;

    if(playerPressed ===expectedCurrentAlphabet ){

        console.log('you wll get the point ');
        // console.log('Correct!',expectedCurrentAlphabet);
        const currentScore=document.getElementById('current-score');
       const updatedScore=currentScore+1;

       setTextElementById ('current-score',updatedScore);


        // currentScore.innerText=updatedScore;
        
        removeBackgroundColorById(expectedCurrentAlphabet);
        continueGame();
    }
    else{ 
        console.log(' you lost the pont ');


        const currentLive=document.getElementById('live-score');
        const updatedLive=currentLive-1;
        if( updatedLive===0 ){

        }
        setTextElementById('live-score',updatedLive );
        // const currentLiveScore=document.getElementById('live-score');
        // const currentLiveText=currentLiveScore.innerText; 
        // const mainLiveNumber=parseInt(currentLiveText);
        // console.log(mainLiveNumber);

        // const changingNumber=mainLiveNumber-1;

        // currentLiveScore.innerText=changingNumber;
    } 

}

document.addEventListener('keyup',keyBoardKeyupEvent)





function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet is', alphabet);


    const currentAlphabet=document.getElementById('current-alphabet');

currentAlphabet.innerText = alphabet;


setBackgroundColorById(alphabet)

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}