import { Component, inject, input } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { bookmarks } from "../../../../shared/interface/bookmark";

@Component({
  selector: "app-edit-bookmark",
  imports: [],
  templateUrl: "./edit-bookmark.html",
  styleUrl: "./edit-bookmark.scss",
})
export class EditBookmark {
  private modal = inject(NgbActiveModal);

  readonly bookmarkDetails = input<bookmarks>();

  closeModal() {
    this.modal.close();
  }
}
