mp.events.add('a', (player) => {
    player.heading += 90;
});


mp.events.add('client/char', (player, single) => {
    let single_array = single.split(", ").map(value => value.trim());

    let val0 = false;
    switch (single_array[0]) {
        case "true":
            val0 = true;
            break;
        default:
            val0 = false;
            break;
    }
    const val1 = Number(single_array[1]);
    const val2 = Number(single_array[2]);
    const val10 = Number(single_array[10]);
    const ff0 = Number(single_array[13]);
    const ff1 = Number(single_array[14]);
    const ff2 = Number(single_array[15]);
    const ff3 = Number(single_array[16]);
    const ff4 = Number(single_array[17]);
    const ff6 = Number(single_array[18]);
    const ff7 = Number(single_array[19]);
    const ff8 = Number(single_array[20]);
    const ff9 = Number(single_array[21]);
    const ff10 = Number(single_array[22]);
    const ff11 = Number(single_array[23]);
    const ff12 = Number(single_array[24]);
    const ff13 = Number(single_array[25]);
    const ff14 = Number(single_array[26]);
    const ff15 = Number(single_array[27]);
    const ff16 = Number(single_array[28]);
    const ff17 = Number(single_array[29]);
    const ff18 = Number(single_array[30]);
    const ff19 = Number(single_array[31]);

    player.setCustomization(val0, val1, val2, 0, val1, val2, 0, 0, 100, 0, val10, 0, 0, 
        [
            ff0, ff1, ff2, ff3, ff4,
            0.0, ff6, ff7, ff8, ff9,
            ff10, ff11, ff12, ff13, ff14,
            ff15, ff16, ff17, ff18, ff19,
        ]
    );
});