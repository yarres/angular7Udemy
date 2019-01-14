import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Galette des rois aux framboises\n', 'Une recette super', 'https://image.afcdn.com/recipe/20140110/18567_w600.jpg'),
      new Recipe('Galette des rois aux framboises\n', 'Une recette super', 'https://image.afcdn.com/recipe/20140110/18567_w600.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
