import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Entity {
  _id?: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class EntitiesService {
  private baseUrl = 'http://localhost:3000/api/entities';

  constructor(private http: HttpClient) {}

  getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.baseUrl);
  }

  createEntities(data: Entity): Observable<Entity> {
    return this.http.post<Entity>(this.baseUrl, data);
  }
}
