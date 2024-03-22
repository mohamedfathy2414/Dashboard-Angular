import { Component, OnDestroy, OnInit } from '@angular/core';
import { PromotionAdsService } from '../../services/promotion-ads.service';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit, OnDestroy {
  adsSubscription!: Subscription;
  dat!: string;
  constructor(private _PromotionAdsService: PromotionAdsService) {}
  ngOnInit() {
    this.adsSubscription = this._PromotionAdsService.getAds().subscribe({
      next: (data) => {
        this.dat = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  ngOnDestroy() {
    {
      this.adsSubscription.unsubscribe();
    }
  }
}
