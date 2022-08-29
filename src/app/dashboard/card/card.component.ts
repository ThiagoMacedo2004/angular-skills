import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  color:ThemePalette

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    this.card.likes ++

    if(this.card.likes == 5) {
      this.color = 'primary'
    } else if (this.card.likes >= 10) {
      this.color = 'warn'
    }
    
    this.httpClient.put(`/api/skills/`, this.card).subscribe(
      (res) => {
        this.httpClient.get('/api/skills').subscribe(
          (ret: Array<any>) => {
            console.log(ret)
          } 
        );
      }
    )
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
