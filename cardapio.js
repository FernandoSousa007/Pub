let p1=[0,15.99,"X-salada"]
let p2=[0,"X-EGG",15.99]
let p3=[0,"X-Bacon",19.99]
let p4=[0,"X-Tudo",25.99]
let p5=[0,"X-Picanha",29.99]
let p6=[0,"Barata Frita",9.99]
let p7=[0,"Suco Natural",7.99]
let p8=[0,"Água 500ml",4.99]
let p9=[0,"Coca Cola",7.99]
let p10=[0,"Guarana",7.99]
let p11=[0,"Cerveja",6.99]
 t=0
 pe=1

function adicionar(){
    p1=p1+1
    quantidade.innerHTML = p1

}
function diminuir(){
   
   
    }
    function adicionar2(){
        alert('oi')
        p2[0]=p2[0]+1
        quantidade2.innerHTML = p2[0]
        t=t+1
        total.innerHTML=t
    
    }
    function diminuir2(){
            p2[0]=p2[0]-1
            if(p2[0]<0){
                alert("Adicione no minimo 1 produto")
                p2[0]=0
            }
        else{
            t=t-1
            total.innerHTML=t
        }
            quantidade2.innerHTML = p2[0]
        }
        function adicionar3(){
            p3[0]=p3[0]+1
            quantidade3.innerHTML = p3[0]
            t=t+1
          total.innerHTML=t
        
        }
        function diminuir3(){
                p3[0]=p3[0]-1
                if(p3[0]<0){
                    alert("Adicione no minimo 1 produto")
                    p3=[0]
                }
                else{
                    t=t-1
                    total.innerHTML=t
                }
                quantidade3.innerHTML = p3[0]
            }
            function adicionar4(){
                p4[0]=p4[0]+1
                quantidade4.innerHTML = p4[0]
                t=t+1
                total.innerHTML=t
            }
            function diminuir4(){
                    p4[0]=p4[0]-1
                    if(p4[0]<0){
                        alert("Adicione no minimo 1 produto")
                        p4[0]=0
                    }
                    else{
                        t=t-1
                        total.innerHTML=t
                    }
                    quantidade4.innerHTML = p4[0]
                }
                function adicionar5(){
                    p5[0]=p5[0]+1
                    quantidade5.innerHTML = p5[0]
                    t=t+1
                    total.innerHTML=t
                }
                function diminuir5(){
                        p5[0]=p5[0]-1
                        if(p5[0]<0){
                            alert("Adicione no minimo 1 produto")
                            p5[0]=0
                        }
                        else{
                            t=t-1
                            total.innerHTML=t
                        }
                        quantidade5.innerHTML = p5[0]
                    }
                    function adicionar6(){
                        p6[0]=p6[0]+1
                        quantidade6.innerHTML = p6[0]
                        t=t+1
                        total.innerHTML=t
                    }
                    function diminuir6(){
                            p6[0]=p6[0]-1
                            if(p6[0]<0){
                                alert("Adicione no minimo 1 produto")
                                p6[0]=0
                            }
                            else{
                                t=t-1
                                total.innerHTML=t
                            }
                            quantidade6.innerHTML = p6[0]
                        }
                        function adicionar7(){
                            p7[0]=p7[0]+1
                            quantidade7.innerHTML = p7[0]
                            t=t+1
                            total.innerHTML=t
                        }
                        function diminuir7(){
                                p7[0]=p7[0]-1
                                if(p7[0]<0){
                                    alert("Adicione no minimo 1 produto")
                                    p7[0]=0
                                }
                        
                                else{
                                    t=t-1
                                    total.innerHTML=t
                                }
                                quantidade7let .innerHTML = p7[0]
                            }
                            function adicionar8(){
                                p8[0]=p8[0]+1
                                quantidade8.innerHTML = p8[0]
                                t=t+1
                                total.innerHTML=t
                            }
                            function diminuir8(){
                                    p8[0]=p8[0]-1
                                    if(p8[0]<0){
                                        alert("Adicione no minimo 1 produto")
                                        p8[0]=0
                                    }
                                    else{
                                        t=t-1
                                        total.innerHTML=t
                                    }
                                    quantidade8.innerHTML = p8[0]
                                }
                                function adicionar9(){
                                    p9[0]=p9[0]+1
                                    quantidade9.innerHTML = p9[0]
                                    t=t+1
                                    total.innerHTML=t
                                }
                                function diminuir9(){
                                        p9[0]=p9[0]-1
                                        if(p9<0){
                                            alert("Adicione no minimo 1 produto")
                                            p9[0]=0
                                        }
                                        else{
                                            t=t-1
                                            total.innerHTML=t
                                        }
                                        quantidade9.innerHTML = p9[0]
                                    }
                                    function adicionar10(){
                                        p10[0]=p10[0]+1
                                        quantidade10.innerHTML = p10[0]
                                        t=t+1
                                        total.innerHTML=t
                                    }
                                    function diminuir10(){
                                            p10[0]=p10[0]-1
                                            if(p10[0]<0){
                                                alert("Adicione no minimo 1 produto")
                                                p10=0
                                            }
                                            else{
                                                t=t-1
                                                total.innerHTML=t
                                            }
                                            quantidade10.innerHTML = p10[0]
                                        }
                                        function adicionar11(){
                                            p11[0]=p11[0]+1
                                            quantidade11.innerHTML = p11[0]
                                            t=t+1
                                            total.innerHTML=t}
                                    
                                        function diminuir11(){
                                                p11=p11[0]-1
                                                if(p11[0]<0){
                                                    alert("Adicione no minimo 1 produto")
                                                    p11[0]=0
                                                }
                                                else{
                                                    t=t-1
                                                    total.innerHTML=t
                                                }
                                                quantidade11.innerHTML = p11[0]}
                                            
            function pedido(){
                let el= document.getElementById('conta')
                el.style.cssText =
                  'display: block;' 
                  if(p1[0]>0){
                    let es= document.getElementById('div1')
                    es.style.cssText =
                    'display:block;'
                    quantidadep1.innerHTML= p1[0]+"x"
                    produto1.innerHTML= p1[1]
                    preco1.innerHTML= "R$ "+p1[2]
                    precototal1.innerHTML= "R$ "+ p1[2]*p1[0]}
                    if(p2[0]>0){
                        let es= document.getElementById('div2')
                        es.style.cssText =
                        'display:block;'
                        quantidadep2.innerHTML= p2[0]+"x"
                        produto2.innerHTML= p2[1]
                        preco2.innerHTML= "R$ "+p2[2]
                        precototal2.innerHTML= "R$ "+ p2[2]*p2[0]}
                  if(p3[0]>0){
                    let es= document.getElementById('div3')
                    es.style.cssText =
                    'display:block;'
                    quantidadep3.innerHTML= p3[0]+"x"
                    produto3.innerHTML= p3[1]
                    preco3.innerHTML= "R$ "+p3[2]
                    precototal3.innerHTML= "R$ "+ p3[2]*p3[0]
                   
                     }
                     if(p4[0]>0){
                        let es= document.getElementById('div4')
                        es.style.cssText =
                        'display:block;'
                        quantidadep4.innerHTML= p4[0]+"x"
                        produto4.innerHTML= p4[1]
                        preco4.innerHTML= "R$ "+p4[2]
                        precototal4.innerHTML= "R$ "+ p4[2]*p4[0]}
                     if(p5[0]>0){
                        let es= document.getElementById('div5')
                         es.style.cssText =
                          'display:block;'
                        quantidadep5.innerHTML= p5[0]+"x"
                         produto5.innerHTML= p5[1]
                         preco5.innerHTML= "R$ "+p5[2]
                       precototal5.innerHTML= "R$ "+ p5[2]*p5[0]}
                       if(p6[0]>0){
                        let es= document.getElementById('div6')
                         es.style.cssText =
                          'display:block;'
                        quantidadep6.innerHTML= p6[0]+"x"
                         produto6.innerHTML= p6[1]
                         preco6.innerHTML= "R$ "+p6[2]
                       precototal6.innerHTML= "R$ "+ p6[2]*p6[0]}
                       if(p7[0]>0){
                        let es= document.getElementById('div7')
                         es.style.cssText =
                          'display:block;'
                        quantidadep7.innerHTML= p7[0]+"x"
                         produto7.innerHTML= p7[1]
                         preco7.innerHTML= "R$ "+p7[2]
                       precototal7.innerHTML= "R$ "+ p7[2]*p7[0]}
                       if(p8[0]>0){
                        let es= document.getElementById('div8')
                         es.style.cssText =
                          'display:block;'
                        quantidadep8.innerHTML= p8[0]+"x"
                         produto8.innerHTML= p8[1]
                         preco8.innerHTML= "R$ "+p8[2]
                       precototal8.innerHTML= "R$ "+ p8[2]*p8[0]}
                       if(p9[0]>0){
                        let es= document.getElementById('div9')
                         es.style.cssText =
                          'display:block;'
                        quantidadep9.innerHTML= p9[0]+"x"
                         produto9.innerHTML= p9[1]
                         preco9.innerHTML= "R$ "+p9[2]
                       precototal9.innerHTML= "R$ "+ p9[2]*p9[0]}
                       if(p10[0]>0){
                        let es= document.getElementById('div10')
                         es.style.cssText =
                          'display:block;'
                        quantidadep10.innerHTML= p5[0]+"x"
                         produto10.innerHTML= p10[1]
                         preco10.innerHTML= "R$ "+p10[2]
                       precototal10.innerHTML= "R$ "+ 105[2]*p10[0]}
                       if(p11[0]>0){
                        let es= document.getElementById('div11')
                         es.style.cssText =
                          'display:block;'
                        quantidadep11.innerHTML= p11[0]+"x"
                         produto11.innerHTML= p11[1]
                         preco11.innerHTML= "R$ "+p11[2]
                       precototal11.innerHTML= "R$ "+ p11[2]*p11[0]}


}                         

               
            
            function sair(){
             
                let el= document.getElementById('conta')
                el.style.cssText =
                  'display: none;' 
                 
             }
