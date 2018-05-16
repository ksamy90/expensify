import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should show edit expense action object', () => {
    const action = editExpense('1040ez', { description: 'Seattle'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1040ez',
        updates: { description: 'Seattle' }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = addExpense({
        description: 'Seattle touch',
        note: 'Awesome experience',
        amount: 45000,
        createdAt: 1500
    });
    expect(expenseData).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Seattle touch',
            note: 'Awesome experience',
            amount: 45000,
            createdAt: 1500
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
