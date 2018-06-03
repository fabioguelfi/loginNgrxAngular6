import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LandingComponent } from "./components/landing/landing.component";
import { StatusComponent } from "./components/status/status.component";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

export const ROUTES = [
    { path: 'log-in', component: LogInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
    { path: '', component: LandingComponent },
    { path: '**', redirectTo: '/' }
]