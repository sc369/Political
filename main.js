campaignInfo = {
    congDistrict: "TN7th",
    missionStatement: "Elizabeth Sanger wants to return power to the people",
    donationURL: "https://www.supportSanger.com/donate.",
    regToVoteURL: "https://www.usvotefoundation.org/vote/voter-registration-absentee-voting.htm",
    Biography: "Elizabeth Sanger is a former FBI agent who adopted 3 kids from China and started her own multi-milion dollar business",
    platformStatements: {
        Crime: "We should be tough on crime",
        Taxes: "Taxes need to come down",
        Infrastructure: "Infrastructure should be funded by private industry",
        healthCare: "People should pay for their own medical care",
        Jobs: "We should trust the invisible hand of the market to provide jobs"
    },
    imageGallery: ["headshot.png", "family.png", "constituents.png"
    ],
    events: [
        event1 = {
            name: "Cake Sale",
            date: "Jan 20, 2019",
            location: "North Brentwood",
            duration: "3 hours 20 minutes"
        },
        event2 = {
            name: "gunRightsRally",
            date: "Feb 2, 2019",
            location: "Central Franklin",
            duration: "4 hours"
        }
    ],
    volunteers: [
        volunteer1 = {
            name: "Grace Hopper",
            activityWillingness: {
                heckleOpponents: true,
                bribeOfficials: true,
                murderJournalists: false,
            },
            email: "gh234@gmail.com",
            phoneNumber: "615-224-3059",
            availability: "Monday, Saturday",
            address: "2343 Hillsboro Road, Franklin, TN",

        },
    ]
}

function changeInfo(infoObject, newInfo) {
campaignInfo[infoObject] = newInfo
console.log(campaignInfo.congDistrict)
return newInfo
}

changeInfo("congDistrict", "TN6th")
