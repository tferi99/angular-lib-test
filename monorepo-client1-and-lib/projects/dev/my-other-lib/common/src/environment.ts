/**
 * If you want to access properties from the environment.ts of the consumer application(s)
 * then add them to this interface.
 *
 * Then provide the environment object in AppModule this way:
 *
 * @NgModule({
 *     imports: [
 *         YourLibraryModule
 *     ],
 *     providers: [
 *         { provide: 'environment', useValue: environment }
 *     ]
 * })
 * export class AppModule { }
 *
 * and inject it where you want:
 *
 * @Injectable({
 *     providedIn: 'root'
 * })
 * export class YourLibraryService {
 *     constructor(private environment: Environment) {
 *        ...
 *     }
 * }
 */

export const ENVIRONMENT_TOKEN = 'environment';

export interface Environment {
  production: boolean;
  test: string;
}
