let p1=[0,15.99,"X-salada"]
let p2=[0,"X-EGG",15.99]
let p3=[0,"X-Bacon",19.99]
p4=0
p5=0
p6=0
p7=0
p8=0
p9=0
p10=0
p11=0
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
                p4=p4+1
                quantidade4.innerHTML = p4
                t=t+1
                total.innerHTML=t
            }
            function diminuir4(){
                    p4=p4-1
                    if(p4<0){
                        alert("Adicione no minimo 1 produto")
                        p4=0
                    }
                    else{
                        t=t-1
                        total.innerHTML=t
                    }
                    quantidade4.innerHTML = p4
                }
                function adicionar5(){
                    p5=p5+1
                    quantidade5.innerHTML = p5
                    t=t+1
                    total.innerHTML=t
                }
                function diminuir5(){
                        p5=p5-1
                        if(p5<0){
                            alert("Adicione no minimo 1 produto")
                            p5=0
                        }
                        else{
                            t=t-1
                            total.innerHTML=t
                        }
                        quantidade5.innerHTML = p5
                    }
                    function adicionar6(){
                        p6=p6+1
                        quantidade6.innerHTML = p6
                        t=t+1
                        total.innerHTML=t
                    }
                    function diminuir6(){
                            p6=p6-1
                            if(p6<0){
                                alert("Adicione no minimo 1 produto")
                                p6=0
                            }
                            else{
                                t=t-1
                                total.innerHTML=t
                            }
                            quantidade6.innerHTML = p6
                        }
                        function adicionar7(){
                            p7=p7+1
                            quantidade7.innerHTML = p7
                            t=t+1
                            total.innerHTML=t
                        }
                        function diminuir7(){
                                p7=p7-1
                                if(p7<0){
                                    alert("Adicione no minimo 1 produto")
                                    p7=0
                                }
                        
                                else{
                                    t=t-1
                                    total.innerHTML=t
                                }
                            }
                            function adicionar8(){
                                p8=p8+1
                                quantidade8.innerHTML = p8
                                t=t+1
                                total.innerHTML=t
                            }
                            function diminuir8(){
                                    p8=p8-1
                                    if(p8<0){
                                        alert("Adicione no minimo 1 produto")
                                        p8=0
                                    }
                                    else{
                                        t=t-1
                                        total.innerHTML=t
                                    }
                                    quantidade8.innerHTML = p8
                                }
                                function adicionar9(){
                                    p9=p9+1
                                    quantidade9.innerHTML = p9
                                    t=t+1
                                    total.innerHTML=t
                                }
                                function diminuir9(){
                                        p9=p9-1
                                        if(p9<0){
                                            alert("Adicione no minimo 1 produto")
                                            p9=0
                                        }
                                        else{
                                            t=t-1
                                            total.innerHTML=t
                                        }
                                        quantidade9.innerHTML = p9
                                    }
                                    function adicionar10(){
                                        p10=p10+1
                                        quantidade10.innerHTML = p10
                                        t=t+1
                                        total.innerHTML=t
                                    }
                                    function diminuir10(){
                                            p10=p10-1
                                            if(p10<0){
                                                alert("Adicione no minimo 1 produto")
                                                p10=0
                                            }
                                            else{
                                                t=t-1
                                                total.innerHTML=t
                                            }
                                            quantidade10.innerHTML = p10
                                        }
                                        function adicionar11(){
                                            p11=p11+1
                                            quantidade11.innerHTML = p11
                                            t=t+1
                                            total.innerHTML=t}
                                    
                                        function diminuir11(){
                                                p11=p11-1
                                                if(p11<0){
                                                    alert("Adicione no minimo 1 produto")
                                                    p11=0
                                                }
                                                else{
                                                    t=t-1
                                                    total.innerHTML=t
                                                }
                                                quantidade11.innerHTML = p11}
                                            
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

                  if(p3[0]>0){
                    let es= document.getElementById('div3')
                    es.style.cssText =
                    'display:block;'
                    quantidadep3.innerHTML= p3[0]+"x"
                    produto3.innerHTML= p3[1]
                    preco3.innerHTML= "R$ "+p3[2]
                    precototal3.innerHTML= "R$ "+ p3[2]*p3[0]
                   
                     }

}

               
            
            function sair(){
             
                let el= document.getElementById('conta')
                el.style.cssText =
                  'display: none;' 
                 
             }
