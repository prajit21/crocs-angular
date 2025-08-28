import { Component } from "@angular/core";

import { FormattedResults } from "./formatted-results/formatted-results";
import { GolbalConfigutionTypehead } from "./golbal-configution-typehead/golbal-configution-typehead";
import { OpenOnFocus } from "./open-on-focus/open-on-focus";
import { PreventManualEntry } from "./prevent-manual-entry/prevent-manual-entry";
import { SelectOnExact } from "./select-on-exact/select-on-exact";
import { SimpleTypehead } from "./simple-typehead/simple-typehead";
import { TemplateForResults } from "./template-for-results/template-for-results";
import { WikipediaSearch } from "./wikipedia-search/wikipedia-search";

@Component({
  selector: "app-typeahead",
  imports: [
    FormattedResults,
    GolbalConfigutionTypehead,
    OpenOnFocus,
    PreventManualEntry,
    SelectOnExact,
    PreventManualEntry,
    SimpleTypehead,
    TemplateForResults,
    WikipediaSearch,
  ],
  templateUrl: "./typeahead.html",
  styleUrl: "./typeahead.scss",
})
export class Typeahead {}
