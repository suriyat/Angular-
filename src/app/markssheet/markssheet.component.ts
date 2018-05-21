import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import LocalStorageAccess from '../storage/localstorage';
import GradeService from '../service/GradeService';

@Component({
  selector: 'app-markssheet',
  templateUrl: './markssheet.component.html',
  styleUrls: ['./markssheet.component.css']
})
export class MarkssheetComponent {
  gradeService;
  constructor(gradeService: GradeService) {
    this.gradeService = gradeService;
  }
  form = new FormGroup({
    'name': new FormControl('',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(4)
      ]),
    'marks': new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(0),
    ])
  });

  get name() {
    return this.form.get('name');
  }
  get marks() {
    return this.form.get('marks');

  }
  createPost(obj: HTMLInputElement) {
    const name = this.name.value;
    const marks = this.marks.value;
    if (name.length > 0) {
      this.gradeService.saveGrade(name, marks);
      alert(`Grades saved. Total: ${this.gradeService.grades.length}`);
      this.name.setValue('');
      this.marks.setValue(0);
    }

  }
}
