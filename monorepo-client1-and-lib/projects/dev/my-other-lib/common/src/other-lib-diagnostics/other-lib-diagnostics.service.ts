import { Inject, Injectable, Optional } from '@angular/core';
import { Environment, ENVIRONMENT_TOKEN } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class OtherLibDiagnosticsService {

  constructor(
    @Inject(ENVIRONMENT_TOKEN) @Optional() private env: Environment
  ) { }

  getEnvironment(): Environment {
    return this.env;
  }
}
