import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailList: any;

  // detailList = [
  //   {id: 1, name: "sathya", status: "On working" },
  //   {id: 2, name: "ram", status: "In leave" },
  //   {id: 3, name: "kumar", status: "Releived" }
  // ];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    this.service.getAllData().subscribe (res => {
      console.log(res);
      this.detailList=res;
    })
  }

}
