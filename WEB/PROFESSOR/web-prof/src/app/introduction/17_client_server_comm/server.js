"use server"

import { revalidatePath } from "next/cache"

let expenses = []
let id = 0

const addExpense = async (formData) => {
    
    const expenseName = formData.get("expenseName")
    const expenseAmount = formData.get("expenseAmount")
    //console.log(expenseName)
    //console.log(expenseAmount)
    expenses.push({name:expenseName,amount:expenseAmount,key:id++})
    revalidatePath("/introduction/17_client_server_comm")
}

const getExpenses = async () => {
    return expenses
}

export { addExpense, getExpenses }