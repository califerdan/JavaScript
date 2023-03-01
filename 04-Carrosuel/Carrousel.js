const avatar = document.querySelector('.avatar')
const fullName = document.querySelector('.full-name')
const ocupattion = document.querySelector('.ocupattion')
const description = document.querySelector('.description')

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const characteres = [
  {
    name: "harry",
    surname: "potter",
    ocupattion: "student magician",
    description: `Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong. Having "very limited access to truly caring adults", Rowling said, Harry "is forced, for such a young person, to make his own choices".`,
  },
  {
    name: "hagrid",
    surname: "",
    ocupattion: "keeper of keys",
    description: "He has a friendly, softhearted personality and is easily driven to tears, as seen in his very first scene, when he drops Harry off at the Dursleys' in Philosopher’s Stone. He is very loyal to his peers, especially Dumbledore, to whom he refers as the greatest wizard in the world multiple times. As first seen in Philosopher's Stone, he becomes extremely angry whenever anyone insults Dumbledore around him",
  },
  {
    name: "hermione",
    surname: "granger",
    ocupattion: "student magician",
    description: "Hermione's most prominent features include her prodigious intellect and cleverness. She is levelheaded, book-smart, and always very logical. Throughout the series, Hermione uses the skills of a librarian and teacher to gather the information needed to defeat Voldemort, the Dark Lord. When in doubt, she always turns to the school library.",
  }
];

let index = 0;

window.addEventListener('DOMContentLoaded',()=>{
    showCharacter(index);
})

function showCharacter(i){
    i>=characteres.length ? index = 0: '';
    i<0 ? index = characteres.length-1 : '';
    fullName.textContent = `${characteres[index].name} ${characteres[index].surname}`;
    ocupattion.textContent = characteres[index].ocupattion;
    description.textContent = characteres[index].description;
    avatar.setAttribute('src', `./avatar-${characteres[index].name}-${characteres[index].surname}.png`)
}

btnNext.addEventListener('click',()=>{
    index++
    showCharacter(index)
})

btnPrevious.addEventListener('click',()=>{
    index--
    showCharacter(index);
})