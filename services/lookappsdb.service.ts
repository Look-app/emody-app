import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { LookappsUtilisateur } from '../models/lookapp-utilisateur.model';
import { LookappsCategorie } from '../models/lookapp-categorie.model';
import { JsonPassword } from '../models/lookapp-json';
import { LookappsArticles } from '../models/lookapp-articles.model';
import { LookappsPersonnalisation } from '../models/lookapp-personnalisation.model';

@Injectable()
export class LookappsService {
    private baseURL: string = 'https://look-apps01.herokuapp.com/';
    //private baseURL: string = 'http://localhost:8080/';
    //private source: string = 'getUtilisateur';

    public UtilisateurConnecter: LookappsUtilisateur;
   // public email: string = "";

    constructor(private http: Http){

    }

    
    public getCategorie(): Promise<any> {
        const url = this.baseURL + 'getCategorie';
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsCategorie>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getUtilisateurs(): Promise<any> {
        const url = this.baseURL + 'getUtilisateurs';
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsUtilisateur>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getUtilisateurBy(email): Promise<any> {
        const url = this.baseURL + 'getUtilisateur?email='+ email;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as LookappsUtilisateur)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public sha1(password): Promise<any> {
        const url = this.baseURL + 'sha1?password=' + password;
        console.log("url = " + url);
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<JsonPassword>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public inscription(nom, prenom, naissance, sexe, email, password): Promise<any> {
        const url = this.baseURL + 'inscription?nom=' + nom +'&prenom='+ prenom +'&naissance=' + naissance + '&sexe='+ sexe +'&email=' + email + '&password=' + password ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public recuperation(nom, prenom, naissance, sexe, email, password): Promise<any> {
        const url = this.baseURL + 'inscription?nom=' + nom +'&prenom='+ prenom +'&naissance=' + naissance + '&sexe='+ sexe +'&email=' + email + '&password=' + password ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getAllArticles(): Promise<any> {
        const url = this.baseURL + 'getArticles' ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsArticles>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getArticlesByCategorie(idCateg): Promise<any> {
        const url = this.baseURL + 'getArticleByCateg?idCateg=' + idCateg ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsArticles>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getArticlesBySousCategorie(idSousCateg): Promise<any> {
        const url = this.baseURL + 'getArticleBySousCateg?idSouSCateg=' + idSousCateg ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsArticles>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }
    public getPersonnalisationBy(idUser): Promise<any> {
        const url = this.baseURL + 'getPersonnalisationBy?idUser='+idUser ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsPersonnalisation>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    } 
    public getArticleByAll2(idCategorie, idSousCategorie): Promise<any> {
        const url = this.baseURL + 'getArticleByAll2?idCategorie='+ idCategorie + '&idSousCategorie=' + idSousCategorie ;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Array<LookappsArticles>)
        .catch(error => console.log('Une erreur est survenue' + error))
    
    }

    public setUtilisateurConnecter(uti: LookappsUtilisateur): void {

       this.UtilisateurConnecter = uti;
        
    }
    public getUtilisateurConnecter(): LookappsUtilisateur {
       
        return this.UtilisateurConnecter ;
         
     }
}