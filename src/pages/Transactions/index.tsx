import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={ transaction.id }>
                  <td width="40%">{ transaction.description }</td>
                  <td>
                    <PriceHighLight variant={ transaction.type }>
                      { transaction.value }
                    </PriceHighLight>
                  </td>
                  <td>{ transaction.category }</td>
                  <td>{ transaction.createdAt }</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
