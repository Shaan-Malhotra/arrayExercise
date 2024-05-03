let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("5-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// print red car license plate
let redCars = vehicles.filter(v => v.color === "Red");
for (let i = 0; i < redCars.length; i++) {
   // console.log(redCars[i].licenseNo);
}

// print vehicles with expired registration
let expiredCars = vehicles.filter(v => v.registrationExpires < new Date("1-31-2022"));
for (let i = 0; i < expiredCars.length; i++) {
   // console.log(expiredCars[i].licenseNo);
}

// vehicles that hold at least 6 people
let bigCars = vehicles.filter(v => v.capacity >= 6);
for (let i = 0; i < bigCars.length; i++) {
   // console.log(bigCars[i].licenseNo);
}

// vehicles have license plates that end with "222"
let license222 = vehicles.filter(v => v.licenseNo.endsWith("222"));
for (let i = 0; i < license222.length; i++) {
    console.log(license222[i].licenseNo);
}