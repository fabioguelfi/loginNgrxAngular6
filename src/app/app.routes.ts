import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LandingComponent } from "./components/landing/landing.component";

export const ROUTES = [
    { path: 'log-in', component: LogInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: LandingComponent },
    { path: '**', redirectTo: '/' }
]