import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.header}
            </div>
        )
    }
}

export default Greeter