//每秒紀錄時間
setInterval(logClockTime, 1000);

function logClockTime() {
    //取得時間字串
    let time = getClockTime();
    //清理控制台並印出時間
    console.clear();
    console.log(time);
}

function getClockTime() {
    //取得現在時間
    let date = new Date();
    //轉換為物件
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }


    //轉換為12小時制
    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12
    }
    //時，前綴字0
    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }
    //分
    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }
    //秒
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    //轉換為字串
    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
};