async function fetchContent() {
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
  const [words, stories, poems] = result;
  return {
    words: transform(await words.json()),
    stories: transform(await stories.json()),
    poems: transform(await poems.json())
  };
}

const transform = ({ data }) => {
  const { pins } = data;
  return pins.map(pin => {
    let p = pin && pin.images && pin.images['564x'];
    return { width: p.width, height: p.height, url: p.url };
  });
};

export default fetchContent;
