import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { Lancamento } from './../core/model';

export class LancamentoFiltro {

  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8182/pessoas';

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();


    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());



 

    return this.http.get(`${this.lancamentosUrl}`,
        {  search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson;

        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {


    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(this.lancamentosUrl,
      JSON.stringify(lancamento), { headers })
    .toPromise()
    .then(response => response.json());
}

}
