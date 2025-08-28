import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { bookmark } from "../../../../shared/data/bookmark/bookmarks";
import { bookmarks } from "../../../../shared/interface/bookmark";

@Component({
  selector: "app-new-bookmark",
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./new-bookmark.html",
  styleUrl: "./new-bookmark.scss",
})
export class NewBookmark {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public bookmark = bookmark;
  public ids: number[] = [];
  public maxId: number;

  public myForm = new FormGroup({
    id: new FormControl(0),
    image: new FormControl("assets/images/lightgallry/07.jpg"),
    url: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    group: new FormControl("bookmark", Validators.required),
    collection: new FormControl("general", Validators.required),
  });

  constructor() {
    this.bookmark.filter((data) => {
      if (data.value == "created_by_me") {
        data.data.forEach((subData) => {
          this.ids.push(subData.id);
          this.maxId = Math.max(...this.ids);
        });
      }
    });

    this.myForm = new FormGroup({
      id: new FormControl(this.maxId + 1),
      image: new FormControl("assets/images/lightgallry/07.jpg"),
      url: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      group: new FormControl("bookmark", Validators.required),
      collection: new FormControl("general", Validators.required),
    });
  }

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      let newBookmark = this.myForm.value as bookmarks;
      this.bookmark.forEach((data) => {
        if (data.value == "created_by_me") {
          data.data.push(newBookmark);
          this.modal.close();
        }
      });
    }
  }

  closeModal() {
    this.modal.close();
  }

  get url() {
    return this.myForm.get("url");
  }

  get title() {
    return this.myForm.get("title");
  }

  get description() {
    return this.myForm.get("description");
  }

  get group() {
    return this.myForm.get("group");
  }

  get collection() {
    return this.myForm.get("collection");
  }
}
