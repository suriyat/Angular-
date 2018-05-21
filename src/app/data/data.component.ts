import { Http } from '@angular/http';
import { Component } from '@angular/core';
import LocalStorageAccess from '../storage/localstorage';
import Grade from '../typings/grade';
import GradeService from '../service/GradeService';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  gradeService;
  editables: number[];
  constructor(gradeService: GradeService) {
    this.gradeService = gradeService;
    this.gradeService.getAllGrades();
    this.editables = [];
  }

  public deleteGrade(id) {
    this.gradeService.deleteGrade(id);
  }

  public toggleEditGrade(grade: Grade) {
    const { id, name, marks } = grade;
    if (this.editables.indexOf(id) > -1) {
      this.gradeService.updateGrade( id, name, marks );
      this.editables.splice(this.editables.indexOf(id), 1);
    } else {
      this.editables.push(id);
    }
  }



}



