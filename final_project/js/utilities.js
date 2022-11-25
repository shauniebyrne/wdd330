//Get current date
export function currentDate () {
    let date = new Date();
    const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
    return fullDate;
}