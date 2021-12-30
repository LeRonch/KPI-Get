import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  investment:any = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  public id:string = this.route.snapshot.params['id'].toString();
  
  ngOnInit() {

    this.dataService.sendGetRequestById(this.id).subscribe(data=>{
      this.investment = data;
      console.log(this.investment);
    },
    (error) => console.log(error)
    )
  }

}
