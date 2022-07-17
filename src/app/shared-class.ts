export class Studente {
  nome: string;
  cognome: string;
  nascita: string;
  sezione: string;
  matricola: string;
  constructor(nome, cognome, nascita, sezione, matricola?) {
    this.nome = nome;
    this.cognome = cognome;
    this.nascita = nascita;
    this.sezione = sezione;
    this.matricola = matricola;
  }
}
export class Classe {
  anno: string;
  sezione: string;
  classe: Array<Studente>;
  constructor(anno, sezione, classe) {
    this.anno = anno;
    this.sezione = sezione;
    this.classe = classe;
  }
}
