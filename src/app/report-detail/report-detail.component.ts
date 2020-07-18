import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatareportService, ListReport } from '../datareport.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {
  list:any;
  public SafeUrl;

  constructor(
    private actRoute: ActivatedRoute,
    private data: DatareportService,
    private sanitizer: DomSanitizer) {
       
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.list = this.data.getReportDetailById(parseInt(id));
    this.SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.list.link);

  }

  ngOnInit(): void {
  }

}
