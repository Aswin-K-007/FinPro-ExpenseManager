import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesService } from '@expenses/services/expenses';

@Component({
  selector: 'app-add-edit-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-expenses.html',
  styleUrl: '../../styles/expenses-styles.scss'
})
export class AddEditExpenses implements OnInit {
  expenseId: number | null = null;
  expense = {
    id: 0,
    category: '',
    amount: 0,
    date: ''
  };

  constructor(
    private expensesService: ExpensesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.expenseId = +idParam;
      const existing = this.expensesService.getExpenseById(this.expenseId);
      if (existing) this.expense = { ...existing };
    }
  }

  saveExpense(): void {
    if (this.expenseId) {
      this.expensesService.updateExpense(this.expense);
    } else {
      this.expensesService.addExpense(this.expense);
    }
    this.router.navigate(['/expenses']);
  }
}
