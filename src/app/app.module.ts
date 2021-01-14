import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './_helpers/http-error.interceptor';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { LoadingDialogComponent } from './_helpers/loading-dialog/loading-dialog.component';
import { NavComponent } from './nav/nav.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CommunityGuidelinesComponent } from './community-guidelines/community-guidelines.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { HostEventComponent } from './host-event/host-event.component';
import { ArticlesComponent } from './articles/articles.component';
import { ForumsComponent } from './forums/forums.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { FeaturedComponent } from './featured/featured.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { DemoTwoComponent } from './demo-two/demo-two.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { OpenedArticleComponent } from './opened-article/opened-article.component';
import { CommunitiesMessagesComponent } from './communities-messages/communities-messages.component';

import { LoadingDialogService } from './_helpers/loading-dialog/loading-dialog.service';
import { MessageService } from './_services/message.service';
import { AnswerService } from './_services/answer.service';
import { ArticleService } from './_services/article.service';
import { CommunityService } from './_services/community.service';
import { CompetitionService } from './_services/competition.service';
import { CourseService } from './_services/course.service';
import { QuestionService } from './_services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingDialogComponent,
    NavComponent,
    MessageComponent,
    HomeComponent,
    OurTeamComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqsComponent,
    CommunityGuidelinesComponent,
    WorkWithUsComponent,
    HostEventComponent,
    ArticlesComponent,
    ForumsComponent,
    CommunitiesComponent,
    CompetitionsComponent,
    CoursesComponent,
    EventsComponent,
    FeaturedComponent,
    DemoOneComponent,
    DemoTwoComponent,
    DatasetsComponent,
    OpenedArticleComponent,
    CommunitiesMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [
    LoadingDialogService,
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
    MessageService,
    AnswerService,
    ArticleService,
    CommunityService,
    CompetitionService,
    CourseService,
    QuestionService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoadingDialogComponent],
})
export class AppModule {}
