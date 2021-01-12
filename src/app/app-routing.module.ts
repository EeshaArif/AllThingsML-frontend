import { CommunitiesMessagesComponent } from './communities-messages/communities-messages.component';
import { OpenedArticleComponent } from './opened-article/opened-article.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DemoTwoComponent } from './demo-two/demo-two.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { FeaturedComponent } from './featured/featured.component';
import { EventsComponent } from './events/events.component';
import { CoursesComponent } from './courses/courses.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CommunitiesComponent } from './communities/communities.component';
import { ForumsComponent } from './forums/forums.component';
import { ArticlesComponent } from './articles/articles.component';
import { HostEventComponent } from './host-event/host-event.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { CommunityGuidelinesComponent } from './community-guidelines/community-guidelines.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'conversations',
    component: MessageComponent,
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'community-guidelines',
    component: CommunityGuidelinesComponent,
  },
  {
    path: 'work-with-us',
    component: WorkWithUsComponent,
  },
  {
    path: 'host-event',
    component: HostEventComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },

  {
    path: 'articles/opened/:id',
    component: OpenedArticleComponent,
  },

  {
    path: 'forums',
    component: ForumsComponent,
  },
  {
    path: 'datasets',
    component: DatasetsComponent,
  },
  {
    path: 'communities',
    component: CommunitiesComponent,
  },
  {
    path: 'communities/messages/:topic',
    component: CommunitiesMessagesComponent,
  },
  {
    path: 'competitions',
    component: CompetitionsComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'featured',
    component: FeaturedComponent,
  },
  {
    path: 'demo-one',
    component: DemoOneComponent,
  },
  {
    path: 'demo-two',
    component: DemoTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
