import PropTypes from 'prop-types';
import { TransactionTable, TranHead, TranHeadTh, TranBodyTr, TranBodyTd } from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => {
    return (
        <TransactionTable>
            <TranHead>
                <tr>
                    <TranHeadTh>Type</TranHeadTh>
                    <TranHeadTh>Amount</TranHeadTh>
                    <TranHeadTh>Currency</TranHeadTh>
                </tr>
            </TranHead>
        
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <TranBodyTr key={id}>
                        <TranBodyTd>{type}</TranBodyTd>
                        <TranBodyTd>{amount}</TranBodyTd>
                        <TranBodyTd>{currency}</TranBodyTd>
                    </TranBodyTr>
                ))}
            </tbody>
        </TransactionTable>
    )

}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    )
};