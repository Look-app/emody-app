import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { LookappsUtilisateur } from '../models/lookapp-utilisateur.model';
import { LookappsCategorie } from '../models/lookapp-categorie.model';
import { JsonPassword } from '../models/lookapp-json';

@Injectable()
export class LookappsService {
    private baseURL: string = 'https://look-apps01.herokuapp.com/';
    //private baseURL: string = 'http://localhost:8080/';
    //private source: string = 'getUtilisateur';

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
}