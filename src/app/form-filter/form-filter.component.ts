import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { FormBuilder } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css'],
})
export class FormFilterComponent implements OnInit {
  filterForm = this.formBuilder.group({
    title: '',
    category: [],
    tags: [],
    date_range: [],
  });

  value: number = 1800;
  highValue: number = this.getCurrentYear();
  options: Options = {
    floor: 1800,
    ceil: this.getCurrentYear(),
  };

  constructor(
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    //add to filter
    this.filterService.updateFilter(this.filterForm.value);
    console.warn(this.filterService.getFilter());
  }

  clearFilter(): void {
    this.filterService.clearFilter();
    this.resetForm();
    console.warn(this.filterService.getFilter());
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  resetForm() {
    var filter = this.filterService.getFilter();
    this.filterForm.patchValue({
      title: filter.title,
      category: filter.category,
      tags: filter.tags,
    });

    this.value = 1800;
    this.highValue = this.getCurrentYear();
    this.options = {
      floor: 1800,
      ceil: this.getCurrentYear(),
    };
  }
}
