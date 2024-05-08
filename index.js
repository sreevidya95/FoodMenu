let select1 = document.getElementById("menu");
let s = document.getElementById("items");
     let opt=new Option();
     opt.text="select one...";
     opt.value="";
     select1.appendChild(opt);
     items(s);
window.onload=function(){
    let menu = {
        drinks : [
           "Water", "Tea", "Sweet Tea", 
           "Coke", "Dr. Pepper", "Sprite"
         ],
        entrees : [
           "Hamburger w/ Fries", 
           "Grilled Cheese w/ Tater Tots",
           "Grilled Chicken w/ Veggies", 
           "Chicken Fried Steak w/ Mashed Potatoes",
           "Fried Shrimp w/ Coleslaw", 
           "Veggie Plate"
        ],
        desserts: [
           "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
        ]
     };
     
     loadmenu(Object.keys(menu));
     select1.onchange=function(){
       let s = document.getElementById("items");
        let selectedOption=select1.value;
                for(let m of Object.keys(menu)){
                    if(selectedOption==''){
                        items(s);
                        
                    }
                    else if(m==selectedOption && m!=''){
                        if(s.length>1){
                            while(s.length>=1){
                               
                                s.remove(0);
                            }
                        }
                        for(let i =0; i<menu[m].length;i++){
                            let opt= new Option();
                            opt.text=menu[m][i];
                            opt.value=menu[m][i];
                            s.appendChild(opt);
                        }
                    }
                }
                
                
        }

     }

function loadmenu(menu){
    
      for(let m of menu){
      let opt=new Option();
       opt.value=m;
       opt.text=m;
       select1.appendChild(opt);
      }
}
function items(s){
    if(s.length>=1){
        while(s.length>=1){
                               
            s.remove(0);
        }
    }
    console.log(s);
    let opt1=new Option();
     opt1.text="select one...";
     opt1.value="";
     s.appendChild(opt1);
}
