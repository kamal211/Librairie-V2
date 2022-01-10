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
    
    static ValidateOuvrage()
    {
        let titre = document.getElementById("titre");
        let nomAuteur = document.getElementById("auteur").value;
        let prix = document.getElementById("prix").value;
        let langue = document.getElementById("langue").value;
        let type = document.querySelector('input[name="typee"]:checked');
        let emailAuteur = document.getElementById("emailAuteur").value;

        let regexTitre =  /^[\w @ -_]{2,20}$/;
        let regexNomAuteur =  /^[a-zA-Z ]{1,20}$/;
        let regexprix = /^\d{1,6}(\.\d{1,2})*$/;
        let regexLangue = /^(Francais|Anglais|Arabe)*$/;
        let regexType = /^(ROMAN|ESSAI|BANDE-DESSINEE)*$/;
        let regexEmailAuteur = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let auteurValid = regexNomAuteur.test(nomAuteur);
        let titreValid = regexTitre.test(titre);
        let prixValid = regexprix.test(prix);
        let langueValid = regexLangue.test(langue);
        let typeValid = regexType.test(type);
        let emailAuteurValid = regexEmailAuteur.test(emailAuteur);
        if(titreValid == false){
            alert("titre is invalid")
         titre.focus()
        
        }
        if(auteurValid == false)
        {
        alert("auteur is invalid")
        }
        if(prixValid == false)
        {
        alert("prix is invalid")
        }
        if(langueValid == false)
        {
        alert("langue is invalid")
        }
        if(langueValid == false)
        {
        alert("langue is invalid")
        }
        if(typeValid == false)
        {
        alert("type is invalid")
        }
        if(emailAuteurValid == false)
        {
        alert("email is invalid")
        }
     return true
    }
    static onEdit(td) {
        selectedRow = td.parentElement.parentElement
        ;
        document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
        document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
        document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
        document.getElementById("datePub").value = selectedRow.cells[3].innerHTML;
        document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
      
        
        
                           console.log(selectedRow)
     
    };
    static updateRecord(infoBook) {
        selectedRow.cells[0].innerHTML = infoBook.titre;
        selectedRow.cells[1].innerHTML = infoBook.auteur;
        selectedRow.cells[2].innerHTML = infoBook.prix;
        selectedRow.cells[3].innerHTML = infoBook.datePub;
        selectedRow.cells[4].innerHTML = infoBook.langue;
        selectedRow.cells[5].innerHTML = infoBook.type;
        selectedRow.cells[6].innerHTML = infoBook.emailAuteur;
    };
    static  onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("list").deleteRow(row.rowIndex);
            resetForm();
        }
    
    }
    static resetForm() {
        document.getElementById("titre").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("prix").value = "";
        document.getElementById("datePub").value = "";
        document.getElementById("langue").value = "";
        selectedRow = null;
    }
    static newRecord(infoBook) {
        let table = document.getElementById("list").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        let cell1 = newRow.insertCell(0);
        cell1.innerHTML = infoBook.titre;
        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = infoBook.auteur;
        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = infoBook.prix;
        let cell4 = newRow.insertCell(3);
        cell4.innerHTML = infoBook.datePub;
        let cell5 = newRow.insertCell(4);
        cell5.innerHTML = infoBook.langue;
        let cell6 = newRow.insertCell(5);
        cell6.innerHTML = infoBook.type;
        let cell7 = newRow.insertCell(6);
        cell7.innerHTML = infoBook.emailAuteur;
        let cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                           <a onClick="onDelete(this)">Delete</a>`;
                           
          
    }
    static readFormData() {

  
        let infoBook =  {
            // titre:"mldo",
            // auteur :"franki",
            // prix :30,
            // date :"12/02/2002",
            // langue :"Anglais",
            // type:"ROMAN",
            // email:"mysite123@gmail.br",
            
            titre : document.getElementById("titre").value,
            auteur : document.getElementById("auteur").value,
            prix : document.getElementById("prix").value,
            datePub : document.getElementById("datePub").value,
            langue : document.getElementById("langue").value,
            type : document.querySelector('input[name="typee"]:checked').value,
            emailAuteur : document.getElementById("emailAuteur").value
        };
       
        let book2= new Ouvrage(infoBook.titre,infoBook.auteur,infoBook.prix,infoBook.datePub,infoBook.langue,infoBook.type)
        alert(book2.DetailOuvrage());
        arrOuvrage.push(infoBook);
    if (Ouvrage.ValidateOuvrage())
        return infoBook;
    
    };
}


let selectedRow = null;
function onFormSubmit() {
    var infoBook = Ouvrage.readFormData();
    if (selectedRow == null){
        
        Ouvrage.newRecord(infoBook);
        
    }
    else
        Ouvrage.updateRecord(infoBook);
    Ouvrage.resetForm();

}
// console.log(onFormSubmit)


 
//Test DetailOuvrage()
    //let book2= new Ouvrage('alex','under','20','2020/12/01','english','roman')
    //console.log(book2.DetailOuvrage());

//Test ValidateForm()
    //  console.log(readFormData())

//Test array Sort()
    console.log(arrOuvrage)
   