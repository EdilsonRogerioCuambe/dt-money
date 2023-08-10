import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const SearchFormSchema = z.object({
  query: z.string().nonempty(),
})

type SearchFormSchemaType = z.infer<typeof SearchFormSchema>

const SearchForm = () => {
  const { getTransactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        getTransactions: context.getTransactions,
      }
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(SearchFormSchema),
  })

  const handleSeachTransactions = async (data: SearchFormSchemaType) => {
    await getTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
      <input
        type="text"
        placeholder="Buscar por transações"
        {...register('query')}
      />
      <button title="buscar" type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
