mp.events.add('a', (player) => {
    player.heading += 90;
});

mp.events.add('char/gender', (player, gender) => {
    console.log(gender);
});

mp.events.add('char', () => {
    player.setCustomization(
        bGender, 
        MotherBlend, 
        FatherBlend, 
        0, 
        MotherBlend, 
        FatherBlend, 
        0, 
        fBlendShape, 
        fBlendSkin, 
        0, 
        1, 
        HairColour, 
        HairHighlight, 
        [
            NoseWidth, NoseHeight, NoseLength, NoseBridge, NoseTip, NoseBridgeShift, 
            BrowHeight, BrowWidth, CBoneHeight, CBoneWidth, CheekWidth, Eyes, Lips,
            JawWidth, jawHeight, ChinLength, ChinPos, ChinWidth, ChinShape, NeckWidth
        ]
    );
});