export class Studente {
  nome: string;
  cognome: string;
  nascita: string;
  sezione: string;
  constructor(nome, cognome, nascita, sezione) {
    this.nome = nome;
    this.cognome = cognome;
    this.nascita = nascita;
    this.sezione = sezione;
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
