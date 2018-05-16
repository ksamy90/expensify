import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set text filter object with text values', () => {
    const text = 'Seattle'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('implement sort by amount features', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('implement sort by date features', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(5));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(5)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(15));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(15)
    });
});
