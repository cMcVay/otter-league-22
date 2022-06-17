import periodBreakdown from "./periodBreakdown";

function findPeriod(x) {
    let periodNumber = 1
    for (let i=0; i<20; i++) {
        let date2 = x;
        let date3 = new Date(periodBreakdown[i].end);
        date3.setDate(date3.getDate()+1)
        if (date2 > date3) {
            periodNumber = periodNumber + 1;
            console.log(date2 + ", " + date3 + ", period:", periodNumber);
        }
         else {
            break;
        }
    }
    return periodNumber;
}

const today = new Date()
console.log(today)
console.log(Date(periodBreakdown[8].end))
console.log(today === Date(periodBreakdown[8].end))
const periodNumber = findPeriod(today);

const startDate = new Date(periodBreakdown[periodNumber-1].start);

const diffTime = Math.abs(today - startDate);
const ScoringDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));







export {periodNumber, ScoringDay};