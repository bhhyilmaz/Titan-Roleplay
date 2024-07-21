mp.events.add('a', (player) => {
    player.heading += 90;
});

mp.events.add('client/char', (player, single) => {
    let valuesArray = single.split(", ").map(value => value.trim());

    const val1 = valuesArray[0] === "true";
    const val2 = parseInt(valuesArray[1], 10);
    const val3 = parseInt(valuesArray[2], 10);
    const val4 = parseInt(valuesArray[3], 10);
    const val5 = parseInt(valuesArray[4], 10);
    const val6 = parseInt(valuesArray[5], 10);
    const val7 = parseInt(valuesArray[6], 10);
    const val8 = parseInt(valuesArray[7], 10);
    const val9 = parseInt(valuesArray[8], 10);
    const val10 = parseInt(valuesArray[9], 10);
    const val11 = parseInt(valuesArray[10], 10);
    const val12 = parseInt(valuesArray[11], 10);
    const val13 = parseInt(valuesArray[12], 10);

    player.setCustomization(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, 
        [
            0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0, 0.0,
        ]
    );
});