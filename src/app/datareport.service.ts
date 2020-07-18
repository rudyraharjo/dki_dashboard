import { Injectable } from '@angular/core';

export interface ListReport {
  id: number;
  name: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatareportService {

  public listReport: ListReport[] = [
    {
      id: 0,
      name: "Report Dana Kini Monthly Achievement",
      link: "https://datastudio.google.com/embed/reporting/271f97a8-5fb8-480a-b65c-47cb02791d91/page/W8RUB"
    },
    {
      id: 1,
      name: "Report Realtime Sales Monitoring",
      link: "https://datastudio.google.com/embed/reporting/142f7e10-918c-4547-9ec6-da3c3861606d/page/O72TB"
    },
    {
      id: 2,
      name: "Report Performance Trainer Danakini",
      link: "https://datastudio.google.com/embed/reporting/bba476b5-afb0-47c9-a4ea-822038d66e3c/page/eTAVB"
    },
    {
      id: 3,
      name: "Report Loan Portfolio Management",
      link: "https://datastudio.google.com/embed/reporting/f390cb9a-d4ad-4142-971e-761053a78e05/page/3U7WB"
    }
  ]

  constructor() { }

  public getlistReport(): ListReport[] {
    return this.listReport;
  }

  public getReportDetailById(id: number): ListReport {
    return this.listReport[id];
  }


}
