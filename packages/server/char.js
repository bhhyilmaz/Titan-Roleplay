mp.events.add('client/head', (player, head) => {
    let head_array = head.split(", ").map(value => value.trim());

    const hair = Number(head_array[0]);
    const beard = Number(head_array[1]);
    const beardcolor = Number(head_array[2]);
    const inputdmg0 = Number(head_array[3]);
    const inputdmg2 = Number(head_array[5]);
    const inputdmg3 = Number(head_array[6]);
    const inputdmg4 = Number(head_array[7]);
    const inputdmg5 = Number(head_array[8]);
    const inputdmg6 = Number(head_array[9]);
    const inputdmg7 = Number(head_array[10]);
    const inputdmg8 = Number(head_array[11]);
    const inputdmg9 = Number(head_array[12]);
    const inputdmg10 = Number(head_array[13]);
    const inputdmg11 = Number(head_array[14]);
    const inputdmg12 = Number(head_array[15]);

    player.setClothes(2, hair, 0, 0);
    player.setHeadOverlay(1, [beard, 1, beardcolor, beardcolor]);

    player.setHeadOverlay(0, [inputdmg0, 1, 0, 0]);
    player.setHeadOverlay(2, [inputdmg2, 1, 0, 0]);
    player.setHeadOverlay(3, [inputdmg3, 1, 0, 0]);
    player.setHeadOverlay(4, [inputdmg4, 1, 0, 0]);
    player.setHeadOverlay(5, [inputdmg5, 1, 0, 0]);
    player.setHeadOverlay(6, [inputdmg6, 1, 0, 0]);
    player.setHeadOverlay(7, [inputdmg7, 1, 0, 0]);
    player.setHeadOverlay(8, [inputdmg8, 1, 0, 0]);
    player.setHeadOverlay(9, [inputdmg9, 1, 0, 0]);
    player.setHeadOverlay(10, [inputdmg10, 1, 0, 0]);
    player.setHeadOverlay(11, [inputdmg11, 1, 0, 0]);
    player.setHeadOverlay(12, [inputdmg12, 1, 0, 0]);
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
    let val1 = Number(single_array[1]);
    let val2 = Number(single_array[2]);
    const val10 = Number(single_array[10]);
    const val11 = Number(single_array[11]);
    const val12 = Number(single_array[12]);
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

    player.setCustomization(val0, val1, val2, 0, val1, val2, 0, 0, 100, 0, val10, val11, val12, 
        [
            ff0, ff1, ff2, ff3, ff4,
            0.0, ff6, ff7, ff8, ff9,
            ff10, ff11, ff12, ff13, ff14,
            ff15, ff16, ff17, ff18, ff19,
        ]
    );

    player.playAnimation('anim@veh@heli@thruster@front@base', 'sit', 8, 1);
});