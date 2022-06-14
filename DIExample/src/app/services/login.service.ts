import { Injectable } from '@angular/core';
import { DownloadService } from './download.service';

@Injectable()
export class LoginService {
  constructor(private downloadService: DownloadService) {}
  isAuthorized = true;
  doLogin() {
    console.log('login service');
  }

  downloadAfterLogin() {
    this.downloadService.download();
  }
}
