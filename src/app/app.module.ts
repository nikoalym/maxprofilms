import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { el_GR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import el from '@angular/common/locales/el';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FeatureComponent } from './feature/feature.component';

import { FilmSpecComponent } from './film-spec/film-spec.component';
import { ShadeComparisonComponent } from './shade-comparison/shade-comparison.component';
import { FeaturesListComponent } from './features-list/features-list.component';

registerLocaleData(el);

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailComponent,
    NavbarComponent,
    SidenavListComponent,
    FeatureComponent,
    FilmSpecComponent,
    ShadeComparisonComponent,
    FeaturesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzGridModule,
    NzSpaceModule,
    NzTableModule,
    NzTypographyModule,
    NzDividerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: el_GR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
