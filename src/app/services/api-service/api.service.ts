import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  getFishSpecies():Observable<any[]> {
    return this.api.get<any>(environment.apiBase + 'species').pipe(map((el) => el.slice(0, 30)));
  }

  postFishSpecies(fishes: any):Observable<any[]> {
    return this.api.post<any>(environment.apiBase + 'species', fishes);
  }
  
}
