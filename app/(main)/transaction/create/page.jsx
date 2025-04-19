import { getUserAccounts } from '@/actions/dashboard'
import { getTransaction } from '@/actions/transaction';
  import { AddTransactionForm } from '../_components/transaction-form';
import { defaultCategories } from '@/data/categories';

const AddTransactionPage =async ({searchParams}) => {
  
  const accounts=await getUserAccounts()
  const editId = (await searchParams)?.edit;

  let initialData = null;
  if (editId) {
    const transaction=await getTransaction();
    initialData=transaction;
  }


  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  )
}

export default AddTransactionPage