import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ArchiveItemComponent } from './archive-item/archive-item.component';
import { AboutComponent } from './about/about.component';
import { FormFilterComponent } from './form-filter/form-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ArchiveListComponent },
      { path: 'archives/:archiveId', component: ArchiveItemComponent },
      { path: 'about', component: AboutComponent },
    ]),
    NgxSliderModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ArchiveListComponent,
    TopBarComponent,
    BottomBarComponent,
    ArchiveItemComponent,
    AboutComponent,
    FormFilterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
