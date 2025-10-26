import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesService } from '@expenses/services/expenses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-expenses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-expenses.html',
  styleUrl: '../../styles/expenses-styles.scss'
})
export class ViewExpenses implements OnInit {
  expenses: any[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expenses = this.expensesService.getExpenses();
  }

  deleteExpense(id: number): void {
    this.expensesService.deleteExpense(id);
    this.expenses = this.expensesService.getExpenses();
  }
}
