import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesService } from '@expenses/services/expenses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-expenses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-expenses.html',
  styleUrls: ['./view-expenses.scss']
})
export class ViewExpenses implements OnInit {
  expenses: any[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expensesService.getExpenses().subscribe(data => {
      this.expenses = data;
    });
  }

  // deleteExpense(id: number): void {
  //   this.expensesService.deleteExpense(id).subscribe(() => {
  //     this.loadExpenses();
  //   });
  // }
}
