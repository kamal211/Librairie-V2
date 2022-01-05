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
    
    static ValidateForm()
    {
        let titre = 'Q';
        let regexTitre =  /^[\w @ -_]{1,20}$/;
        
        if(regexTitre.test(titre))
        return true
    else
    alert("is invalid")
        
        let nomAuteur = 'Q';
        let regexNomAuteur =  /^[\w @ -_]{1,20}$/;
        
        if(regexNomAuteur.test(nomAuteur))
        return true
       
    
        
    }
}
//Test DetailOuvrage()
    //let book2= new Ouvrage('alex','under','20','2020/12/01','english','roman')
    //console.log(book2.DetailOuvrage());
    
    //Test ValidateForm()
    //console.log(Ouvrage.ValidateForm())