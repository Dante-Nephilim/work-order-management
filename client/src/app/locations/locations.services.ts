import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contractor } from '../contractors/contractors.service';

export interface Location {
  _id: string;
  name: string;
  entityId: string;
  state: string;
}

@Injectable({ providedIn: 'root' })
export class LocationsService {
  private baseUrl = 'http://localhost:3000/api/locations';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl);
  }

  getContractorsForLocation(id: string): Observable<Contractor[]> {
    return this.http.get<Contractor[]>(`${this.baseUrl}/${id}/contractors`);
  }

  markLocationCompleted(id: string, contractorId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/complete`, { contractorId });
  }
  createLocation(data: Location): Observable<Location> {
    return this.http.post<Location>(this.baseUrl, data);
  }
  getLocationsSortedByName(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/sortByName`);
  }
  getLocationsCompleted(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/completed`);
  }
}
