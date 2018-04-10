module.exports = bot => {
    console.log("I'm ready!");
    bot.editStatus("dnd", {
        name: "Kani with Eris lib 1.0.0",
        type: 0,
        url: "https://www.github.com/SYsanc/kani_eris"
    });
}