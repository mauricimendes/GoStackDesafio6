import { getCustomRepository } from 'typeorm'

import AppError from '../errors/AppError';
import TransactionRespository from '../repositories/TransactionsRepository'

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRespository = getCustomRepository(TransactionRespository)

    const transaction = await transactionsRespository.findOne(id)

    if(!transaction) {
      throw new AppError('Transaction does not exist')
    }

    await transactionsRespository.remove(transaction)
  }
}

export default DeleteTransactionService;
