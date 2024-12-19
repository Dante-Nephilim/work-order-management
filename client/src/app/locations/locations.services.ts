import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Location {
  _id?: string;
  name: string;
  entityId: string;
  state: 'Ready' | 'Completed';
}

@Injectable({ providedIn: 'root' })
export class LocationsService {
  private baseUrl = 'http://localhost:3000/api/locations';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>('http://localhost:3000/api/locations/all');
  }

  createLocation(data: Location): Observable<Location> {
    return this.http.post<Location>(
      `http://localhost:3000/api/locations/create`,
      data
    );
  }
}
