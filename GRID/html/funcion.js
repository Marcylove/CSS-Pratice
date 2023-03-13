let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4'),
    btn5 = document.getElementById('btn5'),

    caja1 = document.getElementById('caja1'),
    caja2 = document.getElementById('caja2'),
    caja3 = document.getElementById('caja3'),
    caja4 = document.getElementById('caja4'),
    caja5 = document.getElementById('caja5'),
    contador = 0;

    function cambio1(){
        if (contador==0) {
            
            caja1.classList.add('mostrar');
            contador = 1;

        } else {

            caja1.classList.remove('mostrar');
            contador=0;
            
        }
    }
    function cambio2(){
        if (contador==0) {
            
            caja2.classList.add('mostrar');
            contador = 1;

        } else {

            caja2.classList.remove('mostrar');
            contador=0;
            
        }
    }
    function cambio3(){
        if (contador==0) {
            
            caja3.classList.add('mostrar');
            contador = 1;

        } else {

            caja3.classList.remove('mostrar');
            contador=0;
            
        }
    }
    function cambio4(){
        if (contador==0) {
            
            caja4.classList.add('mostrar');
            contador = 1;

        } else {

            caja4.classList.remove('mostrar');
            contador=0;
            
        }
    }
    function cambio5(){
        if (contador==0) {
            
            caja5.classList.add('mostrar');
            contador = 1;

        } else {

            caja5.classList.remove('mostrar');
            contador=0;
            
        }
    }

    btn1.addEventListener('click', cambio1, true);
    btn2.addEventListener('click', cambio2, true);
    btn3.addEventListener('click', cambio3, true);
    btn4.addEventListener('click', cambio4, true);
    btn5.addEventListener('click', cambio5, true);
    