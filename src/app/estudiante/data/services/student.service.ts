import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../../../security/Settings/appsettings';
import { Result, Student } from '../interfaces/student';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  http = inject(HttpClient);
  ruta = appsettings.url;

  async getStudent(){
    const result = await firstValueFrom(this.http.get<Result<Student[]>>(this.ruta + 'estudiante/'));
    return result;
  }
}
