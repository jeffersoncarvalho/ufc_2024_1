"use client"
import { useRef } from "react"
import { addExpense } from "./server"
import { SubmitButton } from "./submit_button"
 
const Client = () => {
    const ref = useRef(null)
   
    return (
        <form
            ref={ref}
            action={
                async (formData) => {
                    await addExpense(formData)
                    ref.current?.reset()
                }
            }>
            <input
                type="text"
                name="expenseName"
                placeholder="Add an Expense Name"
                required
            />
            <br />
            <input
                type="text"
                name="expenseAmount"
                placeholder="Add an Expense Amount"
                required
            />
            <br />
            <SubmitButton />
        </form>

    )
}

export default Client