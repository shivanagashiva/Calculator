

let input=document.getElementById('input')
let buttons=document.querySelectorAll('.button')
let number="";

let openBracket=true;
let dotbutton=true;

buttons.forEach((button)=>{
    button.addEventListener('click',(eve)=>{
        
        if(eve.target.textContent=='C')
        {
            number='';
            input.textContent="";
            dotbutton=true;
            openBracket=true;
        }
        else if(eve.target.textContent=='=')
        {
            number=eval(number)
            input.textContent=number;
        }
        else if(eve.target.textContent=='()')
        {
            if(openBracket)
            {
                number += "("
                input.textContent=number
                openBracket=false
            } 
            else
            {
                if(number[number.length-1]!='+'&&number[number.length-1]!='-'&&number[number.length-1]!='*'&&number[number.length-1]!='/'&&number[number.length-1]!='%'&&number[number.length-1]!='(')
                {
                    number += ")"
                    input.textContent=number
                    openBracket=true
                }
                else
                {
                    number += "("
                    input.textContent=number
                }
            }   
        }
        else if(eve.target.textContent=='x')
        {
            number=number.slice(0,-1)
            input.textContent=number
        }
        else if(eve.target.textContent=='.')
        {
            if(dotbutton)
            {
                number += eve.target.textContent
                input.textContent=number
                dotbutton=false
            }
        }
        else if(eve.target.textContent=='+' ||eve.target.textContent=='-'||eve.target.textContent=='*'||eve.target.textContent=='/'||eve.target.textContent=='%')
        {
            if(number[number.length-1]=='+'||number[number.length-1]=='-'||number[number.length-1]=='*'||number[number.length-1]=='/'||number[number.length-1]=='%')
            {
                number=number.slice(0,-1)
                number += eve.target.textContent
                input.textContent=number
            }
            else if(number.length!=0 && number[number.length-1]!='(' ){
                number += eve.target.textContent
                input.textContent=number
            }
            dotbutton=true;
        }
        
        else
        {
            number += eve.target.textContent
            input.textContent=number
        }
    })
})



