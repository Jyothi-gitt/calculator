let input=document.querySelector("input");
let  buttons=document.querySelectorAll("button");
let string="";
let val;
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(evt)=>{
        if(evt.target.innerHTML=="=")
        {
            string=eval(string);
            input.value=string;
        }
        else if(evt.target.innerHTML=='C')
        {
            string="";
            input.value=string;
        }
        else if(evt.target.innerHTML=='⌫')
            {
                string=string.substring(0,string.length-1);
                input.value=string;
            }
            else if(evt.target.innerHTML=='+/-')
                {
                        string=-1 * string;
                    input.value=string;
                }
                else if(evt.target.innerHTML=='÷')
                    {
                        string+="/";
                        input.value=string;
                    }
                    else if(evt.target.innerHTML=='×')
                        {
                            string+="*";
                            input.value=string;
                        } 
                        else if(evt.target.innerHTML=='.')
                            {
                                string+=".";
                                input.value=string;
                            }
            else{
                string+=evt.target.innerHTML;
                input.value=string;
            }
    })
})