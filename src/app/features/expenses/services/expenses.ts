import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ExpensesService {
  private expenses : any[] = [
    { id: 1, title:'Lunch',category: 'Food', amount: 250, date: '2025-10-26', notes: 'Veg Thali' },
    { id: 2, title:'Bus Fare',category: 'Transport', amount: 100, date: '2025-10-25', notes: 'Bus fare from Thane to Belapur' },
  ];

   getExpenses(): Observable<any[]> {
    return of([...this.expenses]);
  }

  addExpense(expense: any): Observable<boolean> {
    expense.id = this.expenses.length + 1;
    this.expenses.push(expense);
    return of(true);
  }

  getExpenseById(id: number): Observable<any> {
    const expense = this.expenses.find(e => e.id === id);
    return of(expense);
  }

  updateExpense(id: number, updatedExpense: any): Observable<boolean> {
    const index = this.expenses.findIndex(e => e.id === id);
    if (index !== -1) {
      this.expenses[index] = { id, ...updatedExpense };
    }
    return of(true);
  }

  deleteExpense(id: number): Observable<boolean> {
    this.expenses = this.expenses.filter(e => e.id !== id);
    return of(true);
  }
}