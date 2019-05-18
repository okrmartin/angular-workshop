import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  public privateKey: string;
  public publicKey: string;
  
  constructor() { 
    this.publicKey = 'YOUR_PUPLIC_KEY';
    this.privateKey = 'YOUR_PRIVATE_KEY';
  }
}
