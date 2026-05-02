import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExpensesService } from '@features/expenses/services/expenses';

@Component({
  selector: 'app-edit-expense',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './edit-expenses.html',
  styleUrls: ['../../styles/expenses-styles.scss']
})

export class EditExpenses implements OnInit {
  expenseId!: number;
  expense = {
    id:0,
    title: "",
    amount: 0,
    category: "",
    date: '',
    details: ""
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private expenseService: ExpensesService
  ) {}

  ngOnInit() {
  this.expenseId = Number(this.route.snapshot.paramMap.get('id'));
  console.log('Editing expense ID:', this.expenseId);

  this.expenseService.getExpenseById(this.expenseId).subscribe(exp => {
    console.log(exp);
    if (exp) {
      this.expense = {
        id:this.expenseId,
        title: exp.title,
        amount: exp.amount,
        category: exp.category,
        date: exp.date ? exp.date.split('T')[0] : '',
        details: exp.details
      };

    } else {
      console.warn('Expense not found');
      this.router.navigate(['/expenses']);
    }
  });
}

  onUpdate() {
    this.expenseService.updateExpense(this.expense).subscribe(() => {
      this.router.navigate(['/expenses']);
    });
   }
}
