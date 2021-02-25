import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/adilson-lima.png" alt="Adilson Pereira Lima" />
            <div>
                <strong>Adilson Pereira Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}