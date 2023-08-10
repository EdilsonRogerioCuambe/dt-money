import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import Transactions from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
