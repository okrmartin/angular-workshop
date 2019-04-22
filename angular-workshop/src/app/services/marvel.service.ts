import { Injectable } from '@angular/core';
import { KeysService } from './keys.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private publicKey: string;
  private privateKey: string;
  
  constructor(keysService: KeysService) { 
    this.privateKey = keysService.privateKey;
    this.publicKey = keysService.publicKey;
  }

  
}
