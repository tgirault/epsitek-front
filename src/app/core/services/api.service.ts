import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Service de gestion des appels REST.
 */
@Injectable({
    providedIn: 'root',
})
export class ApiService {

    /**
     * Constructeur du service de gestion des appels REST.
     * @param httpClient un client Http
     */
    constructor(private httpClient: HttpClient) { }

    /**
     * Méthode POST.
     */
    post<T>(uri: string, data: any): Observable<T> {
        return this.httpClient.post<T>(environment.api + uri, data, { responseType: 'json' });
    }
}
