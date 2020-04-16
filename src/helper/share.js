export const isShareAvailable = () => {
  return navigator && navigator.share && navigator.canShare;
};

const convertBase64ToFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const share = async (imageUrl) => {
  let data = { title: 'Gush' };
  if (isShareAvailable) {
    try {
      let file = convertBase64ToFile(imageUrl, 'GushWriting.png');
      data.files = [file];
      const response = await navigator.share(data);
      if (response && window.analytics) {
        window.analytics.track('SHARE_SUCCESS', {
          response,
        });
      }
    } catch (error) {
      if (window.analytics) {
        window.analytics.track('SHARE_FAILURE', {
          error,
        });
      }
    }
  }
};
