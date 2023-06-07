let p1=[0,"Esfiha",7.99,0]
let p2=[0,"Kibe",7.99,0]
let p3=[0,"Kafta",12.99,0]
let p4=[0,"Pão Sírio",8.99,0]
let p5=[0,"Labneh",19.99,0]
let p6=[0,"Falafel",15.99,0]
let p7=[0,"Suco Natural",7.99,0]
let p8=[0,"Água 500ml",4.99,0]
let p9=[0,"Coca-Cola",7.99,0]
let p10=[0,"Guaraná",7.99,0]
let p11=[0,"Cerveja",6.99,0]
 t=0
 pe=1
 c=3
 var a=[0]
 function formatamoeda(numero){
 return numero.toFixed(2).replace(".",",")}
 function assinar(){

    nc= ncartao.value
    nc4 = nc.slice(-4)
    a[0]= nc4
    alert(a[0])
    }
function adicionar(){
    p1[0]=p1[0]+1
  
    t=t+1
    total.innerHTML=t
    quantidade1.innerHTML= p1[0]
  

}
function diminuir(){
    p1[0]=p1[0]-1
   
            if(p1[0]<0){
                alert("Adicione no minimo 1 produto")
                p1[0]=0
   
    }
    else{
        t=t-1
        total.innerHTML=t
    }
        quantidade1.innerHTML = p1[0]
    }
    function adicionar2(){
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
                                quantidade7 .innerHTML = p7[0]
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
                                                p11[0]=p11[0]-1
                                                if(p11[0]<0){
                                                    alert("Adicione no minimo 1 produto")
                                                    p11[0]=0
                                                }
                                                else{
                                                    t=t-1
                                                    total.innerHTML=t
                                                }
                                              
                                                quantidade11.innerHTML = p11[0]
                                            }
                                            
            function pedido(){
                let el= document.getElementById('conta')
                let es= document.getElementById('cardapiod')
                let et= document.getElementById('pedir')
                let eo= document.getElementById('concluir2') 
                eo.style.cssText =
                  'display: block;' 
                es.style.cssText =
                'background-color: #918a82'
                et.style.cssText =
                'background-color: #fff3e5;'
                el.style.cssText =
                  'display: block;' 
                  if(p1[0]>0){
                    let es= document.getElementById('div1')
                    es.style.cssText =
                    'display:block;'
                    quantidadep1.innerHTML= p1[0]+"x"
                    produto1.innerHTML= p1[1]
                    preco1.innerHTML= "R$ "+formatamoeda(p1[2])
                    p1[3]=p1[0]*p1[2]
                    precototal1.innerHTML= "R$ "+ formatamoeda(p1[3])}
                    if(p2[0]>0){
                        let es= document.getElementById('div2')
                        es.style.cssText =
                        'display:block;'
                        quantidadep2.innerHTML= p2[0]+"x"
                        produto2.innerHTML= p2[1]
                        preco2.innerHTML= "R$ "+formatamoeda(p2[2])
                        p2[3]=p2[0]*p2[2]
                        precototal2.innerHTML= "R$ "+ formatamoeda(p2[3])}
                  if(p3[0]>0){
                    let es= document.getElementById('div3')
                    es.style.cssText =
                    'display:block;'
                    quantidadep3.innerHTML= p3[0]+"x"
                    produto3.innerHTML= p3[1]
                    preco3.innerHTML= "R$ "+formatamoeda(p3[2])
                    p3[3]=p3[0]*p3[2]
                    precototal3.innerHTML= "R$ "+ formatamoeda(p3[3])
                   
                     }
                     if(p4[0]>0){
                        let es= document.getElementById('div4')
                        es.style.cssText =
                        'display:block;'
                        quantidadep4.innerHTML= p4[0]+"x"
                        produto4.innerHTML= p4[1]
                        preco4.innerHTML= "R$ "+formatamoeda(p4[2])
                        p4[3]=p4[0]*p4[2]
                        precototal4.innerHTML= "R$ "+ formatamoeda(p4[3])}
                     if(p5[0]>0){
                        let es= document.getElementById('div5')
                         es.style.cssText =
                          'display:block;'
                        quantidadep5.innerHTML= p5[0]+"x"
                         produto5.innerHTML= p5[1]
                         preco5.innerHTML= "R$ "+formatamoeda(p5[2])
                         p5[3]=p5[0]*p5[2]
                       precototal5.innerHTML= "R$ "+ formatamoeda(p5[3])}
                       if(p6[0]>0){
                        let es= document.getElementById('div6')
                         es.style.cssText =
                          'display:block;'
                        quantidadep6.innerHTML= p6[0]+"x"
                         produto6.innerHTML= p6[1]
                         preco6.innerHTML= "R$ "+formatamoeda(p6[2])
                         p6[3]=p6[0]*p6[2]
                       precototal6.innerHTML= "R$ "+ formatamoeda(p6[3])}
                       if(p7[0]>0){
                        let es= document.getElementById('div7')
                         es.style.cssText =
                          'display:block;'
                        quantidadep7.innerHTML= p7[0]+"x"
                         produto7.innerHTML= p7[1]
                         preco7.innerHTML= "R$ "+formatamoeda(p7[2])
                         p7[3]=p7[0]*p7[2]
                       precototal7.innerHTML= "R$ "+ formatamoeda(p8[2])}
                       if(p8[0]>0){
                        let es= document.getElementById('div8')
                         es.style.cssText =
                          'display:block;'
                        quantidadep8.innerHTML= p8[0]+"x"
                         produto8.innerHTML= p8[1]
                         preco8.innerHTML= "R$ "+formatamoeda(p8[2])
                         p8[3]=p8[0]*p8[2]
                       precototal8.innerHTML= "R$ "+ formatamoeda(p8[3])}
                       if(p9[0]>0){
                        let es= document.getElementById('div9')
                         es.style.cssText =
                          'display:block;'
                        quantidadep9.innerHTML= p9[0]+"x"
                         produto9.innerHTML= p9[1]
                         preco9.innerHTML= "R$ "+formatamoeda(p9[2])
                         p9[3]=p9[0]*p9[2]
                       precototal9.innerHTML= "R$ "+ formatamoeda(p9[3])}
                       if(p10[0]>0){
                        let es= document.getElementById('div10')
                         es.style.cssText =
                          'display:block;'
                        quantidadep10.innerHTML= p10[0]+"x"
                         produto10.innerHTML= p10[1]
                         preco10.innerHTML= "R$ "+formatamoeda(p10[2])
                         p10[3]=p10[0]*p10[2]
                       precototal10.innerHTML= "R$ "+ formatamoeda(p10[3])}
                       if(p11[0]>0){
                        let es= document.getElementById('div11')
                         es.style.cssText =
                          'display:block;'
                        quantidadep11.innerHTML= p11[0]+"x"
                         produto11.innerHTML= p11[1]
                         preco11.innerHTML= "R$ "+formatamoeda(p11[2])
                         p11[3]=p11[0]*p11[2]
                       precototal11.innerHTML= "R$ "+ formatamoeda(p11[3])}
                        vt=p1[3]+p2[3]+p3[3]+p4[3]+p5[3]+p6[3]+p7[3]+p8[3]+p9[3]+p10[3]+p11[3]
                        tprod.innerHTML= t +'x produtos'
                         vtotal.innerHTML='R$ '+formatamoeda(vt)
                         totavc.innerHTML= "Valor à pagar RS"+formatamoeda(vt)
                         
                         
                        

}                 
function adicionarc(){
    let el= document.getElementById('ccupom')
    el.style.cssText =
                  'display: block;' 
}
function confirmar(){
    let el= document.getElementById('cupomd').value
    if(el=="pubplus"||el=="#10off" ){
vtc= vt-(vt*0.1)
c=c-1
totavc.innerHTML= "Valor a a pagar RS"+formatamoeda(vtc)  
tscupom.innerHTML= c+ 'x disponiveis'
let es= document.getElementById('ccupom')
    es.style.cssText =
                  'display: none;' }
else{
    alert('Cupom Invalido')
}}


            
            function conta(){
                c=c+1
                tscupom.innerHTML= c+ 'x disponiveis'
                let el= document.getElementById('conta')
                let es= document.getElementById('cardapiod')
                let et= document.getElementById('pedir')
                let eo= document.getElementById('concluir2') 
                eo.style.cssText =
                  'display: none;' 
                es.style.cssText =
                'background-color: #fff3e5;' 
                 et.style.cssText =
                 'background-color: #918a82'
                el.style.cssText =
                  'display: none;' 
            }
