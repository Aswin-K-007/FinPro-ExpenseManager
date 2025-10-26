import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ExpensesService {
  private expenses: any[] = [
    { id: 1, category: 'Food', amount: 250, date: '2025-10-01' },
    { id: 2, category: 'Transport', amount: 120, date: '2025-10-05' },
  ];

  getExpenses() {
    return [...this.expenses];
  }

  getExpenseById(id: number) {
    return this.expenses.find(e => e.id === id);
  }

  addExpense(expense: any) {
    expense.id = this.expenses.length + 1;
    this.expenses.push(expense);
  }

  updateExpense(updated: any) {
    const index = this.expenses.findIndex(e => e.id === updated.id);
    if (index !== -1) this.expenses[index] = updated;
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(e => e.id !== id);
  }
}
