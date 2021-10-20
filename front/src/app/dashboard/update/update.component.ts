import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../shared/models/announcement";
import {ActivatedRoute} from "@angular/router";
import {AnnouncementService} from "../../services/announcement.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Location} from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  announcement: Announcement | undefined;

  submitted = false;

  updateAnnouncementForm: FormGroup = this.fb.group({
    title: ['', Validators.compose([Validators.required])],
    city: ['', Validators.compose([Validators.required])],
    author: ['', Validators.compose([Validators.required])],
    price: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
  });

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private fb: FormBuilder,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getAnnouncement();
  }

  get f() {
    return this.updateAnnouncementForm.controls;
  }

  getAnnouncement(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.announcementService.getAnnouncement(id)
      .subscribe(announcement => this.announcement = announcement);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.updateAnnouncementForm.invalid || !this.announcement) {
      return;
    }
    this.announcementService.updateAnnouncement(this.updateAnnouncementForm.value, this.announcement.id)
      .subscribe(() => this.goBack());
  }

}
