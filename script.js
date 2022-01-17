
let selectedRow = null
      
let arrOuvrage = [
//     {
//     titre:"zldo",
//     auteur :"franki",
//     prix :30,
//     date :"12/02/2002",
//     langue :"Anglais",
//     type:"ROMAN",
//     email:"mysite123@gmail.br"
// },


// {
//     titre:"eldo",
//     auteur :"franki",
//     prix :30,
//     date :"12/02/2002",
//     langue :"Anglais",
//     type:"ROMAN",
//     email:"mysite123@gmail.br"
// },
// {
//     titre:"Hldo",
//     auteur :"franki",
//     prix :30,
//     date :"12/02/2002",
//     langue :"Anglais",
//     type:"ROMAN",
//     email:"mysite123@gmail.br"
// }
];

arrOuvrage.sort(function (x, y) {
    let a = x.titre.toUpperCase(),
        b = y.titre.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});
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
    
    
    get isntValid()
    {
        let regexTitre =  /^[\w @ -_]{2,20}$/;
        let regexNomAuteur =  /^[a-zA-Z ]{1,20}$/;
        let regexprix = /^\d{1,6}(\.\d{1,2})*$/;
        let regexLangue = /^(Francais)|(Anglais)|(Arabe)*\g$/;
        let regexEmailAuteur = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let titreValid = regexTitre.test(this.titre);
        let auteurValid = regexNomAuteur.test(this.nomAuteur);
        let prixValid = regexprix.test(this.prix);
        let datePublication = this.datePublication;
        let langueValid = regexLangue.test(this.langue);
        let emailAuteurValid = regexEmailAuteur.test(this.emailAuteur);
        if(titreValid == false){
            alert("titre is invalid")
         return titre.focus()
        
        }
        if(auteurValid == false)
        {
        alert("auteur is invalid")
        return auteur.focus()
        }
        if(prixValid == false)
        {
        alert("prix is invalid")
        return prix.focus()
        }
        if(datePublication === "")
        {
        alert("date is invalid")
        return datePub.focus()
        }
        if(langueValid == false)
        {
        alert("langue is invalid")
        return langue.focus()
        }
        if(emailAuteurValid == false)
        {
        alert("email is invalid")
        return emailAuteur.focus()
        }
     return true
    }


}

function  resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("datePub").value = "";
    document.getElementById("langue").value = "";
 
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
    
    if (ouvr.isntValid == true)
    {
        arrOuvrage.push(ouvr);
      
    }
    else 
    return false


}
function  newRecord() {
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
                    let oldTbody = document.getElementsById('list').document.getElementsByTagName('tbody')[0];
                    document.getElementsById('list').replaceChild(oldTbody,newTbody);
}

document.getElementById("submit").addEventListener("click" ,function submit(){
   
    if( lireOuvrages())

    {
       
        newRecord()
    }
    else 
     return false
    
  
})

//  console.log(lireOuvrages())
//Test DetailOuvrage()
    // let book2= new Ouvrage('alex','under','20','2020/12/01','english','roman')
    // console.log(book2.DetailOuvrage());

//Test ValidateForm()
    //  console.log(readFormData())

//Test array Sort()
    console.log(arrOuvrage)
   

    // function updateRecord(infoBook) {
//     selectedRow.cells[0].innerHTML = infoBook.titre;
//     selectedRow.cells[1].innerHTML = infoBook.auteur;
//     selectedRow.cells[2].innerHTML = infoBook.prix;
//     selectedRow.cells[3].innerHTML = infoBook.datePub;
//     selectedRow.cells[4].innerHTML = infoBook.langue;
//     selectedRow.cells[5].innerHTML = infoBook.type;
//     selectedRow.cells[6].innerHTML = infoBook.emailAuteur;
// };
// function  onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("list").deleteRow(row.rowIndex);
//         resetForm();
//     }

// }


  
// function onFormSubmit(){
//         // let infoBook = Ouvrage.readFormData();
//     if (Ouvrage.ValidateOuvrage())
//      Ouvrage.newRecord(infoBook)
//     else {
//     Ouvrage.updateRecord(infoBook)
//     Ouvrage.resetForm();}
//     }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement
//     ;
//     document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("datePub").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
  
    
    
//                        console.log(selectedRow)
 
// };