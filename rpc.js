const RPC = require("discord-rpc");
const rpc = new RPC.Client({
  transport: "ipc",
});

rpc.on("ready", () => {
  const statusArray = [
    "Grailseeker Guardian",
    "Crossbow Master",
    "Locus Expert",
    "Energy Shaper Abuser",
  ];
  let index = 0;
  setInterval(() => {
    if (index === statusArray.length) index = 0;
    const status = statusArray[index];
    rpc.setActivity({
      details: status,
      state: "Programmer & Solution Designer.",
      largeImageKey: "singaporepresence",
      largeImageText: "Singapore Mammoth Army",
      smallImageKey: "singapore",
      smallImageText: "Albion Singapore",
      buttons: [
        {
          label: "KAMIIKAZE Is Recruiting!",
          url: "https://discord.gg/7Nf4jdNt",
        },
      ],
      instance: false,
    });
    index++;
  }, 4000);
  console.log(rpc.user.username);
  console.log("Online!");
});
rpc.login({
  clientId: "866310331826962453",
});
