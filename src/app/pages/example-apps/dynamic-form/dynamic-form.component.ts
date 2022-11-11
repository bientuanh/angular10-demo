import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  isSubmitted = true;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
    favorites: this.fb.array([this.fb.control('', Validators.required)]),
    notes: this.fb.array([
      this.fb.group({
        title: ['', Validators.required],
        comment: ['', Validators.required],
      }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  get notes(): FormArray {
    return this.profileForm.get('notes') as FormArray;
  }

  get favorites(): FormArray {
    return this.profileForm.get('favorites') as FormArray;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.profileForm.valid) {
      alert(JSON.stringify(this.profileForm.value));
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  addFavorites(): void {
    this.favorites.push(this.fb.control('', Validators.required));
  }

  removeFavorite(i): void {
    console.log('test', i);
    this.favorites.removeAt(i);
  }

  addNotes(): void {
    this.notes.push(
      this.fb.group({
        title: ['', Validators.required],
        comment: ['', Validators.required],
      })
    );
  }

  removeNote(i): void {
    this.notes.removeAt(i);
  }
}
