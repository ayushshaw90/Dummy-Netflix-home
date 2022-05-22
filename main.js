const email1= document.getElementById("email");
const email2= document.getElementById("email2");
const label1 = document.getElementById("l1");
const label2 = document.getElementById("l2");

function click1(){
    if(label1.classList.contains('initialLabel')){
        label1.classList.remove('initialLabel')
        label1.classList.add('finalLabel')
    }
}
email1.addEventListener('focusin',click1)
email1.addEventListener('focusout',()=>{
    if(!(email1.value)){
        label1.classList.remove('finalLabel');
        label1.classList.add('initialLabel')
    }
})

function click2(){
    if(label2.classList.contains('initial-label2')){
        label2.classList.remove('initial-label2')
        label2.classList.add('final-label2')
    }
}
email2.addEventListener('focusin', click2)
email2.addEventListener('focusout',()=>{
    if(!(email2.value) ){
        label2.classList.remove('final-label2');
        label2.classList.add('initial-label2')
    }
})

let msg=[];
let fold=[];
for(let i=1;i<=6;i++){
    msg[i-1]=document.getElementById(`msg${i}`)
    fold[i-1]=document.getElementById(`fold${i}`)
}
let index=-1;
for(let i=1;i<=6;i++){
    fold[i-1].addEventListener('click',()=>{
        if(index==-1){
            msg[i-1].classList.remove('no-display')
            index=i;
        }else if(index==i){
            msg[i-1].classList.add('no-display')
            index=-1;
        }else{
            msg[index-1].classList.add('no-display')
            msg[i-1].classList.remove('no-display')
            index=i;
        }
    })
}
