import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubsicription : Subscription;
  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(){
    const count = Observable.interval(1000);
    this.counterSubsicription = count.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log("Uh-ho, an error occurred: "+ error);
      },
      () => {
        console.log("Observable occurred!");
      }
    )
  }
  
  ngOnDestroy(){
    this.counterSubsicription.unsubscribe();
  }
  
}
