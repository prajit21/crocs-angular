import { Component } from "@angular/core";

import { AjaxRequestMovie } from "./ajax-request-movie/ajax-request-movie";
import { AutoCloseTimer } from "./auto-close-timer/auto-close-timer";
import { BasicExample } from "./basic-example/basic-example";
import { DangerAlert } from "./danger-alert/danger-alert";
import { InfoAlert } from "./info-alert/info-alert";
import { PikachuAlert } from "./pikachu-alert/pikachu-alert";
import { QuestionsAlert } from "./questions-alert/questions-alert";
import { SuccessMessage } from "./success-message/success-message";
import { TitleTextUnder } from "./title-text-under/title-text-under";
import { UsernameAlert } from "./username-alert/username-alert";
import { WarningAlert } from "./warning-alert/warning-alert";
import { WarningMode } from "./warning-mode/warning-mode";

@Component({
  selector: "app-sweetalert2",
  imports: [
    BasicExample,
    InfoAlert,
    TitleTextUnder,
    PikachuAlert,
    QuestionsAlert,
    WarningAlert,
    SuccessMessage,
    UsernameAlert,
    WarningMode,
    AutoCloseTimer,
    AjaxRequestMovie,
    DangerAlert,
  ],
  templateUrl: "./sweetalert2.html",
  styleUrl: "./sweetalert2.scss",
})
export class Sweetalert2 {}
