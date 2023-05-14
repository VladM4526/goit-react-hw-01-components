import './transactions.css';

export const TransactionHistory = () => {
    return (
        <div className='transaction-history'>
            <table>
                <thead className='transaction-history-table-title'>
                    <tr className='transaction-history-table-title-tr'>
                        <th className='transaction-history-table-title-tr-item'>Type</th>
                        <th className='transaction-history-table-title-tr-item'>Amount</th>
                        <th className='transaction-history-table-title-tr-item'>Currency</th>
                    </tr>
                </thead>

                <tbody className='transaction-history-table-text-values'>
                    <tr className='transaction-history-table-text-values-item'>invoice</tr>
                    <tr className='transaction-history-table-text-values-item'>964.82</tr>
                    <tr className='transaction-history-table-text-values-item'>LRD</tr>
                </tbody>
            </table>
        </div>        
    );
};