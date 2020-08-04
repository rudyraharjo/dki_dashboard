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
      link: "https://datastudio.google.com/embed/reporting/f3310cb0-973e-4d4e-b8ef-013ad0ad28ec/page/W8RUB"
    },
    {
      id: 1,
      name: "Report Realtime Sales Monitoring - Confirmed",
      link: "https://datastudio.google.com/embed/reporting/1530f3ec-bc1f-4bbb-8c91-86836a770d55/page/y22TB"
    },
    {
      id: 2,
      name: "Report Real-time Sales Monitoring - Approved",
      link: "https://datastudio.google.com/embed/reporting/e6cba33b-7137-488d-b084-37438335657e/page/y22TB"
    },
    {
      id: 3,
      name: "Report Performance Trainer Danakini",
      link: "https://datastudio.google.com/embed/reporting/9a215ff0-e617-4f64-969d-6dba2e0e8b2d/page/eTAVB"
    },
    {
      id: 4,
      name: "Report Loan Portfolio Management",
      link: "https://datastudio.google.com/embed/reporting/ff90b676-8e31-4605-b438-dff9120a7729/page/3U7WB"
    },
    {
      id: 5,
      name: "Report Loan Origination System",
      link: "https://datastudio.google.com/embed/reporting/e56ffac1-2be6-4440-be98-2b3db29ea5c8/page/qZLXB"
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
