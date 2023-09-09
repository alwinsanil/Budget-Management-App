const { addSpend, getSpend, deleteSpend } = require('../controllers/spend');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-spend', addSpend)
    .get('/get-spends', getSpend)
    .delete('/delete-spend/:id', deleteSpend)

module.exports = router