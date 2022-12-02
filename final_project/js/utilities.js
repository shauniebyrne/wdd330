//Get current date
//current date for header in all pages
export function currentDate () {
    let date = new Date();
    const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
    return fullDate;
}
