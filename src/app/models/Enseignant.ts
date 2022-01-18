import { Department } from "./Department";
import { Matiere } from "./Matiere";

export class Enseignant{
    id: number;
     nom: string;
     prenom: string;
    date_naissance: String;
    grade: String;
    department: Department;
     matiere: Matiere;
     cin : number;
}