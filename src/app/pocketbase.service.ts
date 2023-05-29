import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

getClassi() {
  return this.http.get('http://127.0.0.1:8090/_/#/collections?collectionId=x0359tpsyq4xy6k&filter=&sort=-created');
}

getAlunni(idClasse: number) {
  return this.http.get(`URL_API_ALUNNI/${idClasse}`);
}

