        var btnschere = document.getElementsByClassName('user_btn');
        var userimages = document.getElementsByClassName('user_img');   
        var computerimages = document.getElementsByClassName('comp_img'); 
        var counteruser = 0;
        var countercomp = 0;
    
        const elems = ['scissors', 'rock', 'paper'];

        
//        Zufallsnumber und der zugriff auf Array mit schere stein papier
            function generatenumb(){
                
                var numb = Math.random()*(2 - 0 + 1) + 0;
                var endnumb = Math.floor(numb);
                
                return elems[endnumb];
                
            }
        
    
    
        function compareschere(){ 
        
            
//                    Bei click gehen alle images erst weg 
                    for(let z = 0; z<userimages.length;z++){
 
                        document.getElementsByClassName('user_img')[z].style.visibility = 'hidden';
                        document.getElementsByClassName('comp_img')[z].style.visibility = 'hidden';

                    }
            
            
//            Macht die user schere wieder sichtbar 
            document.getElementsByClassName('user_img')[0].style.visibility = 'visible';
        
                    
            
//            Ändert die farbe auf standard einstellung
            for(let i = 0;i<elems.length;i++){
                
                document.getElementsByClassName('comp_btn')[i].style.color = 'black';
                
            }
            
            
            
               switch(generatenumb()) {

                case 'scissors':
                       console.log('scissors');
                       console.log('draw');
                        document.getElementById('headline1').innerHTML ="draw";
                       counteruser++;
                       countercomp++;
                        //ändert schere button farbe
                       document.getElementsByClassName('comp_btn')[0].style.color = 'red';
                        //Macht wieder  img schere sichtbar
                       document.getElementsByClassName('comp_img')[0].style.visibility = 'visible';
                       break;

                   case 'rock': 
                        console.log('rock');
                        console.log('COMPUTER wins');
                        document.getElementById('headline1').innerHTML ="Computer wins";
                       countercomp++;
                       //ändert stein  button farbe
                        document.getElementsByClassName('comp_btn')[1].style.color = 'red';
                        //Macht computer stein img sichtbar 
                        document.getElementsByClassName('comp_img')[1].style.visibility = 'visible';
                       break;

                case 'paper': 
                       console.log('paper');
                       console.log('you win');
                       document.getElementById('headline1').innerHTML ="you win";
                       counteruser++;
                       
                       //ändert papier button farbe
                        document.getElementsByClassName('comp_btn')[2].style.color = 'red';
                        //Macht computer papier img sichtbar 
                        document.getElementsByClassName('comp_img')[2].style.visibility = 'visible';
                      
                       break;


               }
            
            
            document.getElementById('table1').innerHTML = counteruser;
            document.getElementById('table2').innerHTML = countercomp;
            
        }
        
        
        function comparestein(){
            
            
//                    Bei click gehen alle images erst weg 
                    for(let z = 0; z<userimages.length;z++){
 
                        document.getElementsByClassName('user_img')[z].style.visibility = 'hidden';
                        document.getElementsByClassName('comp_img')[z].style.visibility = 'hidden';

                    }
            
            
            
            
//            Macht die user schere wieder sichtbar
            document.getElementsByClassName('user_img')[1].style.visibility = 'visible';
  
            
//            Ändert die farbe auf standard einstellung
            for(let i = 0;i<elems.length;i++){
                
                document.getElementsByClassName('comp_btn')[i].style.color = 'black';
                
            }
            
            
            
               switch(generatenumb()) {

                case 'scissors':
                       console.log('scissors');
                       console.log('you win');
                       document.getElementById('headline1').innerHTML ="You win";
                       counteruser++;
                        //ändert schere button  farbe
                        document.getElementsByClassName('comp_btn')[0].style.color = 'red';
                       //Macht wieder computer img schere sichtbar
                       document.getElementsByClassName('comp_img')[0].style.visibility = 'visible';
                       break;

                   case 'rock': 
                       console.log('rock');
                       console.log('draw');
                        document.getElementById('headline1').innerHTML ="draw";
                       counteruser++;
                       countercomp++;
                       //ändert stein button farbe 
                       document.getElementsByClassName('comp_btn')[1].style.color = 'red';
                       //Macht computer stein img sichtbar 
                        document.getElementsByClassName('comp_img')[1].style.visibility = 'visible';
                       break;

                case 'paper': 
                       console.log('paper');
                       console.log('COMPUTER wins');
                        document.getElementById('headline1').innerHTML ="Computer wins";
                       countercomp++;
                       //ändert papier button farbe 
                        document.getElementsByClassName('comp_btn')[2].style.color = 'red';               
                       //Macht computer papier img sichtbar 
                        document.getElementsByClassName('comp_img')[2].style.visibility = 'visible';
                     
                       break;


               }
            
              
            document.getElementById('table1').innerHTML = counteruser;
            document.getElementById('table2').innerHTML = countercomp;
            
            
        }
        
        
        
         function comparepapier(){
                
                                
//                    Bei click gehen alle images erst weg 
                    for(let z = 0; z<userimages.length;z++){
 
                        document.getElementsByClassName('user_img')[z].style.visibility = 'hidden';
                        document.getElementsByClassName('comp_img')[z].style.visibility = 'hidden';

                    }
             
                         
//            Macht die user schere wieder sichtbar 
            document.getElementsByClassName('user_img')[2].style.visibility = 'visible';
        
                    
            
        
             
//            Ändert die farbe auf standard einstellung    
            for(let i = 0;i<elems.length;i++){
                
                document.getElementsByClassName('comp_btn')[i].style.color = 'black';
                
            }
            
            
               switch(generatenumb()) {  

                case 'scissors':
                       console.log('scissors');
                       console.log('COMPUTER wins');
                     document.getElementById('headline1').innerHTML ="Computer wins";
                       countercomp++;
                       //ändert schere button farbe
                       document.getElementsByClassName('comp_btn')[0].style.color = 'red';
                       //Macht wieder computer img schere sichtbar
                       document.getElementsByClassName('comp_img')[0].style.visibility = 'visible';
                       
                       break;

                   case 'rock': 
                       console.log('rock');
                       console.log('you win');
                       document.getElementById('headline1').innerHTML ="you win";
                       counteruser++;
                        //ändert schere button farbe
                        document.getElementsByClassName('comp_btn')[1].style.color = 'red';
                       //Macht computer stein img sichtbar 
                        document.getElementsByClassName('comp_img')[1].style.visibility = 'visible';
                       
                       break;

                case 'paper': 
                       console.log('paper');
                       console.log('draw');
                        document.getElementById('headline1').innerHTML ="draw";
                       counteruser++;
                       countercomp++;
                       //ändert schere button farbe
                        document.getElementsByClassName('comp_btn')[2].style.color = 'red';
                       //Macht computer papier img sichtbar 
                        document.getElementsByClassName('comp_img')[2].style.visibility = 'visible';
                     
                       break;
                       


               }
             
                document.getElementById('table1').innerHTML = counteruser;
                document.getElementById('table2').innerHTML = countercomp;
            
            
        }
    
    btnschere[0].addEventListener('click', compareschere, false);
    btnschere[1].addEventListener('click', comparestein, false);
    btnschere[2].addEventListener('click', comparepapier, false);