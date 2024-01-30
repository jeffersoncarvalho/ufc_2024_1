import Link from "next/link"
import Client from "./client"
import { getExpenses } from "./server"

const ExpensePage = async () => {

    const expenses = await getExpenses()

    return (
        <div>
            <Client />
            {expenses.map(
                (expense) => {
                    return (
                        <div key={expense.key}>
                             <h3>{expense.key } : {expense.name} - {expense.amount}</h3>
                        </div>
                       
                    )
                }
            )}
            <Link href="/">Home</Link>
        </div>
    )
}

export default ExpensePage