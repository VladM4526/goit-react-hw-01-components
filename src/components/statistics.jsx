import './statistics.css';

export const Statistics = () => {
    return (
        <section className='statistics'>
            <div className='stat-container'>
                <h2 className='stat-title'>UPLOAD STATUS</h2>

                <ul className='stat-list'>
                    <li className='stat-list-item'>
                        <span className='stat-list-item-form-file-name'>.docx</span>
                        <span className='stat-list-item-form-percent'>22%</span>
                    </li>
                    <li className='stat-list-item'>
                        <span className='stat-list-item-form-file-name'>.mp3</span>
                        <span className='stat-list-item-form-percent'>17%</span>
                    </li>
                    <li className='stat-list-item'>
                        <span className='stat-list-item-form-file-name'>.pdf</span>
                        <span className='stat-list-item-form-percent'>4%</span>
                    </li>
                    <li className='stat-list-item'>
                        <span className='stat-list-item-form-file-name'>.mp4</span>
                        <span className='stat-list-item-form-percent'>12%</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};