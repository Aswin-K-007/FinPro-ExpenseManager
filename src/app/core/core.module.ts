import {provideHttpClient, withInterceptors } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { authInterceptor } from "./interceptors/auth-interceptor";

@NgModule({
  providers: [
  ],
})
export class CoreModule {}
