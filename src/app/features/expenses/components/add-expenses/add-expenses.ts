import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExpensesService } from '@expenses/services/expenses';

@Component({
  selector: 'app-add-edit-expense',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './add-expenses.html',
  styleUrl: '../../styles/expenses-styles.scss'
})
export class AddExpenses implements OnInit {
  expenseId: number | null = null;
  expense = {
    id: null,
    title:'',
    category: '',
    amount: 0,
    date: '',
    details:''
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
      // const existing = this.expensesService.getExpenseById(this.expenseId);
    }
  }

 addExpense(): void {
  this.expensesService.addExpense(this.expense).subscribe({
    next: (res) => {
      console.log("Expense added successfully", res);
      this.router.navigate(['/expenses']); // navigate AFTER success
    },
    error: (err) => {
      console.error("Error adding expense", err);
    }
  });
}
}
