import axios from "axios";

class VoiceOverAPI {
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

class KanyeApi {
  constructor() {
    this.endpoint = "https://api.kanye.rest?format=text";
  }
  async getKanyeQuote() {
    try {
      const data = await axios.get(this.endpoint);
      const {
        data: { quote },
      } = await data;
      return quote;
    } catch (error) {
      return "They trying to silence me. My API is down, but my Spirit is up!";
    }
  }
}

const voiceoverGirl = new VoiceOverAPI();
const kanyeQuote = new KanyeApi();

export { voiceoverGirl, kanyeQuote };
