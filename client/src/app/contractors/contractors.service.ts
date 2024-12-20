import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contractor {
  _id?: string;
  name: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class ContractorsService {
  private baseUrl = 'http://localhost:3000/api/contractors';

  constructor(private http: HttpClient) {}

  getContractors(): Observable<Contractor[]> {
    return this.http.get<Contractor[]>(this.baseUrl);
  }

  createContractor(data: Contractor): Observable<Contractor> {
    return this.http.post<Contractor>(this.baseUrl, data);
  }
}
