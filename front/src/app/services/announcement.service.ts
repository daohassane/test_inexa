import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Announcement} from "../shared/models/announcement";

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private announcementUrl = 'http://localhost:3000/api';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService,) {
  }


  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.announcementUrl}/estates`)
      .pipe(
        tap(_ => this.log('fetched announcement')),
        catchError(this.handleError<Announcement[]>('getAnnouncement', []))
      );
  }


  getAnnouncement(id: number): Observable<Announcement> {
    const url = `${this.announcementUrl}/estates/${id}`;
    return this.http.get<Announcement>(url).pipe(
      tap(_ => this.log(`fetched announcement id=${id}`)),
      catchError(this.handleError<Announcement>(`getAnnouncement id=${id}`))
    );
  }


  addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.announcementUrl}/estates`, announcement, this.httpOptions).pipe(
      tap((newAnnouncement: Announcement) => this.log(`added announcement w/ ${newAnnouncement}`)),
      catchError(this.handleError<Announcement>('addAnnouncement'))
    );
  }


  deleteAnnouncement(id: number): Observable<Announcement> {
    const url = `${this.announcementUrl}/estates/${id}`;

    return this.http.delete<Announcement>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted announcement id=${id}`)),
      catchError(this.handleError<Announcement>('deleteAnnouncement'))
    );
  }


  updateAnnouncement(announcement: Announcement, id: number): Observable<any> {
    //const url = `${this.announcementUrl}/estates/${id}`;
    const url = `${this.announcementUrl}/estates`;

    return this.http.put(url, announcement, this.httpOptions).pipe(
      tap(_ => this.log(`updated announcement id=${announcement.id}`)),
      catchError(this.handleError<any>('updateAnnouncement'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} failed: ${error.message}`);


      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
