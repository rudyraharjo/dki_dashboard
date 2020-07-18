import { Component, OnInit } from '@angular/core';
import { DatareportService, ListReport } from '../datareport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private data: DatareportService) { }

  ngOnInit(): void {
  }
  
  getListDKIDashboard(): ListReport[] {
    return this.data.getlistReport();
  }
}
