import * as Dialog from '@radix-ui/react-dialog'
import {
  Content,
  Overlay,
  CloseButton,
  TransactionTypeContainer,
  TransactionTypeButton,
} from './styles'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const NewTransactionSchema = z.object({
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionSchemaType = z.infer<typeof NewTransactionSchema>

const NewTransactionModal = () => {
  const { createTransaction } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        createTransaction: context.createTransaction,
      }
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionSchemaType>({
    resolver: zodResolver(NewTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreateNewTransaction = async (data: NewTransactionSchemaType) => {
    await createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )
            }}
          />

          <button title="cadastrar" type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
