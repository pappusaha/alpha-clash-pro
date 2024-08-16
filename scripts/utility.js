
// function hideElementById(elementId){

//     const element=document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function showElementById(elementId){
//     const element=document.getElementById(elementId);
//     element.classList.remove('hidden');

// }


// function getRandomAlphabet(){

//     const alphabetstring= 'abcdefghijklmnopqrstuvwxyz' 
//     const alphabets= alphabetstring.split('') ;
//     console.log(alphabets);


//     // get a random index between 0 to 25  

//     const rendomNumber=Math.random()*25
//     const index= Math.round(rendomNumber);
      
//     const alphabet=alphabets[index];

//     // console.log(alphabet, index)   
//     return alphabet ;
// }



function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){

const element=document.getElementById(elementId)
element.classList.add('bg-orange-400') ;

}
function removeBackgroundColorById(elementId){

    const element=document.getElementById(elementId)
    element.classList.remove('bg-orange-400') ;
    
    }
    


    function  getTextElementById(elementId){
        const element=document.getElementById(elementId);
        const elementText=element.innerText;
        const value=parseInt(elementText);
        return value;
    
    }

    function setTextElementById(elementId, value){
        const element=document.getElementById(elementId)
        element.innerText=value;

    }




function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}