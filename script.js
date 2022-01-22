
      
let arrOuvrage = [];
let selectedRow = null;
class Ouvrage
{
    constructor(titre,nomAuteur,prix,datePublication,langue,type,emailAuteur)
    {
        this.titre = titre;
        this.nomAuteur = nomAuteur;
        this.prix = prix;
        this.datePublication = datePublication;
        this.langue = langue;
        this.type = type;
        this.emailAuteur = emailAuteur;
    }
    DetailOuvrage()
    {
        return `L'ouvrage ${this.titre} est un ${this.type} en langue ${this.langue}, écrit par ${this.nomAuteur} et publié le ${this.datePublication}. Le prix de ${this.titre} est de ${this.prix} Dhs.`;

    }
    // get allValid() {
    //     let ValidationChamps = [];
    
    //     let titreRegex = /^[\w-_@?!\s]+$/;
    //     if (titreRegex.test(this.titre) && this.titre.length <= 30)
    //       ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     let auteurRegex = /^([A-Za-z-\s]+)$/;
    //     if (auteurRegex.test(this.auteur) && this.auteur.length <= 30)
    //       ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     let prixRegex = /^\d+(\.\d+)*$/;
    //     if (prixRegex.test(this.prix)) ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     if (
    //       new Date(this.datePublication) !== "Invalid Date" &&  !isNaN(new Date(this.datePublication))
    //     )
    //       ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     let langueRegex = /^(Anglais|Français|Arabe)$/;
    //     if (langueRegex.test(this.langue)) ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     let typeRegex = /^(Essai|Roman|Bande Dessinée)$/;
    //     if (typeRegex.test(this.type) && this.type !== undefined)
    //       ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (emailRegex.test(this.emailAuteur)) ValidationChamps.push(true);
    //     else ValidationChamps.push(false);
    
    //     return ValidationChamps;
    //   }
    
    get allValid()
    {
       let validChamp = []
        let regexTitre =  /^[\w @ -_]{2,20}$/;
        let regexNomAuteur =  /^[a-zA-Z ]{2,20}$/;
        let regexprix = /^\d{1,6}(\.\d{1,2})*$/;
        let regexLangue = /^Francais|Anglais|Arabe$/;
        let regexEmailAuteur = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let titreValid = regexTitre.test(this.titre);
        let auteurValid = regexNomAuteur.test(this.nomAuteur);
        let prixValid = regexprix.test(this.prix);
        let langueValid = regexLangue.test(this.langue);
        let emailAuteurValid = regexEmailAuteur.test(this.emailAuteur);
        if(titreValid == true)
          validChamp.push(true)
            else validChamp.push(false)
        if(auteurValid == true)
          validChamp.push(true)
            else validChamp.push(false)
        if(prixValid == true)
          validChamp.push(true)
            else validChamp.push(false)
        if(isNaN(this.datePublication))
          validChamp.push(true)
            else validChamp.push(false)
        if(langueValid == true)
          validChamp.push(true)
            else validChamp.push(false)
        if(emailAuteurValid == true)
          validChamp.push(true)
            else validChamp.push(false)

     return validChamp
    }
    get isValid()
    {
        for(let i=0; i < 6 ; i++)
            if(this.allValid[i]===false) return false;
            
            return true;
        
    }
    static TriArr(Ouv1,Ouv2)
    {
        let a = Ouv1.titre.toUpperCase(),
           b = Ouv2.titre.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
    }
}
function lireOuvrages()
{
    let titre = document.getElementById("titre").value;
    let nomAuteur = document.getElementById("auteur").value;
    let prix = document.getElementById("prix").value;
    let datePublication = document.getElementById("datePub").value;
    let langue = document.getElementById("langue").value;
    let type = document.querySelector('input[name="typee"]:checked').value;
    let emailAuteur = document.getElementById("emailAuteur").value;
    let ouvr = new Ouvrage(titre,nomAuteur,prix,datePublication,langue,type,emailAuteur)

    return ouvr
}
function errMsg(info)
{
    let msg ='';
    if(!info.allValid[0])msg+='Le titre , &nbsp';
    if(!info.allValid[1])msg+="Le nom d'auteur , &nbsp";
    if(!info.allValid[2])msg+='Le prix , &nbsp';
    if(!info.allValid[3])msg+='La date de publication , &nbsp';
    if(!info.allValid[4])msg+='La langue , &nbsp';
    if(!info.allValid[5])msg+="l'email d'auteur , &nbsp";
    msg+="est invalide*"
    return msg
}
function pushArr(info)
{ 
    arrOuvrage.push(info);
    arrOuvrage.sort(Ouvrage.TriArr);
    newRecord()
    resetForm()
}
function  resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("datePub").value = "";
    document.getElementById("langue").value = "";
    document.getElementById("emailAuteur").value = "";
    document.getElementById('msgErr').innerHTML = '';

   
}
function newRecord() {
    let newTbody = document.createElement('tbody');
    for (let i = 0; i<arrOuvrage.length; i++){
    let newRow = newTbody.insertRow(i);
     newRow.insertCell(0).textContent = arrOuvrage[i].titre;
    newRow.insertCell(1).textContent = arrOuvrage[i].nomAuteur;
    newRow.insertCell(2).textContent = arrOuvrage[i].prix;
    newRow.insertCell(3).textContent = arrOuvrage[i].datePublication;
    newRow.insertCell(4).textContent= arrOuvrage[i].langue;
    newRow.insertCell(5).textContent = arrOuvrage[i].type;
    newRow.insertCell(6).textContent = arrOuvrage[i].emailAuteur;
    newRow.insertCell(7).innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
                     
                    }  
                    let oldTbody = document.getElementById('list').getElementsByTagName('tbody')[0];
                    oldTbody.parentNode.replaceChild(newTbody,oldTbody)
                let arrToJson = JSON.stringify(arrOuvrage);
                localStorage.setItem("arrOuvrage",arrToJson)
                    
            
                 }
                 function  onDelete(td) {
                    if (confirm('Are you sure to delete this record ?')) {
                        row = td.parentElement.parentElement;
                        document.getElementById("list").deleteRow(row.rowIndex);
                        resetForm();
                    }
                
                }
                function updateRecord(info) {
                    if(info.isValid){
                    selectedRow.cells[0].innerHTML = info.titre;
                    selectedRow.cells[1].innerHTML = info.nomAuteur;
                    selectedRow.cells[2].innerHTML = info.prix;
                    selectedRow.cells[3].innerHTML = info.datePublication;
                    selectedRow.cells[4].innerHTML = info.langue;
                    selectedRow.cells[5].innerHTML = info.type;
                    selectedRow.cells[6].innerHTML = info.emailAuteur;
                    resetForm()
                   }
                   else  document.getElementById('msgErr').innerHTML = errMsg(info)
                   
                }
                
                function onEdit(td) {
                    selectedRow = td.parentElement.parentElement;
                    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
                    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
                    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
                    document.getElementById("datePub").value = selectedRow.cells[3].innerHTML;
                    document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
                    document.getElementById("emailAuteur").value = selectedRow.cells[6].innerHTML;
                
                }
                
    function print() {
        var tab = document.getElementById('list');
        var win = window.open('', '', 'height=700,width=700');
        win.document.write(tab.outerHTML);
        win.document.close();
        win.print();
    }

document.getElementById("submit").addEventListener("click" ,function submit(){
   monOuv = lireOuvrages()
   if(selectedRow === null){
    if(monOuv.isValid){
    alert(monOuv.DetailOuvrage())
        pushArr(monOuv)
        
        }
    else 
    document.getElementById('msgErr').innerHTML = errMsg(monOuv)
    }
    else updateRecord(monOuv)
    

})
    console.log(arrOuvrage)
