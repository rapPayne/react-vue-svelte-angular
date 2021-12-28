import { RouterModule } from "@angular/router"
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AboutUsComponent, ContactUsComponent, NotFoundComponent } from './other-components/other-components.component';

const routes = [
  { path: "", component: DashboardComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "**", component: NotFoundComponent },
]

export const appRoutes = RouterModule.forRoot(routes);
