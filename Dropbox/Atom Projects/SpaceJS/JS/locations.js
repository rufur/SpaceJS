for(i = 0; i < 2; i++){
    var sol = {
        name: "Sol",
        description: "Known as 'The Solar System' by humans",
        children: [earth]
    };

    var nySpaceport = {
        name: "New York Spaceport",
        description: "A Spaceport in New York",
        parent: earth,
        children: [shackle]
    };

    var tokyoSpaceport = {
        name: "Tokyo Spaceport",
        description: "A Spaceport in Tokyo, Japan",
        parent: earth
    };

    var leos1 = {
        name: "LEOS1",
        description: "A Low Earth Orbit Space Station",
        parent: earth
    };

    var earth = {
        name: "Earth",
        description: "Home",
        parent: sol,
        children: [leos1, nySpaceport, tokyoSpaceport]
    };

    var shackle = {
        name: "The Shackle",
        description: "A reasonably sized bar in the NY Spaceport",
        parent: nySpaceport,
        stock: "Stock system unimplemented" //Something like stock.shackleStock
    };
}

console.log("locations.js loaded");
