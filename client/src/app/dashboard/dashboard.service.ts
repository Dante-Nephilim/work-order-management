import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardData {
  totalContractors: number;
  totalEntities: number;
  totalLocations: number;
  totalWorkOrders: number;
  totalBills: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>('http://localhost:3000/api/dashboard');
  }
}
