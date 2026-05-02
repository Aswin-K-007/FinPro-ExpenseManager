import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'app/environment';

@Injectable({ providedIn: 'root' })
export class ExpensesService {
  private userId = localStorage.getItem('userId');
  private expenseApi = `${environment.apiGateway}/expenses/${this.userId}`;
  

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.expenseApi}/view_all`);
  }

  getExpenseById(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.expenseApi}/view/${id}`);
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.expenseApi}/add_expense`, expense);
  }


   updateExpense(expense: any): Observable<any> {
    return this.http.put(`${this.expenseApi}/edit_expense`, expense);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.expenseApi}/remove_expense/${id}`);
  }
}