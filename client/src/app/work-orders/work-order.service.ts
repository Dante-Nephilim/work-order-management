import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WorkOrderLocation {
  locationId: string;
  name: string;
  rate: number;
  quantity: number;
}
export interface WorkOrder {
  _id?: string;
  contractorId: string;
  paymentTerms: number;
  dueDate: Date;
  locations: WorkOrderLocation[];
}

@Injectable({ providedIn: 'root' })
export class WorkOrdersService {
  private baseUrl = 'http://localhost:3000/api/work-orders';

  constructor(private http: HttpClient) {}

  getWorkOrders(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(
      'http://localhost:3000/api/work-orders/all'
    );
  }

  createWorkOrder(data: WorkOrder): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(
      `http://localhost:3000/api/work-orders/create`,
      data
    );
  }
  getWorkOrdersSortedByPaymentTerms(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(
      `http://localhost:3000/api/work-orders/sortByPaymentTerms`
    );
  }
  getWorkOrdersFilteredByDate(date: string): Observable<WorkOrder[]> {
    return this.http.post<WorkOrder[]>(
      `http://localhost:3000/api/work-orders/filterByDate`,
      { date }
    );
  }
}
