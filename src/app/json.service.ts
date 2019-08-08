import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {

  constructor(private http: HttpClient) { }
configUrl = 'https://gist.githubusercontent.com/dabalyan/eeacdd4fd86b4a844f48a75d134d9f10/raw/035f6e2db6c97ff3bf1050df6497840ba90cae3d/menuData.json';

getConfig() {
  return this.http.get(this.configUrl);
}
}