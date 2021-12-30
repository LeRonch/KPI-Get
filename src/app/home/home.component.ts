import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public investments = [];
  public displayedColumns = [ 'id' , 'titreoperation', 'lycee', 'ville', 'etat_d_avancement', 'detail'];
 
  ville: string = '';
  lycee: string = '';

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
    this.dataService.sendGetRequest(this.ville, this.lycee).subscribe(data=>{
      this.investments = data['hydra:member'] ;
      console.log(this.investments);
    },
    (error) => console.log(error)
    )
  }
  
  filter() {
    this.dataService.sendGetRequest(this.ville, this.lycee).subscribe(data=>{
      this.investments = data['hydra:member'] ;
    },
    (error) => console.log(error),
    )
  }
}