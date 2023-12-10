import { CRUDService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Maestro } from './../_model/maestro';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaestroService extends CRUDService<Maestro>{

  constructor(protected override _http: HttpClient) {
    super(
      _http,
      `${environment.HOST}/maestros`
    )
  }
}
