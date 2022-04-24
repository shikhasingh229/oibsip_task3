window.onload = ()=>{

const addButton=document.querySelector('.addButton');
var inputValue= document.querySelector('.input');
const container=document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName)
    }

    createDiv(itemName)
    {
        
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var input =document.createElement('input');
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type='text';
    
    
        var editButton=document.createElement('button');
        editButton.innerHTML="EDIT";
        editButton.classList.add('editButton');
    
        var removeButton=document.createElement('button');
        removeButton.innerHTML="REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',()=>this.edit(input));
        removeButton.addEventListener('click', ()=> this.remove(itemBox));

     }

     edit(input)
     {
         if(input.disabled)
         {
            input.disabled= !input.disabled;
         }
         else{
            input.disabled=true;
         }
     }

     remove(itemBox){
         itemBox.parentNode.removeChild(itemBox);
     }
}

function check(){
     if(inputValue.value !=''){
         new item(inputValue.value);
         inputValue.value="";
     }
 }

addButton.addEventListener('click',check)
window.addEventListener('keydown', (e)=>{
    if(e.which==13){
        check();
    }
})


};