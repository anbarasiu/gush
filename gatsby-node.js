const fetch = require(`node-fetch`);

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // Content from Pinterest board
  const result = await Promise.all([
    fetch(
      `https://api.pinterest.com/v3/pidgets/boards/anbarasichandra/words/pins/`
    ),
    fetch(
      `https://api.pinterest.com/v3/pidgets/boards/anbarasichandra/stories/pins/`
    ),
    fetch(
      `https://api.pinterest.com/v3/pidgets/boards/anbarasichandra/poems/pins/`
    )
  ]);
  const resultData = await result.json();
  console.log(resultData);
  const pins = resultData.pins.map(pin => {
    let p = pin['237x'];
    return { width: p.width, height: p.height, url: p.url };
  });

  // create node for build time data example in the docs
  createNode({
    pins,
    // required fields
    id: `pins`,
    parent: null,
    children: [],
    internal: {
      type: `pins`,
      contentDigest: createContentDigest(resultData)
    }
  });
};
