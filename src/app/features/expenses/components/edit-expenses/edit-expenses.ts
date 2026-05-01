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
    title: '',
    amount: null,
    category: '',
    date: '',
    notes: ''
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private expenseService: ExpensesService
  ) {}

  ngOnInit() {
    this.expenseId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Editing expense ID:', this.expenseId);

    // this.expenseService.getExpenseById(this.expenseId).subscribe(exp => {
    //   if (exp) {
    //     this.expense = exp; 
    //   } else {
    //     console.warn('Expense not found');
    //     this.router.navigate(['/expenses']);
    //   }
    // });
  }

  onUpdate() {
  //   this.expenseService.updateExpense(this.expenseId, this.expense).subscribe(() => {
  //     this.router.navigate(['/expenses']);
  //   });
   }
}
