// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material  inputs
import { MatToolbarModule,MatIconModule,MatListModule,MatCardModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,MatChipsModule,MatMenuModule,MatRadioModule} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

// Components
import { AppComponent } from './app.component';

// Services
import { DataService } from '../services/data-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatListModule,MatCardModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatGridListModule,MatChipsModule,MatMenuModule,MatRadioModule,   
    MatSelectModule,    
    MatStepperModule,
    HttpModule,    
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
