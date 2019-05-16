import { Adapter } from './adapter';
import { Injectable } from '@angular/core';

export interface Hero{
    name: string;
    description: string;
    image: string;
}

@Injectable({
    providedIn: 'root'
})
export class HeroAdapter implements Adapter<Hero>{
    adapt(item: any): Hero {
        const extension = item['thumbnail']['extension'];
        const path = item['thumbnail']['path'];
        const variant = 'landscape_incredible';
        return {
            name: item['name'],
            description: item['description'],
            image: path + '/' + variant + '.' + extension
        };
    }
    
}