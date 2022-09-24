import React from 'react'
import styles from '../Styles/Home.module.css'


const HomeFooter = () => {
    return (
        <div className={styles.home_footer}>
            <div className={styles.home_footer_content}>
                <p>Questions? Call 000-800-040-1843</p>
                <div className={styles.home_footer_content_links}>
                    <div>
                        <p>FAQ</p>
                        <p>Investor Realtions</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div>
                        <p>Help Centre</p>
                        <p>Help Jobs</p>
                        <p>Cookie Preferences</p>
                        <p>Legal Notices</p>
                    </div>
                    <div>
                        <p>Account</p>
                        <p>Ways to Watch</p>
                        <p>Corporate Information</p>
                        <p>OnlineMovies Originals</p>
                    </div>
                    <div>
                        <p>Media Centre</p>
                        <p>Terms of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <p>OnlineMovies Pakistan</p>
            </div>
        </div>
    )
}

export default HomeFooter
