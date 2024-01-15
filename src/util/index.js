import axios from "axios";

export function delay({ callback, ms }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), ms);
  });
}

class VoiceOver {
  constructor() {
    this.defaultParams = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };
    this.endpoint = `https://tiktok-tts.weilnet.workers.dev/api/generation`;
  }

  async getVoiceOver({ text = "test", voice = "en_us_001" }) {
    try {
      let result = await fetch(this.endpoint, {
        ...this.defaultParams,
        body: JSON.stringify({ text, voice }),
      });
      return result.json();
    } catch (error) {
      return null;
    }
  }
}

export async function kanyeApi() {
  const endpoint = "https://api.kanye.rest?format=text";

  try {
    const data = await axios.get(endpoint);
    const {
      data: { quote },
    } = await data;
    return quote;
  } catch (error) {
    return "They trying to silence me. My API is down, but my Spirit is up!";
  }
}

const voiceoverGirl = new VoiceOver();
export { voiceoverGirl };
