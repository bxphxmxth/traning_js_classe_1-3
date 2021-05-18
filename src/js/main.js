// 1
class Personnage{
    constructor(age,nom,ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () =>{
            console.log(`bonjour je m'appelle ${this.nom}`);
        }
    }
}

let naz = new Personnage(24,"naz", "bruxelles");
let ju = new Personnage (23,"ju","bruxelles");

naz.sePresenter();
ju.sePresenter();

// ## EXO2
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };


class Lieux {
    constructor(nom,contenu,ingredients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let maison = new Lieux("maison", [], []);
let epicerie = new Lieux("épicerie", [], []);
let kouizine = new Lieux("Kouizine", [], []);


// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

class Ingredients{
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 3.25);
let epices = new Ingredients("epices", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }

class Personne{
    constructor(nom,lieu,argent,panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.seDeplacer = (x)=>{

        };
        this.payer = (x)=>{

        };
        this.couper = (x,y)=>{

        };
    }
}

let nazou = new Personnage("nazou", "bx", 2, []);
console.log(nazou);


// ## Exo3

// ### Créer une class Objet
// ### _Propriétés : nom, prix
class Objet{
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}

// III
// ### Créer deux instances d'objets avec un nom et un prix

let drums = new Objet("drums", 1440);
let synth = new Objet("synthé", 520);


// ### Créer une boite (tableau) et mettre les deux objets dedans.

let boite = [];
boite.push(drums);
boite.push(synth);
console.log(tab);



// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet, boite)
// ### _Méthode : acheter(vendeur, objet)

class Personnage1{
    constructor(nom,sac,argent){

        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet, boite) => {
            this.sac.push(objet);
            boite.splice(boite.indexOf(objet),1);
            console.log(`${this.nom} a mit un ${objet} dans son sac`);

        };
       this.acheter = (vendeur, objet) =>{
           if(this.argent >= objet.prix){
               this.argent -= objet.prix;
               vendeur.argent += objet.prix;
               this.sac.push(objet);
               vendeur.sac.splice(vendeur.sac.indexOf(objet),1);
               console.log(`${this.nom} a acheté ${objet.nom} à ${vendeur.nom}`);
           }else{
               console.log("t'as pas assez de thune, go Only fan");
           }

        
    };
}

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
let noumy = new Personnage1("noumy", [], 8441);
let heritier = new Personnage1("Héritier", [], 56)

// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

noumy.prendre(drums,boite);
heritier.prendre(synth, boite);

noumy.acheter(heritier, synth);
heritier.acheter(noumy, drums);