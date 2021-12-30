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
 
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe(data=>{
      this.investments = data['hydra:member'] ;
      console.log(this.investments);
    },
    (error) => console.log(error),
    () => console.log("Success !")
    )
  }
  
}