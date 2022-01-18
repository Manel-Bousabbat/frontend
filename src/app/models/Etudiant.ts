import { Classe } from "./Classe";

export class Etudiant{
    id: number;
    nom: string;
    prenom: string;
    date_naissance: string;
    niveau_etude : number;
    classe: Classe;
    cin: number;
}