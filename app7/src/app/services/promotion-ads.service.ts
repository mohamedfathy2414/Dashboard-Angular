import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  ads: string[];
  constructor() {
    this.ads = [
      'up to 70',
      'up to 10',
      'white friday',
      'big sale',
      'black friday',
      '',
      'up to 10',
    ];
  }

  getAds() {
    return new Observable<string>((observer) => {
      let i = 0;
      let Adsinterval = setInterval(() => {
        if (i == this.ads.length) {
          observer.complete();
        }
        if (this.ads[i] == '') {
          observer.error('error in get ads');
        }
        observer.next(this.ads[i]);
        i++;
      }, 2000);

      return;
      {
        unsubscribe: () => {
          clearInterval(Adsinterval);
        };
      }
    });
  }
}
