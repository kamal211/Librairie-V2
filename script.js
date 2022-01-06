let arrOuvrage = [{
    titre:"zldo",
    auteur :"franki",
    prix :30,
    date :"12/02/2002",
    langue :"Anglais",
    type:"ROMAN",
    email:"mysite123@gmail.br"
},
{
    titre:"mldo",
    auteur :"franki",
    prix :30,
    date :"12/02/2002",
    langue :"Anglais",
    type:"ROMAN",
    email:"mysite123@gmail.br"
},

{
    titre:"eldo",
    auteur :"franki",
    prix :30,
    date :"12/02/2002",
    langue :"Anglais",
    type:"ROMAN",
    email:"mysite123@gmail.br"
},
{
    titre:"Hldo",
    auteur :"franki",
    prix :30,
    date :"12/02/2002",
    langue :"Anglais",
    type:"ROMAN",
    email:"mysite123@gmail.br"
}];
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
        let titre = 'Akl  ';
        let nomAuteur = 'ref';
        let prix = 67;
        let langue = "Anglais";
        let type = "ROMAN";
        let emailAuteur = 'mysite123@gmail.br'

        let regexTitre =  /^[\w @ -_]{1,20}$/;
        let regexNomAuteur =  /^[a-z ]{1,20}$/;
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
        alert("title is inValid")
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
    static TakeOuvrage()
    {
        let ouvrage ={
            titre:"",
            auteur :"franki",
            prix :30,
            date :"12/02/2002",
            langue :"Anglais",
            type:"ROMAN",
            email:"mysite123@gmail.br"
        }
        if(ouvrage.ValidateOuvrage() == true)
        {
            return arrOuvrage.push(ouvrage)
        }
        else 
    
        return false

    }
    
}
//Test DetailOuvrage()
    //let book2= new Ouvrage('alex','under','20','2020/12/01','english','roman')
    //console.log(book2.DetailOuvrage());

//Test ValidateForm()
     console.log(Ouvrage.ValidateOuvrage())

//Test array Sort()
    console.log(arrOuvrage)