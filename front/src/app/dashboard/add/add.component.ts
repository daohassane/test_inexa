import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../services/announcement.service";
import {Announcement} from "../../shared/models/announcement";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  submitted = false;

  announcementForm: FormGroup = this.fb.group({
    title: ['', Validators.compose([Validators.required])],
    city: ['', Validators.compose([Validators.required])],
    author: ['', Validators.compose([Validators.required])],
    price: ['', Validators.compose([Validators.required])],
    rooms: [1, Validators.compose([Validators.required])],
    garage: [false, Validators.compose([Validators.required])],
    swimmerpool: [false, Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
  });

  constructor(private announcementService: AnnouncementService, private fb: FormBuilder, private location: Location,) {
  }

  get f() {
    return this.announcementForm.controls;
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  submit(): void {
    this.submitted = true;

    if (this.announcementForm.invalid) {
      return;
    }

    this.announcementService.addAnnouncement(this.announcementForm.value as Announcement)
      .subscribe(()=> this.goBack());
  }

}
