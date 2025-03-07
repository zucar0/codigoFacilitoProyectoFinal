import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Observable, tap } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id!: string;
  card$!: Observable<Card>;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.card$ =  this.cardService.getCard(this.id).pipe(tap(console.log));

  }

}
