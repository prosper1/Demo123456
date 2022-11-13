import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { AccountComponent } from './edit/account/account.component';
import { RanksComponent } from './ranks/ranks.component';
import { ListComponent } from './taxis/list/list.component';
import { TripsComponent } from './trips/trips.component';
import { LoadsComponent } from './loads/loads.component';
import { RankDetailsComponent } from './rank-details/rank-details.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { SuccessfulComponent } from './pay/successful/successful.component';
import { UnsuccessfulComponent } from './pay/unsuccessful/unsuccessful.component';
import { PassengerListComponent } from './driver/passenger-list/passenger-list.component';
import { ProfileComponent } from './driver/profile/profile.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    RegisterDriverComponent,
    AccountComponent,
    RanksComponent,
    ListComponent,
    TripsComponent,
    LoadsComponent,
    RankDetailsComponent,
    RankListComponent,
    SuccessfulComponent,
    UnsuccessfulComponent,
    PassengerListComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
     }
    ),
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU',
      libraries: ['places']
    }),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
