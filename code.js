window.addEventListener("load", ()=> {

const webs = {
    actividades: "https://programs-jr.github.io/EST.Actividad/",
    personal: "https://google.com",
    tecnologias: "https://gemini.google.com",
    horarios: "https://gmail.com",
    contacto: "https://programs-jr.github.io/Login/"
}

const Act = document.querySelector(".pagAct");
const Per = document.querySelector(".pagPer");
const Tec = document.querySelector(".pagTec");
const Hor = document.querySelector(".pagHor");
const Con = document.querySelector(".pag1");

class direccionar {
    constructor(){}
    dirAct(){
        Act.addEventListener("click", ()=> {
            alert("Estas a punto de visistar la pagina de Actividades de la EST 93")
            window.location.href = `${webs.actividades}`
        })
    }
    
    dirPer(){
        Per.addEventListener("click", ()=> {
            alert("Estas visitando la pagina del Personal de la EST 93");
            window.location.href = `${webs.personal}`
        })
    }

    dirTec(){
        Tec.addEventListener("click", ()=> {
            alert("Estas visitando la pagina de las Tecnologias de la EST 93");
            window.location.href = `${webs.tecnologias}`
        })
    }

    dirHor(){
        Hor.addEventListener("click", ()=> {
            alert("Estas visitando la ppagina de los horarios de la EST 93");
            window.location.href = `${webs.horarios}`
        })
    }

    dirCon(){
        Con.addEventListener("click", ()=> {
            window.location.href = `${webs.contacto}`
        })
    }
}

const direccion = new direccionar();

direccion.dirAct();
direccion.dirPer();
direccion.dirTec();
direccion.dirHor();
direccion.dirCon();

})