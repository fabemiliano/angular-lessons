import { Injectable } from '@angular/core';

@Injectable()
export class DownloadService {

  constructor() { }

  download() {
    console.log("Download Service Injetado sem o root como dependencia de login service")
  }
}
