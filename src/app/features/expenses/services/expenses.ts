import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'app/environment';

@Injectable({ providedIn: 'root' })
export class ExpensesService {
  private expenseApi = `${environment.apiGateway}/expenses`;

  constructor(private http: HttpClient) {}

  // 🔥 Fetch expenses from backend
  getExpenses(): Observable<any[]> {
   var userId = 2;
    return this.http.get<any[]>(`${this.expenseApi}/${userId}/view_all`);
  }

  addExpense(expense: any): Observable<any> {
    var userId = 2;
    return this.http.post(`${this.expenseApi}/${userId}/add_expense`, expense);
  }

  // getExpenseById(id: number): Observable<any> {
  //   const expense = this.expenses.find(e => e.id === id);
  //   return of(expense);
  // }

  // updateExpense(id: number, updatedExpense: any): Observable<boolean> {
  //   const index = this.expenses.findIndex(e => e.id === id);
  //   if (index !== -1) {
  //     this.expenses[index] = { id, ...updatedExpense };
  //   }
  //   return of(true);
  // }

  // deleteExpense(id: number): Observable<boolean> {
  //   this.expenses = this.expenses.filter(e => e.id !== id);
  //   return of(true);
  // }
}