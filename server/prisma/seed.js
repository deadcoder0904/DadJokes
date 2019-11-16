const { Photon } = require('@generated/photon')
const photon = new Photon()

async function main() {
  const joke1 = await photon.jokes.create({
    data: {
      joke:
        'Did you hear the one about the guy with the broken hearing aid? Neither did he.',
    },
  })
  const joke2 = await photon.jokes.create({
    data: {
      joke:
        'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
    },
  })
  const joke3 = await photon.jokes.create({
    data: {
      joke: "I don't trust stairs. They're always up to something.",
    },
  })
  const joke4 = await photon.jokes.create({
    data: {
      joke:
        "Dad died because he couldn't remember his blood type. I will never forget his last words. Be positive.",
    },
  })
  console.log({ joke1, joke2, joke3, joke4 })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
