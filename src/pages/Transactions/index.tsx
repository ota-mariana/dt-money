import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, valueFormatter } from '../../utils/formatter';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

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
                      {transaction.type === 'outcome' && '- '}
                      { valueFormatter.format(transaction.value) }
                    </PriceHighLight>
                  </td>
                  <td>{ transaction.category }</td>
                  <td>{ dateFormatter.format(new Date(transaction.createdAt)) }</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
