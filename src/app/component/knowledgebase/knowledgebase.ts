import { Component } from "@angular/core";

import { BrowseArticlesCategory } from "./browse-articles-category/browse-articles-category";
import { KnowledgebaseFooterData } from "./knowledgebase-footer-data/knowledgebase-footer-data";
import { KnowledgebaseTopData } from "./knowledgebase-top-data/knowledgebase-top-data";

@Component({
  selector: "app-knowledgebase",
  imports: [
    KnowledgebaseTopData,
    BrowseArticlesCategory,
    KnowledgebaseFooterData,
  ],
  templateUrl: "./knowledgebase.html",
  styleUrl: "./knowledgebase.scss",
})
export class Knowledgebase {}
