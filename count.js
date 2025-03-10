      const countNum = document.querySelector(".count");
      const reset = document.querySelector("#btn");


      
      // let num = Number(localStorage.getItem("greeting"));
      // countNum.innerHTML = num;
      let num = 0;
        const counting = () =>{ 
          num++;
          countNum.innerHTML = num;
          localStorage.setItem('greeting',num)
        }

      document.body.addEventListener('keydown',(e)=>{
        if(e.code == 'Space'){
          counting();
        }
      })

      document.body.addEventListener('click',()=>{
        counting();
      });

      reset.addEventListener('click',()=>{
        num = -1;
      })
    
    
  
