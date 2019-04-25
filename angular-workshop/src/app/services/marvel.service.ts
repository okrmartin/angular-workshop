import { Injectable } from '@angular/core';
import { KeysService } from './keys.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators'
import { HeroAdapter } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private publicKey: string;
  private privateKey: string;
  
  constructor(private keysService: KeysService, 
    private http: HttpClient, 
    private heroAdapter: HeroAdapter) { 

    this.privateKey = this.keysService.privateKey;
    this.publicKey = this.keysService.publicKey;
  }

  getQuery(query:string){
    const url = `https://gateway.marvel.com/v1/public/${query}`;
    
    //md5(ts+private+public)
    const ts = new Date().valueOf().toString();
    const md5 = new Md5();
    const hash = md5.appendStr(ts).appendStr(this.privateKey).appendStr(this.publicKey).end();
    const authoritationStr = `ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url + authoritationStr);
  }

  getCharacters(){
    return this.getQuery('characters?').pipe(
      map(data => data['data']['results'].map(item => this.heroAdapter.adapt(item)))
    );
  }

  searchCharacter(nameStartsWith: string){
    return this.getQuery(`characters?nameStartsWith=${nameStartsWith}&`).pipe(
      map(data => data['data']['results'].map(item => this.heroAdapter.adapt(item)))
    );
  }
}
