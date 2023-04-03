import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Landing Page</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 500,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>15/02/2023</td>
            </tr>

            <tr>
              <td width="40%">Lanches</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 70,00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>15/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
