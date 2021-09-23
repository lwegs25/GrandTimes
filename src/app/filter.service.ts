import { Injectable } from '@angular/core';
import { Archive } from './archives';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filter: {
    title: '';
    category: '';
    tags: [];
    date_range: [];
  };

  updateFilter(data) {
    this.filter = data;
  }

  getFilter() {
    return this.filter;
  }

  clearFilter() {
    this.filter = {
      title: '',
      category: '',
      tags: [],
      date_range: [],
    };
    return this.filter;
  }

  constructor() {}
}
