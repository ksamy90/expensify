import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default expenses values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4567
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
    const description = 'Los Angeles';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe('Los Angeles');
});

test('should not edit expense if id not found', () => {
    const description = 'Chicago';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 94,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should setup add expenses values', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'Seattle touch',
            note: 'Awesome',
            amount: 54000,
            createdAt: moment(0).add(5, 'days').valueOf()
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
