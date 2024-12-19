import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BillLocation {
  locationId: string;
  name: string;
  rate: number;
  quantity: number;
}
export interface Bill {
  _id?: string;
  billNumber: string;
  contractorId: string;
  locations: BillLocation[];
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class BillService {
  private baseUrl = 'http://localhost:3000/api/bills';

  constructor(private http: HttpClient) {}

  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.baseUrl}`);
  }

  runBills(): Observable<{ message: string; bills: Bill[] }> {
    return this.http.post<{ message: string; bills: Bill[] }>(
      `${this.baseUrl}/run`,
      {}
    );
  }
}
