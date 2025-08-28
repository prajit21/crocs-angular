import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ActivityLog } from "./activity-log/activity-log";
import { CommonAddFriends } from "./common-add-friends/common-add-friends";
import { HobbiesIntrests } from "./hobbies-intrests/hobbies-intrests";
import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import * as data from "../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-about-center",
  imports: [
    ActivityLog,
    HobbiesIntrests,
    CommonAddFriends,
    Feathericon,
    NgbModule,
  ],
  templateUrl: "./about-center.html",
  styleUrl: "./about-center.scss",
})
export class AboutCenter {
  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;
}
