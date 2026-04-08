import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Logo</h1>
                </div>
            </div>
        </nav>
    );
}

// export default function Navbar() {
//     return (
//         <nav>
//             <div>
//                 <div>
//                     <h1>Logo</h1>
//                 </div>
//             </div>
//         </nav>
//     );
// }