import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpRequest,
} from '@angular/common/http';
import {
  Component,
  Inject,
  Injectable,
  InjectionToken,
  Self,
  SkipSelf,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  BrowserStorageService,
  BROWSER_STORAGE,
} from './browser-storage.service';
import { CoursesService } from './courses.service';
import { DiTestingService } from './di-testing.service';
import { DiWithDependencyService } from './di-with-dependency.service';

function courseServiceProvider(http: HttpClient) {
  return new CoursesService(http);
}

const COURSE_SERVICE = new InjectionToken<CoursesService>('COURSE_SERVICE');

// @Injectable({ // se nao usar o injectable na hora de fazer o construtor o angular nao sabe fazer a injecao
//   providedIn: 'root',
// })
class LoginService {
  login() {
    console.log('está logado');
  }
}

class OtherLoginService {
  login() {
    console.log('está logado com outro user');
  }
}


class TesteService {
  testDependecy() {
    console.log("primeiro teste")
  }
}

const TESTE_TOKEN = new InjectionToken('teste')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    BrowserStorageService,
    {
      provide: BROWSER_STORAGE,
      useFactory: () => sessionStorage,
    },
    //usando um injection token é possivel implementar uma funçao a ser executada, para isso basta passar para o useFactory

    {
      provide: COURSE_SERVICE,
      useFactory: courseServiceProvider,
      deps: [HttpClient],
    },
    {provide: LoginService, useClass: OtherLoginService},
    // LoginService // ao inves do injectable da pra adicionar a classe no provider
    // {provide: LoginService, useClass: LoginService}
    // DiTestingService --> o angular nao aceita fazer a injecao pois nao tem o injectable dai tem que fazer via provider
    // {provide: DiTestingService, useClass: TesteService}
    DiTestingService,
    DiWithDependencyService,
    // {provide: 'teste', useClass: DiTestingService} // via token
    //para um classe com dependencia ser injetada ela precisa ter o decorator injector ou entao passar via provider
  ],
})
export class AppComponent {
  constructor(
    //o decorator skipself injeta a classe que está sendo injetada no componente/método pai, ou seja que está acima da árvore de herença
    @SkipSelf() private localStorageService: BrowserStorageService,
    //o decorator self injeta a classe que está sendo passada no provider do componente que ele está sendo usado
    @Self() private sessionStorageService: BrowserStorageService,
    // o inject faz a injecao de depencia a partir de um token que pode estar associado a uma factory
    @Inject(COURSE_SERVICE) private courseService: CoursesService, // private courseService: CoursesService,
    private loginService: LoginService,
    private diTestingService: DiTestingService
    // @Inject('teste') private diTestingService: DiTestingService // --> via token
    // outra forma de fazer a injeçao sem usar o Injectable é usar o @inject, ele aceita uma string ou Injection Token
    // funciona assim pro angular fazer a injecao ele precisa saber o que instanciar para pode injetar a dependencia
    // se usar o Injectable ele vai instanciar a classe sozinho e ligar no contrutor. se usar o provdein root ele disponibiliza
    // pra aplicacoa inteira, se nao for usar na aplicacao inteira passa no provider
    // se nao tiver um injectable tem algumas solucoes, pode passar um provide e use class,  ou entao fazer um token
    // o token pode ser uma string por exemplo, essa string é passada dentro do @inject e dai a classe que foi passada no provide/
    // será atribuido no construtor. De qualquer forma sem inject sempre passa via provide

    // se um servico possui outro servico com dependencia, basta passar a dependencia no provider do componennte que o angular
    // fara a injeçao
  ) {
    localStorageService.set('teste', 'teste');
    sessionStorageService.set('teste', 'teste');
  }
  title = 'ngrx';

  ngOnInit() {
    this.localStorageService.get('teste');
    this.sessionStorageService.get('teste');
    this.courseService.getCurso().subscribe((data) => console.log(data));
    this.loginService.login();
    this.diTestingService.testDependecy()
    this.diTestingService.testSecondDependency()
  }
}
