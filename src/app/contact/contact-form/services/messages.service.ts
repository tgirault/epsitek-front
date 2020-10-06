import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Message } from '../model/message.data';

/**
 * Service métier de gestion des messages.
 */
@Injectable({
    providedIn: 'root',
})
export class MessagesService {

    /**
     * Constructeur du service de gestion des messages.
     * @param apiService le service de gestion des appels REST
     */
    constructor(private apiService: ApiService) { }

    /**
     * Envoyer un message.
     * @param message un message
     */
    send(message: Message): Observable<Message> {
        return this.apiService.post<Message>('/contact/send.php', message);
    }
}
