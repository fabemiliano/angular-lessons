import { HttpClient } from '@angular/common/http';
import {
  Component,
  Inject,
  Injectable,
  Optional,
  ViewChild,
} from '@angular/core';
import { CommentService } from './services/comment.service';
import { ConnectService } from './services/connect.service';
import { DownloadService } from './services/download.service';
import { ExportService } from './services/export.service';
import { ImportService } from './services/import.service';
import { LoginService } from './services/login.service';
import { ManageService } from './services/manage.service';
import { ObjectService } from './services/object.service';
import { OptionalService } from './services/optional.service';
import { SwitchService } from './services/switch.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';
import { MatCheckbox } from '@angular/material/checkbox';

/*
A injeção de depência ocorre para evitar que uma classe seja chamada dentro de outra, isso traz diversas vantagens para o código
Para fazer a injeção é preciso passar a intância da classe para o construtor, dessa forma a classe principal não precisa se preocupar
em instanciar a classe de que ela depende ficando a cargo de quem chama a classe passar a instancia.

O angular possui formas de fazer essa injeção, isto é, instanciar a classe (geralmente de um serviço) quando o componente for criado
O angular pode instanciar uma classe de duas formas: utilizando um @Injectable ou passando no provider a classe que será injetada. No injectable
é possivel escolher onde o serviço será disponibilizado, um módulo específico por exemplo. Para disponibilizar para toda a aplicacao
é so escoler a opcao root.
O provider dentro do decorator tanto do módulo quando do componente fará também a instanciaçao do servico, mas importante saber que
existe uma hierarquia e que começa de baixo pra cima a sobreposição.
Esse tipo de injeção mais simples que é so usar o root ou passar o servico no provider ocorre quando não é preciso alterar a funcionalidade do serviço
Porém suponha que já exista um serviço funcionando em diversos pontos da aplicacao que usa como base o localstorage, mas para
um determinado componente ao inves é preciso utilizar o sessionstorage, é bem mais conveniente apenas alterar para esse componte.

O angular sabe qual injecao fazer, pois ele utiliza um token pra fazer a associacao do serviço que será injetado, o token é basicamente o nome do
própio serviço
Já que o angular reconhece o token é possivel mudar a implementacao de uma classe utilizado o {provide}
nesse objeto passa na chave provide o token (nome do servico) e a implementacao:
useClass: altera a classe (classes diferentes podem ter os mesmos metodos)
useValue: altera um objeto
useFactory: o useFactory é uma função e essa função pode retornar uma nova classe por exemplo. O onjetivo de uma factory é que

O token também pode ser passado em forma de uma string, ou de um InjectableToken no provide sendo que a implementacao pode ser um class
ou um objeto conforme fizer sentido, o importante que a associao desse token no contrutor é feito como @Inject(token)


*/

class SwitchServiceAlternative {
  switchThing() {
    console.log('Switch Alternativo');
  }
}

const ObjectAlternative = {
  color: 'Testando a chamada da propriedade de um objeto',
};

const TOKEN = 'token';

class TokenAlternativeService {
  token() {
    console.log('token alternativo');
  }
}

const HEROES = [{ isSecret: 'false' }];

class Logger {
  log(LOG: string) {
    console.log(LOG);
  }
}

class HeroService {
  constructor(private logger: Logger, private isAuthorized: boolean) {}

  getHeroes() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter((hero) => this.isAuthorized || !hero.isSecret);
  }
}

const heroServiceFactory = (logger: Logger, userService: UsersService) =>
  new HeroService(logger, userService.isAuthorized);

class testetoken {
  data: string = 'teste';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ExportService, //Forma de injetar um serviço sem ser com o root, injetado no provider
    LoginService,
    DownloadService,
    CommentService,
    { provide: SwitchService, useClass: SwitchServiceAlternative }, // se a classe passada no useClass possuir dependencia a dependencia tambem deve ser passada
    { provide: ObjectService, useValue: ObjectAlternative },
    { provide: TOKEN, useClass: TokenAlternativeService },
    Logger,
    { provide: 'teste', useValue: '123' },
    {
      provide: HeroService,
      useFactory: heroServiceFactory,
      deps: [Logger, UsersService],
    }, // como a factory possui dependencia é preciso injetar na factory essas dependencias com a propriedade deps
  ],
})
export class AppComponent {
  title = 'DIExample';
  i = 2

  @ViewChild(MatCheckbox, { static: true }) mat: MatCheckbox | undefined;

  constructor(
    private connectService: ConnectService, // serviço injetado por meio do @Injectable({providedIn: 'root'}),
    private manageService: ManageService, //serviço injetado no modulo com providedin
    private importService: ImportService, //injetado com @Injectable porém sem o providedIn, caso náo seja passado dentro de um provider dará NullInject --> no caso foi passado via provider do Modulo
    private exportService: ExportService, //igual o de cima porém a injecao é feita no provider do component
    private loginService: LoginService, //o login service possui uma dependencia dentro dele, como os dois servicoes nao possuem o root para LoginService funcionar é preciso passar o DownloadService tambem
    private commentService: CommentService, // injetado sem o @Injectable o que significa que o injectable é mais para o caso de eu querer injetar sem o root
    private switchService: SwitchService, // sem implementacao alguma o switch service vai mostrar a mensagem switch original, mas se fizer via provider é poss[ive mudar] a mensagem
    private objectService: ObjectService, // é possível tamb[em ao inves passar uma classe passar um objeto com o usevalue
    @Inject(TOKEN) private tokenService: TokenService, //sem o root e sem passar pro provider também da pra fazer a instancia via token
    private heroService: HeroService, //o hero service retorna resultados dependendo se o usuário esta autorizado ou nao. Como isso muda conforme cada usuario muda ao inves de passar a classe se passa uma funçao que irá retornar a mesma classe porém com argumentos diferentes
    @Optional() private optionalService: OptionalService, //quando o angular procura pelo injetor da dependencia e nao acha ele retorna um nullInjector, com o optional ele impede esse erro
    @Inject('teste') private testetoken: testetoken
  ) {}

  ngOnInit() {
    this.connectService.connect();
    this.manageService.manage();
    this.importService.import();
    this.exportService.export();
    this.loginService.downloadAfterLogin();
    this.commentService.comment();
    this.switchService.switchThing();
    console.log(this.objectService.color);
    this.tokenService.token();
    this.heroService.getHeroes();
    this.optionalService.optional();
    console.log(this.testetoken)
  }

  ngAfterViewInit() {
    this.mat?.focus();
  }
}
