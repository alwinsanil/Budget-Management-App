import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [spends, setSpends] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addSpend = async (income) => {
        const response = await axios.post(`${BASE_URL}add-spend`, income)
            .catch((err) =>{
                setError(response.data.message)
            })
        getSpends()
    }

    const getSpends = async () => {
        const response = await axios.get(`${BASE_URL}get-spends`)
        setSpends(response.data)
        console.log(response.data)
    }

    const deleteSpend = async (id) => {
        await axios.delete(`${BASE_URL}delete-spend/${id}`)
        getSpends()
    }

    const totalSpends = () => {
        let totalIncome = 0;
        spends.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalSpends()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...spends]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            spends,
            totalIncome,
            addSpend,
            getSpends,
            deleteSpend,
            totalSpends,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}