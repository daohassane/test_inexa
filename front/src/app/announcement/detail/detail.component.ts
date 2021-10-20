import { Component, OnInit } from '@angular/core';
import {Announcement} from "../../shared/models/announcement";
import {AnnouncementService} from "../../services/announcement.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  announcement: Announcement | undefined;

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
  ) { }

  ngOnInit(): void {
    this.getAnnouncement();
  }

  getAnnouncement(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.announcementService.getAnnouncement(id)
      .subscribe(announcement => this.announcement = announcement);
  }

}
