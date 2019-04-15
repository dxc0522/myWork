import axios from 'axios'
const ajax = data => {
    return new Promise((resolve, reject) => {
        let pushType = {
            method: data.method ? data.method : "post",
            url: "http://localhost:3030/"+ (typeof data==="string")?data:data.url,
        }
        axios(pushType).then(res => {
            if (res.status === 200 && res.statusText === "OK") {
                resolve(res.data)
            } else {
                reject(res.data.message)
            }
        }, err => {
            reject(err.message)
        });
    })
}
export default ajax