import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../shared/models/announcement";
import {AnnouncementService} from "../../services/announcement.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.announcementService.getAnnouncements()
      .subscribe(announcements => this.announcements = announcements);
  }

}
